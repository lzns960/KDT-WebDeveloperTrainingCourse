/*
// @ts-check
const express = require('express');
// express에서 제공하는 Router를 변수에 담기

const router = express.Router();


const { MongoClient, ServerApiVersion } = require('mongodb');
const { resolveTypeReferenceDirective } = require('typescript');

const uri =
  'mongodb+srv://suji:mtn191371wl@cluster0.s7lxybo.mongodb.net/?retryWrites=true&w=majority';
*/

/* 글 전체 목록 보여주기 */
router.get('/', async (req, res) => {
  // 데이터 통신이 성공하면 db로 실패하면 err 메세지
  // db는 mongodb에서 생성한 모든 데이터를 의미한다.
  MongoClient.connect(uri, (err, db) => {
    const data = db.db('kdt1').collection('board');

    // db에서 데이터를 다 받아온 다음에 article이라는 변수에 넣어준다.
    data.find({}).toArray((err, result) => {
      const ARTICLE = result;

      const articleLen = ARTICLE.length; // ARticle 배열의 길이 전달
      // 특정 뷰(ejs 확장자 생략) 파일을 그려라 명령
      // obj의 키 값이 ejs의 파일과 동일한지 확인해야 함.

      // render는 경로 이동으로 '/' 없어도 되지만, redirect는 /있어야 한다.
      res.render('tetz_board', { ARTICLE, articleCounts: articleLen });
    });
  });
});

/* 글 쓰기 모드로 이동 */
router.get('/write', (req, res) => {
  res.render('tetz_board_write');
});

/* 글 추가 기능 수행 */
router.post('/write', (req, res) => {
  if (req.body.title && req.body.content) {
    // 실질적으로 실행할 코드: 배열 마지막에 글이 추가되는 구조 push

    // 키 값으로 title과 content를 가진 객체 = ejs의 name을 따라간다.
    const newArticle = {
      title: req.body.title,
      content: req.body.content,
    };

    // 통신이 성공하거나 실패하던 이 콜백을 실행해라~
    MongoClient.connect(uri, (err, db) => {
      const data = db.db('kdt1').collection('board');

      // data insertOne추가한다~(배열, 콜백함수)
      data.insertOne(newArticle, (err, result) => {
        res.redirect('/tetz_board');
      });
    });
  } else {
    // 예외 처리: 프론트에서 required로 예외처리해서 실은 안해도 된다.
    const err = new Error('데이터가 없습니다');
    // @ts-ignore
    err.statusCode = 404;
    throw err;
  }
});

/* 글 수정모드로 이동 */
router.get('/modify/title/:title', (req, res) => {
  // db 접속
  MongoClient.connect(uri, (err, db) => {
    const data = db.db('kdt1').collection('board');

    // title이 동일한 게있으면 result에 obj형태로 담아주세요~
    data.findOne({ title: req.params.title }, (err, result) => {
      if (err) {
        throw err;
      } else {
        // err가 아니라면 selectedArticle에 result를 담아서 하세요!
        const selectedArticle = result;
        res.render('tetz_board_modify', { selectedArticle });
      }
    });
  });
});

/* 글 수정 기능 수행: 수정하기 눌렀을 때  */
router.post('/modify/title/:title', (req, res) => {
  if (req.body.title && req.body.content) {
    MongoClient.connect(uri, (err, db) => {
      const data = db.db('kdt1').collection('board');

      // 수정은 updateOne 메소드 사용: 조건을 주고, 조건을 찾아와서 $set변경해준다.
      data.updateOne(
        { title: req.params.title },
        {
          $set: {
            title: req.body.title,
            content: req.body.content,
          },
        },
        (err, result) => {
          if (err) {
            throw err;
          } else {
            res.redirect('/tetz_board');
          }
        }
      );
    });
  } else {
    const err = new Error('요청 값이 없습니다.');
    err.statusCode = 404;
    throw err;
  }
});

/* 글 삭제 기능 수행 */
router.delete('/delete/title/:title', (req, res) => {
  MongoClient.connect(uri, (err, db) => {
    const data = db.db('kdt1').collection('board');

    // 지우는 것 deletOne 메소드: 찾아준 후 바로 지워준다.
    data.deleteOne({ title: req.params.title }, (err, result) => {
      if (err) {
        throw err;
      } else {
        // 여기에 redirect 걸면 delete 메소드로 튀어나가기 때문에 notfound가뜬다. => 프론트를 믿고.. send로 처리
        res.send('삭제 완료');
      }
    });
  });
});

module.exports = router;
