// @ts-check //타입스크립트패키지 모듈 자료형 오류 체크해주는 주석

// promise 사용법
const promise = new Promise((resolve, reject) => {
  console.log('프로미스 내부의 코드는 바로 실행됩니다.');
  setTimeout(() => {
    const userId = 'tetz';
    if (userId === 'tetz') {
      resolve(userId);
    } else {
      reject(new Error('서버 통신이 원활하지 않습니다.'));
    }
  }, 2000);
});

promise
  // 서버통신성공 resolve는 then으로 받는다. = then은 resolve가 나타나야만 실행되는 형태
  .then((value) => {
    console.log(`요청하신 ID는 ${value}입니다`);
  })
  // reject는 catch로 받는다.
  .catch((error) => {
    console.log(error);
  })
  //Promise 의 코드의 성공 여부와 상관 없이 무조건 적으로 실행하며 Then, Catch 와 함께 사용!
  .finally(() => {
    console.log('Promise 시퀀스 종료');
  });

/* setTimeout으로 3번 중첩
setTimeout(
  (name) => {
    let teacherList = '';
    if (!name) {
      console.log('강사 이름을 찾을 수 없습니다!');
    } else {
      teacherList += name;
      console.log(teacherList);
    }
    setTimeout(
      (name) => {
        if (!name) {
          console.log('강사 이름을 찾을 수 없습니다!');
        } else {
          teacherList += ', ' + name;
          console.log(teacherList);
        }
        setTimeout(
          (name) => {
            if (!name) {
              console.log('강사 이름을 찾을 수 없습니다!');
            } else {
              teacherList += ', ' + name;
              console.log(teacherList);
            }
          },
          500,
          '엘레나'
        );
      },
      500,
      '리처드'
    );
  },
  500,
  '테츠'
);
*/

/* 콜백 예시2
const id = prompt('아이디를 입력하세요!');
let userId = '';

console.log('로그인 시도');
setTimeout(function cb1() {
  userId = 'tetz';
  console.log('아이디 정보 획득 완료!');
  if (id === userId) {
    console.log('로그인 성공');
  } else {
    console.log('로그인 실패');
  }
}, 2000);
*/
/* callback 예시1
console.log('1');
setTimeout(() => {
  console.log('callback');
}, 1000);
console.log('2');
*/

// eslint-disable-next-ine //다음 줄이 eslint 에서 벗어나는 것- 되도록 안쓰는 게 좋다.

/* eslint-disable */ // 아래줄 모두 eslint에서 벗어난다.- 되도록 안쓰는 게 좋다.

/* 가상 서버 만들기 
const http = require('http'); //http라고 불리는 통신모듈 불러오는 것

const server = http.createServer((req, res) => {
  //http이용해서 서버 만들기 매개변수는 request 요청과 response반응
  res.statusCode = 200; //서버가 잘 돌아가고 있는 코드 200
  res.end('hello');
});

const PORT = 4000;
server.listen(PORT, () => {
  //4000번 포트에서 듣고있어, 만약 들리면 함수를 실행하세요.
  console.log(`서버는 ${PORT}번 포트에서 실행 중입니다.`);
});
*/
