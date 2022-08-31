// @ts-check
// 이 파일 자체가 하나의 기능을 담당하는 모듈이 된다.
/*
export default class Animal {
  constructor() {
    this.animals = ['dog', 'bear'];
  }
  showAnimals(){
    this.animals.map((el) => console.log(el));
  }
}

// ES6
const animals = ['dog', 'cat'];
function showAnimals() {
  animals.map((el) => console.log(el));
}
export { animals, showAnimals };
*/

/* CommonJS
const animals = ['dog', 'cat', 'bear'];

exports.animals = animals;
exports.showAnimals = function showAnimals() {
  animals.map((el) => console.log(el)); // 화살표 옆에 중괄호 조차 없으면 return함수까지 화살표로 축약한 것.
}
*/

/*
module.exports = {
  animals,
  showAnimals,
};
*/
