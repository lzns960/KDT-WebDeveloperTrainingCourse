//if문 
/* let tetz = "이효석";
let gender = "male";

if (gender == "male") {
    if(tetz == "이효석"){
        alert("잘 찾으셨습니다!");
    }
    else {
        alert("이름이 틀렸네요!");
    }
} else {
    alert("성별이 틀렸습니다.");
} 
*/

/*
// Switch

let day;
switch (new Date().getDay()) {
    case 0:
        day = "일요일";
        break;
    case 1:
        day = "월요일";
        break;
    case 2:
        day = "화요일";
        break;
    case 3:
        day = "수요일";
        break;
    case 4:
        day = "목요일";
        break;
    case 5:
        day = "금요일";
        break;
    case 6: 
        day = "토요일";
        break;
}

console.log(day);
*/

/*
let tetz = "이효석";
if (tetz == "이효석"){
    console.log("맞았습니다");
} else{
    console.log("틀렸습니다.");
}
// 3항 연산자 
tetz  == "이효석" ? console.log("맞았습니다") : console.log("틀렸습니다.");
*/

/*
//실습 5: if문으로 오늘의 요일 구하기
let day = new Date().getDay();
let dayName = "";

if (day == 0){
    dayName = "일요일";
} else if (day == 1) {
    dayName = "월요일";
} else if (day == 2) {
    dayName = "화요일";
} else if (day == 3) {
    dayName = "수요일";
} else if (day == 4) {
    dayName= "목요일";
} else if (day == 5) {
    dayName = "금요일";
} else if (day == 6) {
    dayName = "토요일";
} else  {
    dayName = "그런 요일 없슴다..";
}
alert(dayName);
*/

/*
// For 문
for (let i = 0; i< 100; i++ ) {
    console.log(i+1,"번째 반복중");
}
*/


/*
//While 문 
let index = 0; // 초기값 설정
while (index < 10 ){ //조건문
    console.log("인사를", index+1, "번째 드립니다.");
    index++; //증감
}
let index2  = 0 ; //초기값 설정
while(1) {
    console.log("인사를 또", index2+1, "번째 드립니다.");
    index++; //증감
    if (index2 == 10) { //조건문
        break;
    }
}
*/

/*
//실습6: 구구단 출력하기 프로그램

for (let i = 2; i < 10; i++){
    console.log (i + "단");
    for (let j = 1; j <=9; j++){
        console.log (i + "x" + j +"=", i*j);
    }
}
*/

/*
//실습 7: 2배수 5배수의 합 (공배수 제외)
let number = 0; //합을 저장할 변수 (데이터 타입이 숫자여서 0 넣음)
for(let i = 1 ; i <= 100 ; i++ ){
    if(i % 2 == 0 || i % 5 == 0) //10같은 경우 중복으로 더해지기 때문에  둘중 하나만 true면 끝나는 || 사용해서 중복을 방지. 
    number = number + i;
} 
console.log(number)
*/