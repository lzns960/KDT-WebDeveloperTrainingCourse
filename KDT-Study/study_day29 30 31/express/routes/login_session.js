// @ts-check

const express = require('express');

const mongoClient = require('./mongo');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', async (req, res) => {
  const client = await mongoClient.connect();
  const userCursor = client.db('kdt1').collection('users');
  const idResult = await userCursor.findOne({ id: req.body.id });

  // id가 동일한 회원정보가 있다면
  if (idResult !== null) {
    // id 동일 & 비밀번호 일치하는지 체크
    if (idResult.password === req.body.password) {
      // 세션 = 서버에 저장되는 쿠키: 로그아웃하거나, 브라우저를 끄지 않는 이상 유지
      // 세션에도 아이디 값이 따로 있기 때문에 userId로 따로 이름지어줌!
      req.session.login = true;
      req.session.userId = req.body.id;
      res.redirect('/tetz_board');
    } else {
      // 비밀번호가 일치하지 않을 때
      res.status(300);
      res.send(
        '비밀번호가 틀렸습니다. <br><a href="/login">로그인 페이지로 이동</a>'
      );
    }
  } else {
    // 아이디가 없을 경우 예외처리
    res.status(300);
    res.send(
      '해당 id가 존재하지않니다!<br><a href="/login">로그인 페이지로 이동</a>'
    );
  }
});

/* 로그아웃 */
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect('/');
  });
});

module.exports = router;
