// @ts-check

const express = require('express');

const mongoClient = require('./mongo');
const router = express.Router();

/* passport 모듈 불러오기 */
const passport = require('passport');

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', async (req, res, next) => {
  // 매개변수 (에러, 로그인 성공, 로그인 정보에 관련된 모든 정보)
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err;
    // 유저정보가 없을 때
    if (!user) {
      return res.send(
        `${info.message}<br><a href="/login">로그인 페이지로 이동</a>`
      );
    }
    req.login(user, (err) => {
      if (err) throw err;
      res.redirect('/tetz_board');
    });
  })(req, res, next); // 빼먹지 말고 꼭 넣어줘야 함
});

/* 로그아웃 */
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect('/');
  });
});

module.exports = router;
