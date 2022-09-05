// @ts-check
console.log('디렉토리 위치', __dirname);
console.log('파일 위치와 파일명', __filename);

// 전개구문: 매개변수

function spread(first, ...rest2) {
  console.log(first);
  console.log(rest2);
}
spread(1, 2, 3, 4, 5, 6, 7);

// 전개구문: 나머지 연산자, 배열
const arr3 = [1, 2, 3, 4, 5, 6];

const [one, two, three, ...rest1] = arr3;
console.log(one, two, three, rest1);

// 전개구문: 나머지 연산자, 객체
const tetzData1 = {
  name: '이효석',
  gender: 'M',
  nickName: 'chicken head',
  email: 'xenosign@naver.com',
};

const { name1, ...rest } = tetzData1;
console.log(name1, rest);

// 전개구문: 배열 합치기
const arr1 = [1, 2, 3];
const arr2 = ['4', '5', '6'];

const merge = [arr1, arr2];

console.log(merge[1][2]);

// 전개구문: 객체 합치기
const tetzData = {
  name: '이효석',
  gender: 'M',
};

const tetzInfo = {
  nickName: 'chicken head',
  email: 'xenosign@naver.com',
};

const tetz = {
  ...tetzData,
  tetzInfo,
};

console.log(tetz);
