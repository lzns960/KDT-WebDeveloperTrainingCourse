// @ts-check

const express = require('express'); // express 프레임워크 불러오기
/* const bodyParser = require('body-parser'); // body-parser 설치 */
// const fs = require('fs');
const cookieParser = require('cookie-parser');
/* 세션 모듈 추가 및 미들웨어 연결 */
const session = require('express-session');
/* PASSPORT 모듈 */
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoClient = require('./routes/mongo');

const app = express();
const PORT = 4000;

// 바디파서
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// 쿠키파서
app.use(cookieParser());
// 세션
app.use(
  session({
    // 문자열을 통해서 암호화
    secret: 'suji',
    resave: false,
    saveUninitialized: true,
    cookie: {
      // 1시간
      maxAge: 1000 * 60 * 60,
    },
  })
);
// 패스포트
app.use(passport.initialize());
app.use(passport.session());

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
        if (idResult.password == password) {
          // 로그인 완료는 콜백함수로 처리
          cb(null, idResult); // 널값 다음에 실제 유저정보가 되는 데이터를 넣어주면된다.
        } else {
          cb(null, false, { message: '해당 비밀번호가 없습니다.' });
        }
      } else {
        cb(null, false, { message: '해당 id가 없습니다.' });
      }
    }
  )
);
// 로그인이 성공되면 serializeUser의 user 매개변수로 담긴다
passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

// deserializeUser는 서버와 통신해야하기때문에 async 필요
// deserializeUser의 id는 serializeUser에서 넘긴 것
// 사용자가 다른 페이지로 이동하려고 할때마다 체크
passport.deserializeUser(async (id, cb) => {
  const client = await mongoClient.connect();
  const userCursor = client.db('kdt1').collection('users');
  const result = await userCursor.findOne({ id });

  // id를 가진 애가 DB에 실제로 존재한다면
  if (result !== null) cb(null, result);
});

const router = require('./routes/index');
const userRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const boardRouter = require('./routes/boards');
const tetzRouter = require('./routes/tetz_board');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

app.use('/', router);
app.use('/users', userRouter); // users에 대한 routing은 이 곳에서 되고
app.use('/posts', postsRouter);
app.use('/boards', boardRouter);
app.use('/tetz_board', tetzRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.set('view engine', 'ejs'); // 뷰엔진을 ejs로 쓴다는 것 ~
app.set('views', 'views'); // 뷰엔진 파일은 views 폴더에 있다는 뜻
app.use(express.static('public'));

// 에러 핸들링은 무조건 서버실행 아래에 있어야 한다.
// 그래야 얻었던 라우터에서 에러가 발생했을 때 에러메세지를 발생시킨다.

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode || 500);
  // 어디서 발생한 것인지는 모르겠지만 서버상의 문제이므로 err 객체에 statusCode 가 없으면 500을 띄우는 것이죠
  res.end(err.message);
});

// 서버를 구동하는 전부
app.listen(PORT, () => {
  console.log(`The express server is running at ${PORT}.`);
});

/*
postsRouter.get('/', (req, res) => {
  res.send('블로그 글목록');
});

postsRouter.post('/:title', (req, res) => {
  res.send(`제목이 ${req.params.title}인 글이 등록 되었습니다.`);
});

app.get('/', (req, res) => {
  res.send('회원 목록');
});
app.post('/', (req, res) => {
  res.send('POST method');
});
app.put('/', (req, res) => {
  res.send('PUT method');
});
app.delete('/', (req, res) => {
  res.send('DELETE method');
});

app.listen(PORT, () => {
  console.log(`The express server is running at ${PORT}.`);
});
*/
/*
// 실습
app.get('/:email/:password/:name/:gender', (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

app.get('/', (req, res) => {
  const q = req.query;

  if (q.email && q.pw && q.name && q.gender) { // 필드에 있는 값이 있으면
    res.send(req.query);
  } else {
    res.send('Unexpected query');
  }
});

app.listen(PORT, () => {
  console.log(`The express server is running at ${PORT}.`);
});

*/

/*
app.use('/', async (req, res, next) => {
  // 미들웨어 사용하는 메소드 use()
  console.log('미들웨어 1번');

  req.reqTime = new Date();
  req.fileContent = await fs.promises.readFile('package.json', 'utf-8');
  next();
  // res.send 브라우저에서 보는 데이터가 날아간다.
  // res.end는 요청을 받았는데 데이터를 돌려줄 것이 없을 때 사용(보통 statusCode 404 날릴 때 많이 사용
});

app.use((req, res, next) => {
  console.log(req.reqTime);
  console.log(req.fileContent);
  next();
});

app.use((req, res, next) => {
  console.log('미들웨어 3번');
  res.send('통신종료');
});

app.listen(PORT, () => {
  console.log(`The express server is running at ${PORT}.`);
});
*/
