// @ts-check
/*
const express = require('express');
// express에서 제공하는 Router를 변수에 담기

const router = express.Router();
*/

const ARTICLE = [
  {
    title: 'title',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia delectus iusto fugiat autem cupiditate adipisci quas, in consectetur repudiandae, soluta, suscipit debitis veniam nobis aspernatur blanditiis ex ipsum tempore impedit.',
  },
  {
    title: 'title',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia delectus iusto fugiat autem cupiditate adipisci quas, in consectetur repudiandae, soluta, suscipit debitis veniam nobis aspernatur blanditiis ex ipsum tempore impedit.',
  },
];

/* 글 전체 목록 보여주기 */
// @ts-ignore
router.get('/', (req, res) => {
  const articleLen = ARTICLE.length; // ARticle 배열의 길이 전달
  // 특정 뷰(ejs 확장자 생략) 파일을 그려라 명령
  // obj의 키 값이 ejs의 파일과 동일한지 확인해야 함.

  // render는 경로 이동으로 '/' 없어도 되지만, redirect는 /있어야 한다.
  res.render('tetz_board', { ARTICLE, articleCounts: articleLen });
});

/* 글 쓰기 모드로 이동 */
// @ts-ignore
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
    ARTICLE.push(newArticle);

    // 추가가 끝났으면, redirect: 주소 값을 이 주소로 보내주세요.
    res.redirect('/tetz_board');
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
  const arrIndex = ARTICLE.findIndex(
    (article) => article.title === req.params.title
  );
  const selectedArticle = ARTICLE[arrIndex];
  res.render('tetz_board_modify', { selectedArticle });
});

/* 글 수정 기능 수행 */
router.post('/modify/title/:title', (req, res) => {
  if (req.body.title && req.body.content) {
    const arrIndex = ARTICLE.findIndex(
      // findIndex는 true 값을 return 시키는 특징이 있다. return 값에 비교하는 것이 들어가야 한다.
      (ariticle) => ariticle.title === req.params.title
    );
    // 배열에 접근해서 입력한 값으로 바로 변경해준다.
    ARTICLE[arrIndex].title = req.body.title;
    ARTICLE[arrIndex].content = req.body.content;

    // res를 안하면 통신 종료가 안된다.
    res.redirect('/tetz_board');
  } else {
    const err = new Error('요청 값이 없습니다.');
    // @ts-ignore
    err.statusCode = 404;
    throw err;
  }
});

/* 글 삭제 기능 수행 */
router.delete('/delete/title/:title', (req, res) => {
  const arrIndex = ARTICLE.findIndex(
    (article) => article.title === req.params.title
  );
  // findIndex라는 메소드는 요청한 값을 찾으면 0이상의 값이 나온다.
  // 못 찾으면 -1을 반환한다. => 찾았다는 것을 가정
  if (arrIndex !== -1) {
    // 해당 배열 n 번째에서 1개만 지워라.
    ARTICLE.splice(arrIndex, 1);
    res.send('삭제 완료');
  } else {
    const err = new Error('해당 제목을 가진 글이 없습니다!');
    // @ts-ignore
    err.statusCode = 404;
    throw err;
  }
});

module.exports = router;
