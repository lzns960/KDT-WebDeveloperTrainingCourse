// @ts-check

const express = require('express');

const router = express.Router();

const USER = [
  {
    id: 'tetz',
    name: '이효석',
    email: 'tetz@naver.com',
  },
  {
    id: 'test',
    name: '테스트맨',
    email: 'test@naver.com',
  },
];

router.get('/', (req, res) => {
  const userLen = USER.length;
  res.render('index', { USER, userCounts: userLen, imgName: 'couple.jpg' });

  /*  res.write('<h1>Hello, Dynamic Web page</h1>');
  for (let i = 0; i < USER.length; i++) {
    res.write(`<h2>USER id is ${USER[i].id}`);
    res.write(`<h2>USER name is ${USER[i].name}`);
  }
*/
});
// 그 뒤 경로에 대한 미들웨어는 아래 코드에서!
// userRouter.get('/', (req, res) => {
//   // '/users' 뒤에 붙는 주소 값들을 써주면 된다.
//   res.send(USER);
// });

router.get('/:id', (req, res) => {
  const userData = USER.find((user) => user.id === req.params.id);
  if (userData) {
    res.send(userData);
  } else {
    const err = new Error('ID not found');
    err.statusCode = 404;
    throw err;
  }
});

router.post('/', (req, res) => {
  if (req.query.id && req.query.name && req.query.email) {
    const newUser = {
      id: req.query.id,
      name: req.query.name,
      email: req.query.email,
    };

    USER.push(newUser);
    res.send('회원 등록완료!');
  } else {
    const err = new Error('Unexpected Query');
    err.statusCode = 404;
    throw err;
  }
});

router.put('/:id', (req, res) => {
  if (req.query.id && req.query.name && req.query.email) {
    const userData = USER.find((user) => user.id === req.params.id);
    if (userData) {
      const arrIndex = USER.findIndex((user) => user.id === req.params.id);
      const modifyUser = {
        id: req.query.id,
        name: req.query.name,
        email: req.query.email,
      };
      USER[arrIndex] = modifyUser;
      res.send('회원 정보 수정 완료');
    } else {
      const err = new Error('ID not found');
      err.statusCode = 404;
      throw err;
    }
  } else {
    const err = new Error('Unexpected Query');
    err.statusCode = 404;
    throw err;
  }
});

router.delete('/:id', (req, res) => {
  const arrIndex = USER.findIndex((user) => user.id === req.params.id);
  if (arrIndex !== -1) {
    USER.splice(arrIndex, 1);
    res.send('회원 삭제 완료');
  } else {
    const err = new Error('ID not found');
    err.statusCode = 404;
    throw err;
  }
});

module.exports = router;
