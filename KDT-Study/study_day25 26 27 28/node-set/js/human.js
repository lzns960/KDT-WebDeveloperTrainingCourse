// @ts-check

// Human.js 는 [‘철수’, ‘영희’] 데이터와 데이터를 전부 출력하는 showName() 메소드가 있음
// Human.js 는 CommonJS 방식으로 모듈을 불러서 데이터를 출력

const names = ['철수', '영희'];
function showNames() {
  names.map((name) => console.log(name));
}
module.exports = {
  names,
  showNames,
};
