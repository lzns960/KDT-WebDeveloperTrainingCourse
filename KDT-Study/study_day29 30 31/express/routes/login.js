// @ts-check

const express = require('express');

const router = express.Router();
/* passport 모듈 불러오기 */
const passport = require('passport');
const mongoClient = require('./mongo');

/* 로그인 여부에 따라 게시판 사용 */
const isLogin = (req, res, next) => {
  // 익명함수
  if (req.session.login || req.user || req.signedCookies.user) {
    // user라는 이름의 암호화된 쿠키가 있는지
    // 패스포트에 의해 로그인된 유저세션은 req.user에 담기게 되므로 조건 추가해야한다.
    next(); // next 매개변수: 이 코드가 실행되면 다음 미들웨어로 넘겨준다.
  } else {
    res.status(300);
    res.send(
      '로그인이 필요한 서비스입니다.<br> <a href="/login">로그인 페이지로 이동</a><br><a href="/">메인 페이지로 이동</a>'
    );
  }
};

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
      // 로그인 처리: user 쿠키
      res.cookie('user', req.body.id, {
        expires: new Date(Date.now() + 1000 * 60), // 60초
        httpOnly: true,
        signed: true, // 암호화
      });
      res.redirect('/tetz_board');
    });
  })(req, res, next); // 빼먹지 말고 꼭 넣어줘야 함
});

/* 로그아웃 */
router.get('/logout', (req, res, next) => {
  req.logOut((err) => {
    if (err) return next(err); // 에러가 발생하면 다음 미들웨어 작동 -> 다음 미들웨어가 없기 때문에 메인 서버의 err가 작동
    return res.redirect('/'); // 에러가 발생하지않으면 메인화면
  });
});

/* auth를 위한 코드 */
router.get('/auth/naver', passport.authenticate('naver')); // 전략이름 기재: 로그인 최초요청을 리소스 서버에 보내는 역할

router.get(
  '/auth/naver/callback', // 실제적 결과는 cb라는 주소에 들어오기 때문에 로그인 처리는 여기서!
  passport.authenticate('naver', {
    successRedirect: '/tetz_board',
    failureRedirect: '/',
  })
);

/* google auth를 위한 코드 */
router.get('/auth/google', passport.authenticate('google', { scope: 'email' }));

router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/tetz_board',
    failureRedirect: '/',
  })
);

/* kakao auth를 위한 코드 */
router.get('/auth/kakao', passport.authenticate('kakao'));

router.get(
  '/auth/kakao/callback',
  passport.authenticate('kakao', {
    successRedirect: '/tetz_board',
    failureRedirect: '/',
  })
);

module.exports = { router, isLogin };
