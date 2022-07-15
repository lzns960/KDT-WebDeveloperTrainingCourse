/*
// study 10 복습: 객체-for
const pororo = {
    name: "뽀로로",
    height: 70,
    weight: 50,
    gender: "None",
    say() {
        console.log("뽀로로가 말을 합니다.")
    }
}
pororo.say();

for(let key in pororo){
    console.log(key,pororo[key]);

*/

/*
let boy = {
    name: "Justin",
    sayHello
}

let girl = {
    name: "Anna",
    sayHello
}

function sayHello() {
    console.log(`Hello, I'm ${this.name}`);
}


boy.sayHello();
girl.sayHello();
*/

/*
//this의 편리함~! 함수로 해놓고 공용으로 객체에 추가 
let showHeight = ()=>{
    console.log(`${this.name} 키는 말입죠.. ${this.height}cm`);
    console.log (this);
}

function showName(){
    console.log(this.name);
}

const pororo = {
    name: "뽀로로",
    height: 70,
    showName,
    showHeight,
}
const loopy = {
    name: "루피",
    height: 50,
    showName,
    showHeight,
}

pororo.showName();
pororo.showHeight();

loopy.showName();
loopy.showHeight();
*/
/*
// 생성자 함수
function Fruits (name, price){
    this.name = name;
    this.price = price;
    this.showPrice = function(){
        console.log (`${this.name}의 가격은 ${this.price}원 입니다.`);
    }//생성자 함수 내부에 있는 메소드를 추가한 것이다. 
}

let orange = new Fruits ("오렌지", 3000);
let dragonFruit = new Fruits ("용과", 2500);
let banana = new Fruits ("바나나", 2000);
let pineApple = new Fruits ("파인애플", 5000);

orange.showPrice();
dragonFruit.showPrice();
banana.showPrice();
pineApple.showPrice();
*/

/*
//실습: 생성자 함수

function Kdt (name, gender){
    this.name = name;
    this.gender = gender;
    this.showNameGender = function(){
        console.log (`${this.name}(은/는) ${this.gender}입니다.`);
    }
}

let suji = new Kdt ("수지", "여자");
let junwoo = new Kdt ("준우", "남자");
let youngeun= new Kdt ("영은", "여자");
let minjung = new Kdt ("민정", "여자");

suji.showNameGender();
junwoo.showNameGender();
youngeun.showNameGender();
minjung.showNameGender();
*/