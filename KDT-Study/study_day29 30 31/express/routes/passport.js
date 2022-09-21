/* PASSPORT 모듈 */
const passport = require('passport');
/* 전략 */
const LocalStrategy = require('passport-local').Strategy;
const NaverStrategy = require('passport-naver').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const KakaoStrategy = require('passport-kakao').Strategy;
/* 검증 모듈 */
const verifyModule = require('./register').verifyPassword;

/* MongoDB */
const mongoClient = require('./mongo');

// 익명함수 하나에 모든 기능을 넣고 바깥으로 전달.
module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'id',
        passwordField: 'password',
      },
      async (id, password, cb) => {
        const client = await mongoClient.connect();
        const userCursor = client.db('kdt1').collection('users');
        // id 중복여부 체크
        const idResult = await userCursor.findOne({ id }); // id: id면 id로 해도 된다.
        if (idResult !== null) {
          if (idResult.salt !== undefined) {
            const passwordResult = verifyModule(
              password,
              idResult.salt,
              idResult.password
            );
            if (passwordResult) {
              cb(null, idResult);
            } else {
              cb(null, false, { message: '비밀번호가 틀렸습니다.' });
            }
          } else if (idResult.password === password) {
            cb(null, idResult);
          } else {
            cb(null, false, { message: '해당 비밀번호가 없습니다.' });
          }
        } else {
          cb(null, false, { message: '해당 id가 없습니다.' });
        }
      }
    )
  );
  /* 네이버 전략 */
  passport.use(
    new NaverStrategy( // 인증처리하는 곳이 어디있는지 옵션값으로 전달
      {
        clientID: 'GKmxC0Q9dYePj_g0EAOk',
        clientSecret: 'nQdTsZLa9F',
        callbackURL: 'http://localhost:4000/login/auth/naver/callback',
      },
      async (accessToken, refreshToken, profile, cb) => {
        const client = await mongoClient.connect();
        const userCursor = client.db('kdt1').collection('users');
        const result = await userCursor.findOne({ id: profile.id }); // db 중에 id가 profile.id인 값
        console.log('2');
        if (result !== null) {
          cb(null, result);
        } else {
          // sns 로그인 처음
          const newUser = {
            id: profile.id,
            name:
              profile.displayName !== undefined
                ? profile.displayName
                : profile.emails[0].value,
            provider: profile.provider,
          };
          const dbResult = await userCursor.insertOne(newUser); // DB 니까 await 넣기
          if (dbResult.acknowledged) {
            cb(null, newUser); // 에러 없고 newNaverUser을 콜백으로 전달시켜 결과 실행
          } else {
            cb(null, false, { message: '회원 생성 에러' });
          }
        }
      }
    )
  );

  /* 구글 전략 */
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CB_URL,
      },
      async (accessToken, refreshToken, profile, cb) => {
        const client = await mongoClient.connect();
        const userCursor = client.db('kdt1').collection('users');
        const result = await userCursor.findOne({ id: profile.id }); // db 중에 id가 profile.id인 값
        console.log('2');
        if (result !== null) {
          cb(null, result);
        } else {
          // sns 로그인 처음
          const newUser = {
            id: profile.id,
            name:
              profile.displayName !== undefined
                ? profile.displayName
                : profile.emails[0].value,
            provider: profile.provider,
          };
          const dbResult = await userCursor.insertOne(newUser); // DB 니까 await 넣기
          if (dbResult.acknowledged) {
            cb(null, newUser); // 에러 없고 newNaverUser을 콜백으로 전달시켜 결과 실행
          } else {
            cb(null, false, { message: '회원 생성 에러' });
          }
        }
      }
    )
  );

  /* 카카오 전략 */
  passport.use(
    new KakaoStrategy(
      {
        clientID: process.env.KAKAO_CLIENT,
        callbackURL: process.env.KAKAO_CB_URL,
      },
      async (accessToken, refreshToken, profile, cb) => {
        const client = await mongoClient.connect();
        const userCursor = client.db('kdt1').collection('users');
        const result = await userCursor.findOne({ id: profile.id }); // db 중에 id가 profile.id인 값
        if (result !== null) {
          cb(null, result);
        } else {
          // sns 로그인 처음
          const newUser = {
            id: profile.id,
            name:
              profile.displayName !== undefined
                ? profile.displayName
                : profile.emails[0].value,
            provider: profile.provider,
          };
          const dbResult = await userCursor.insertOne(newUser); // DB 니까 await 넣기
          if (dbResult.acknowledged) {
            cb(null, newUser); // 에러 없고 newNaverUser을 콜백으로 전달시켜 결과 실행
          } else {
            cb(null, false, { message: '회원 생성 에러' });
          }
        }
      }
    )
  );
  // 로그인이 성공되면 serializeUser의 user 매개변수로 담긴다
  passport.serializeUser((user, cb) => {
    console.log('5', user);
    cb(null, user);
  });

  // deserializeUser는 서버와 통신해야하기때문에 async 필요
  // deserializeUser의 id는 serializeUser에서 넘긴 것
  // 사용자가 다른 페이지로 이동하려고 할때마다 체크
  passport.deserializeUser((user, cb) => {
    console.log('6', user);
    cb(null, user);
  });
};
