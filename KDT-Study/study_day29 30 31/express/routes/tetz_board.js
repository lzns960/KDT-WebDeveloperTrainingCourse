// @ts-check
const express = require('express');
// express에서 제공하는 Router를 변수에 담기

/* multer */
const multer = require('multer');

const fs = require('fs'); // 파일시스템은 node에서 기본제공하는 모듈이기때문에 설치할 필요 없다.
const router = express.Router();

const mongoClient = require('./mongo');

const login = require('./login');

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri =
  'mongodb+srv://suji:mtn191371wl@cluster0.s7lxybo.mongodb.net/?retryWrites=true&w=majority';

/* MUlTER */
const dir = './uploads';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dir); // 어느 폴더에 저장할지 결정
  },
  filename: (req, file, cb) => {
    // 업로드할 파일명 결정
    cb(null, file.fieldname + '_' + Date.now()); // file.fieldname(파일이 원래 가지고 있는 명) + Date.now 파일명이 겹쳐도 다르게 저장하는 보편적인 방법
  },
});

const limits = {
  fileSize: 1024 * 1024 * 2, // 파일 사이즈의 한계 2메가
};
const upload = multer({ storage, limits });

/* 글 전체 목록 보여주기 */
router.get('/', login.isLogin, async (req, res) => {
  console.log(req.user);
  // await 붙은 순간은 이전에 다 callback으로 처리한 순간들이다.
  const client = await mongoClient.connect();
  // 데이터를 변화할 때 콜백을 걸어주면 되는 거니까 위치만 알려주는 정보만 넣어준다.(await 필요없음)
  const cursor = client.db('kdt1').collection('board');
  // 데이터가 받아지면 ARTICLE로 들어간다.
  const ARTICLE = await cursor.find({}).toArray();
  const articleLen = ARTICLE.length;
  res.render('tetz_board', {
    ARTICLE,
    articleCounts: articleLen,
    // 세션에 담겨있는 userID
    // 세션으로 로그인했니? 있으면 로그인 아니면(: 삼항 연산자 연쇄 )
    userId: req.session.userId
      ? req.session.userId
      : req.user?.id
      ? req.user?.id
      : req.signedCookies.id,
    // req.user에 id가 있니? 있으면id 반환 없으면 signedCookieuser로
    /* undefined에 물음표 사용법 */
    // req.user에 물음표를 넣는 것은 undefined 때문, 세션은 서버꺼라 undefined 발생안한다.
    // req.user가 undefined면 문제 없지만 undefined에서 .을 넣어서 키 값(id)를 찾으려고 하면 에러 발생하기 때문에 물음표를 넣어 넘어간다.
  });
});

/* 글 쓰기 모드로 이동 */
router.get('/write', login.isLogin, (req, res) => {
  res.render('tetz_board_write');
});

/* 글 추가 기능 수행 */
router.post('/write', login.isLogin, upload.single('img'), async (req, res) => {
  // upload 멀터의 single ejs의 name:img를 넣는다.
  if (!fs.existsSync(dir)) fs.mkdirSync(dir); // dir 폴더가 있는지 확인(existsSync)하고 없으면 (mkdirSync) dir라는 폴더를 만들어라
  // existsSync 상황에 맞게 폴더가 존재하는지 확인하는 함수 Sync가 들어간 함수는 기본으로 await가 들어가있는 함수라고 생각(편리)
  console.log(req.file);
  if (req.body.title && req.body.content) {
    const newArticle = {
      // 아이디 값: 세션이 있으면 세션 값 아니면 req.user.id
      id: req.session.userId ? req.session.userId : req.user.id,
      userName: req.user?.name ? req.user.name : req.user?.id,
      title: req.body.title,
      content: req.body.content,
      img: req.file ? req.file.filename : null,
    };

    // client에 접속에 관련된 정보를 가져온다.
    const client = await mongoClient.connect();
    // 접속을 바탕으로 db와 collection
    const cursor = client.db('kdt1').collection('board');
    // 데이터받는 시간이 걸리니까 await 걸어서 insertOne 추가
    await cursor.insertOne(newArticle);
    res.redirect('/tetz_board');
  }
});

/* 글 수정모드로 이동 */
router.get('/modify/title/:title', login.isLogin, async (req, res) => {
  const client = await mongoClient.connect();
  const cursor = client.db('kdt1').collection('board');
  // title과 params의 타이틀이 동일하다면, 해당 데이터가 selectedArticle이 들어간다.
  const selectedArticle = await cursor.findOne({ title: req.params.title });
  res.render('tetz_board_modify', { selectedArticle });
});

/* 글 수정 기능 수행: 수정하기 눌렀을 때  */
router.post('/modify/title/:title', login.isLogin, async (req, res) => {
  if (req.body.title && req.body.content) {
    const client = await mongoClient.connect();
    const cursor = client.db('kdt1').collection('board');
    // title이 params의 title과 같다면,
    await cursor.updateOne(
      { title: req.params.title },
      // req.body와 동일하게 바꿈
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
        },
      }
    );
    res.redirect('/tetz_board');
  } else {
    const err = new Error('요청 값이 없습니다.');
    err.statusCode = 404;
    throw err;
  }
});

/* 글 삭제 기능 수행 */
router.delete('/delete/title/:title', login.isLogin, async (req, res) => {
  const client = await mongoClient.connect();
  const cursor = client.db('kdt1').collection('board');
  const result = await cursor.deleteOne({ title: req.params.title });

  // 에러메세지: result 객체가 승인되었는지 ?? acknowledgend가 true면
  if (result.acknowledged) {
    // redirect를 쓰면 delete 메소드로 더 들어가기 때문에 res.send로 끝내준다.
    res.send('삭제 완료');
  } else {
    const err = new Error('삭제 실패');
    err.statusCode = 204;
    throw err;
  }
});

module.exports = router;
