/*
console.log(typeof null);
console.log(typeof "핑크퐁");
console.log(typeof 77);
// 빈 오브젝트 {}
console.log(typeof {});
*/


/*
// 실습1
let obj = {
    name: "박수지",
}
console.log(`${typeof 27} isn't ${typeof "박수지"} data type.`)
console.log(`typeof를 ${typeof true}이나 ${typeof null}에 사용하면, ${typeof obj}결과를 얻을 수 있습니다.`)
*/

/*
// 형 변화: 성적을 구하는 프로그램 만들기
let mathScore ="77";
let engScore = "88";

mathScore = Number(mathScore);
engScore = Number(engScore);
let avg = (mathScore + engScore) / 2;

console.log(avg);
*/
/*
//배열 문자 변수 혼용
let nameArray = ["강유림", "강지훈", "강한솔" , "김윤비"];
console.log(nameArray.length);

for (let i  = 0; i < nameArray.length; i++) {
    console.log(`${i+1}번째 참가자의 이름은 ${nameArray[i]}입니다.`);
}
*/

/*
//증감 연산자
let result1, result2;
let num = 10, num2 = 10;

result1 = num++;
console.log(result1);

result2 = ++num2;
console.log(result2);
*/
/*
// 여성이고, 이름이 Jane 이거나 성인이면 통과
let gender = "M";
let name = "Tom";
let isAdult = true;


if(gender === "F" && name === "Jane" || isAdult === true) {
    console.log("통과");
} else {
    console.log("돌아가");
}
*/
/*
//실습: 클럽 가드 프로그램

let isAdult = true;
let isVIP = false;
let isDrunken = true;
let money = false;

if ( ((isAdult || isVIP ) && !isDrunken)|| money ){
    console.log("통과");
} else {
    console.log("돌아가");
}
*/

/*
for (let i = 0; i<100 ; i++){
    console.log(i);
}

//구구단
for (let i =  2; i <=9 ; i ++) {
    for(let j = 1; j <=9; j++){
        console.log(`${i} x ${j} = ${ i * j }`);
    }
}
*/
/*
let userInput = prompt ("어디까지 구할까요?!")
userInput = Number(userInput);

for (let i = 0; i<= userInput + 1; i+=13){
    if (i % 2 === 1) {
        console.log (`${i}는 13의 배수면서 홀수인 숫자입니다.`);
    } else{
        console.log(`13의 배수면서 홀수인 숫자가 아닙니다.`);
    }
}
*/

/*
let i = 2, j = 1;
while(i < 10) {
    while (j <10){
        console.log(`${i} x ${j} = ${ i * j}`);
        j++;
    }
    i++;
    j =1 ;
}
*/

/*

// do - while 문
let i = 10;
do {
    console.log(`do-while 문에서 ${i} 번째 반복문을 시작합니다!`);
    i++;
} while(i < 10)
// while 문
let j = 10;
while(j < 0) {
    console.log(`while 문에서 ${j} 번째 반복문을 시작합니다!`);
    j++;
}
*/

/*
// break
for(let i = 0; i < 100; i++) {
    if(i==10) {
        console.log("멈춰!");
        continue;
}
console.log(i);
    }
*/

/*
//실습 
let sum = 0;
for(let i = 0; i < 1001; i++) {

    if(i % 2 == 1) {
        continue;
    }
    sum  += i ;
}
console.log(sum);
*/
/*
//함수

let myName = "이효석"

function sayHello () {
    console.log(`Hello ${myName}`);
}
*/

/*
// 매개변수 
function square(number, 제곱근) {
    return number ** 제곱근;
}
console.log (square(2,3));
*/

/*
//함수 선언문 
function sayHello(){
    console.log("Say Hello");
}
// 함수 표현식 
let heyHello = function(){
    console.log("Say Hello");
}
// 화살표 함수 
let sayHello = () => {
    console.log("SayHello");
}

*/
/*
//실습
//삼각형의 넓이를 구하는 함수: 밑변 X 높이 / 2 
// 함수 표현식 

let 삼각형의넓이 = function(밑변, 높이){
    return (밑변 * 높이) / 2;
}

console.log(삼각형의넓이(4,5));

//원의 넓이를 구하는 함수: 반지름 x 반지름 x 원주율 3.14
// 화살표 함수 
let getCircleArea = (r)=>{
    return  3.14 * r ** 2;
}
console.log(getCircleArea(3));
// 피타고라스 정리: 밑변 제곱+ 높이 제곱의 루트
//함수 표현식
let pita1 = function( a, b ){
    var c;
    c = Math.sqrt (a ** 2 + b ** 2);
    return c;
}
console.log(pita1 (3,4));

//화살표 함수 
let pita2 = ( a, b )=>{
    var c;
    c = Math.sqrt (a ** 2 + b ** 2);
    return c;
}
console.log(pita2 (3,4));

*/
/*
//실습
let kdt  = ["의진","민정", "승수", "유림", "허원", "준우", "소민", "윤비", "혜영", "한솔", "세영", "지현" , "해성", "승환", "종익", "다영","진형", "영은", "지훈"]
console.log(kdt[5]);
console.log(kdt.length);
kdt.push("수지")
console.log(kdt);
kdt.unshift("수지");
console.log(kdt);
kdt.shift("수지");
console.log(kdt);
*/
/*

//배열 
let kdt  = ["의진","민정", "승수", "유림", "허원", "준우", "소민", "윤비", "혜영", "한솔", "세영", "지현" , "해성", "승환", "종익", "다영","진형", "영은", "지훈"]

for(let i = 0; i <kdt.length; i++){
    console.log(`KDT ${i +1}번째  참여자의 성함은 ${kdt[i]}입니다.`);
}*/
/*
//메소드 체이닝
let hello  ="H-e-l-l-o";
let helloArr=hello.split("");
console.log(helloArr);

//split: 문자를 인수("") 기준으로 쪼개서 배열로 반환
//.reverse: 배열의 순서를 뒤집어서 반환
//.join: 배열을 인수 기준으로 병합해서 문자열을 반환

let reverseArr  =helloArr.reverse();
console.log(reverseArr);

let joinStr = reverseArr.join("");
console.log(joinStr);
*/
/*
//메소드 체이닝
let hello = "Hello";
let result = helo.split("").reverse().join("");
*/
/*
// 객체 생성
const superman = {
    name: "Clark",
    age: 33,
    height: 187,
    weight: 77,
}
// 객체 접근
console.log(superman.name);
console.log(superman["age"]);
// console.log(superMan.condition); // 없는 값은 undefined로 나온다. null 아님! 
// 객체 데이터 추가
superman.hairColor = "blone"
superman["job"] = "기자";
console.log(superman);
// 객체 데이터 삭제
delete superman.weight;
console.log(superman);
*/

/*
//실습
const pororo = {
    name: "뽀로로",
    age: 7,

}
console.log(pororo);
pororo.gender = "male";
console.log(pororo);
pororo["height"] = 167;
console.log(pororo);
delete pororo.gender;
console.log(pororo);

console.log("name" in pororo);
console.log("height" in pororo);
*/

/*
const superman = {
    name: "Clark",
    age: 33,
    height: 187,
    weight: 77,
}

for (key in superMan ){
    console.log(key);
// console.log(.key)
//.key라고 하면 절대 안된다. key라고 하는 key값을 찾는 것이다. 
    console.log(superMan[key]);// 문자열로 해서 각각의 키에 접근하는 것 : 모든 데이터를 가져올 것이다. 
}
*/

//실습 
const pororo = {
    name: "뽀로로",
    age: 7,
    cute(){
        console.log("뽀로로는 귀엽습니다!");
    },
}
for (key in pororo){
    console.log(key);
}

pororo.cute();
/*
const superman = {
    name: "Clark",
    age: 33,
    height: 187,
    weight: 77,
    fly: function(){
        console.log("날아갑니다.");
    }
}

superMan.fly();
*/