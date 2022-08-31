// @ts-check

// async/await
const fs = require('fs').promises;

async function main() {
  let data = await fs.readFile('readme.txt', 'utf-8');
  console.log('1번', data);
  data = await fs.readFile('readme.txt', 'utf-8');
  console.log('2번', data);
  data = await fs.readFile('readme.txt', 'utf-8');
  console.log('3번', data);
  data = await fs.readFile('readme.txt', 'utf-8');
  console.log('4번', data);
}
main();


/**
// 콜백의 연쇄를 Promise로 변환
const fs = require('fs').promises;

fs.readFile('readme.txt', 'utf-8').then((data) => {
  console.log('1번', data);
  return fs.readFile('readme.txt', 'utf-8');
}).then((data) => {
  console.log('2번', data);
  return fs.readFile('readme.txt', 'utf-8');
}).then((data) => {
  console.log('3번', data);
  return fs.readFile('readme.txt', 'utf-8');
}).then((data) => {
  console.log('4번', data);
  return fs.readFile('readme.txt', 'utf-8');
}).catch((err) => {
  console.log(err);
  throw err;
});
*/
/**
// 콜백의 연쇄
// 제일 위의 reaFile 메소드가 정상적으로 실행이 되고 나서야 2번째 readFile이 실행된다.
fs.readFile('readme.txt', 'utf-8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('1번 일꾼', data.toString()); // JS에 쓸 수 있는 문자열로 변경해서

  fs.readFile('readme.txt', 'utf-8', (err, data) => {
    if (err) {
      throw err;
    }
    console.log('2번 일꾼', data.toString());

    fs.readFile('readme.txt', 'utf-8', (err, data) => {
      if (err) {
        throw err;
      }
      console.log('3번 일꾼', data.toString()); 

      fs.readFile('readme.txt', 'utf-8', (err, data) => {
        if (err) {
          throw err;
        }
        console.log('4번 일꾼', data.toString());
      });
    });
  });
});
*/

/**
// Primise
const promise = new Promise((resolve, reject) => {
  const tetz = 'old';
  if (tetz === 'old') {
    setTimeout(() => { // n초 뒤에 익명함수를 강제로 시키는 메소드. 1000이 1초
      console.log(promise);
      resolve('tetz is old');
    }, 3000);
  } else {
    reject('tetz is getting old');
  }
});

promise
  .then((data) => {
  console.log(promise);
  console.log(data);
  })
  .catch((err) => {
  console.log(err);
  });
*/
/**
// Sync
const fs = require('fs');

let data = fs.readFileSync('readme.txt', 'utf-8');
console.log('1번', data);
data = fs.readFileSync('readme.txt', 'utf-8');
console.log('2번', data);
data = fs.readFileSync('readme.txt', 'utf-8');
console.log('3번', data);
data = fs.readFileSync('readme.txt', 'utf-8');
console.log('4번', data);
*/

/**
// file-system 파일 쓰기
const str = '파일 쓰기가 정상적으로 수행이 되면 이 문구가 파일에 들어갑니다.';

fs.writeFile('readme.txt', str , 'utf-8', (err) => {
  if(err){
    console.log(err);
  } else {
    console.log('writeFile succeed');
  }
});
 */
/**
// file-system 파일 읽기
fs.readFile('readme.txt','utf-8', function(err, data) {
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
*/