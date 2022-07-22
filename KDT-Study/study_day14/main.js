/*
//홀수와 짝수 

let num = 3;
let result = solution (num);

function solution(num) {
    var answer = '';

    if (num % 2 === 0){
        answer = "Even";
    } else if (num % 2 !== 0) {
        answer = "Odd";
    }
    return answer;
}
console.log(result)


//`문자열.repeat(반복횟수);` 문자열 반복하기 
let str = "우영";
let longStr = str.repeat(5) + "우";
console.log(longStr);
*/

/*
//수박수박수
let waterMelon = solution(5);
console.log(waterMelon);
function solution(n) {
    var answer = '';
    for (let i = 1; i <= n; i++){//글자수만큼 반복문을 돌려주겠다.
        if (i % 2 == 1){ //n이 홀수면 수를 적어주고, n이 짝수면 박을 적어준다. 
            answer = answer + "수";
        } else if (i % 2 == 0) {
            answer += "박";
        }
    }
    return answer;
}
*/
/*

//int 정수형, float 소수
const pi = 3.14159265358979;

let int = parseInt(pi); //parse특정형태의 데이터를 내가 원하는 형태로 바꿔준다. 
let float = parseFloat(pi);

console.log(int);
console.log(float);
console.log(typeof int, typeof float ); 
*/
/*
let minus = -999;
console.log("abs: ", Math. abs (minus));
console.log("min: ", Math. min(1,2,4,5, -10,33));
console.log("min: ", Math. max(1,2,4,5, -10,33));
console.log("ceil:", Math.ceil (3.14)); //올림
console.log("ceil:", Math.floor (3.99)); //소수점 버림
console.log("round:", Math.round(3.51111));

console.log("random:", Math.random());
*/
/*
//실습
// 주어진 배열에서 가장 큰 수와 작은 수를 찾아서 소수점을 버림 처리
// 해당 수 절대값의 평균을 구하기 
let nums = [-1.23, 13, 14.52, -33.53, 30];
let max = Math.max(...nums);
let min = Math.min(...nums);

max = Math.floor(max);
min = Math.floor(min);

max = Math.abs(max);
min = Math.abs (min);

let avg = (max + min)/2;
console.log(avg);

// 0부터 100까지 정수인 랜덤한 숫자를 만들기
console.log(Math.floor(Math.random()*100));
*/
/*
//약수의 합
let n = 5; 
let result = solution(n);

function solution(n) {
    var answer = 0;
    for(let i = 1; i <= n; i++){
        if (n % i === 0){
            answer = answer + i; 
        }
    }
    return answer;
}
console.log(result);
//정수 n 입력
// n의 약수 = 인수를 나누어 떨어지게 하는 수 , 자기자신도 가짐 
*/
/*
//실습
// [].splice(시작점, 자를 개수, 값) 함수를 이용하여 아래 결과 
// [3, 4];
// [1, 2, 77, 4];
const numbers1 = [1, 2, 3, 4];
const numbers2 = [1, 2, 3, 4];

numbers1.splice(0, 2);
numbers2.splice(2, 1, 77);

console.log(numbers1);
console.log(numbers2);
*/

/*
let numbers = [1, 2, 3, 4, 5, 6];
let fruits = ["사과", "바나나", "수박", "포도", "파인애플"];

//배열의 합
let sum1 = 0; 
let sum2 = 0;
let sum3 = 0; 

for (let i = 0; i< numbers.length; i ++){
    sum1 += numbers[i];  //요소 값을 더해야 한다.
}

for (let item of numbers){
    sum2 += item; //잘 안쓴다. 
}

numbers.forEach((num)=>{
    sum3 += num ;
})
console.log(sum1, sum2, sum3);
*/
/*
//배열.forEach
numbers.forEach(function(item, index, array) {
    console.log(item, index, array);
})

numbers.forEach((item, index, array)=> {
    console.log(item, index, array);
})
*/
/* 배열 for문과 for of 문
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for(let number of numbers) {
    console.log(number);
} // 별도 인덱스 값을 제공하지 않는다. 요소에 접근하고싶으면 console.log(number)을 써야 한다. 

for(let fruit of fruits){
    console.log(fruit);
}*/
/*
//실습
// 1~100까지 배열 for문 사용해서 만들기 
let numbers=[];

for (let i = 1 ; i <= 100; i++ ){
    numbers.push(i);
};
console.log(numbers);


let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

for (let i = 0; i< numbers.length; i ++){
    sum1 += numbers[i];  //요소 값을 더해야 한다.
}

for (let item of numbers){
    sum2 += item; //잘 안쓴다. 
}

numbers.forEach((num)=>{
    sum3 += num ;
})
console.log(sum1, sum2, sum3);
*/
/*
let numbers = [1, 2, 3, 4, 5, 6];

let reduce = numbers.reduce(function(sum, item, index, arr){
    return sum + item;
}) //reduce로 배열의 합을 구할 수 있다. 
*/
/*
//배열, [].map
let fore = numbers.forEach(function(item){//forEach는 return값을 주지 않는 메소드
    return item;
})

let map = numbers.map(function(item){
    return item;
})

let map2 = numbers.map((item) => item); //위 map과 같은 결과 

console.log(fore);
console.log(map); //특정 배열에 처리해주고 그 결과를 다시 배열로 만들어주는 것에 map 쓰는 것이 현명하다. 

const fruits = ["사과", "파인애플", "수박", "포도", "아륀지"];
let obj = fruits.map((item, index) => {
    return {
        id: index+1,
        name: item,
    }
})
console.log(obj);//유저정보를 객체로 변환시킬 때 사용 
*/
/*
//실습 
let numbers=[];

for (let i = 1 ; i <= 100; i++ ){
    numbers.push(i);
};

let reduce = numbers.reduce(function(sum, item ){
    return sum + item;
})

console.log(reduce);
*/
/*
let str = "apple";
console.log([...str]);
[...str].forEach(function(item, i , arr){
    console.log(item, i, arr);
})*/
/*
let numbers = [1, 2, 3, 4, 5, 6];


//filter 
let arr = numbers.filter(function(item){
    return item > 3;
})

let arr2 = numbers.filter((item)=> item>3); 
//arr와 arr2가 같음 화살표 함수가 더 직관적이라 더 자주 사용한다. 

console.log(arr);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let arr3 = words.filter(function(item){
    return item.length > 6;
})
let arr4 = words.filter((item)=>item.length > 6);

console.log(arr4);

console.log(words.includes("spray"));
*/
/*
let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고", "빵","코끼리"];

let same = [];
let same2 = [];
let same3 = [];
let diff = [];
let diff2 = [];
same = fruits1.filter(function(item){
    return fruits2.includes(item);
})
same2 = fruits1.filter((item)=> fruits2.includes(item));

fruits1.forEach(function(item){
    if(fruits2. includes(item)){
        same3.push(item);
    }else{
        diff2.push(item);
    }
})


fruits1.forEach(function(index){
    if(fruits2.includes(index)){
      same.push(index);
    }else{
      diff.push(index);
    }
  })
  console.log(same);
  console.log(diff);
  
  fruits2.forEach(function(index){
    if(same.includes(index)){
      console.log(`${index}는 이미 추가 했으니 패스`)
    }else{
      diff.push(index);
      console.log(`${index}는 다르니까 추가`);
    }
  })
  console.log(same);
  console.log(diff);

diff = fruits1.filter((item)=> !fruits2.includes(item));


console.log(same3);
console.log(diff2);

// true인 것만 반환

// fuites1.filter((item)=> fruits1 furite2)

// for (let i = 1 ; i <= 100; i++ ){
//     numbers.push(i);
// };
// console.log(numbers);
*/

/*
//평균 구하기 

function solution(arr) {
    var answer = 0;
    let reduce = arr.reduce(function(sum, item){
        return sum + item;
    })
    answer = reduce/arr.length
    
    return answer;
}

for (let i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];
}
answer = answer  /arr.lenth;
return answer;
*/
/*
//객체의 불변성
let obj1 = { a: 1, b: 2};
let obj2 = { b: 3, c: 4};

let assignedObj = Object.assign(obj1, obj2);

console.log(obj1,obj2, assignedObj);
*/

const user = {
    id: 1,
    name: "tetz",
    email: "xenosign@naver.com",
};

const { id, name, email, address } = user;
    // 기본값 설정 const { id, name, email, address = "KOREA"} = user;
    // 특정 변수에 넣기 const { id, name: tetz, email, address = "KOREA"} = user; 변수이름 name에서 tetz로 바뀌게 되는 것(변수이름을 바꾸는 법)
console.log(id);
console.log(name);
console.log(email);
console.log(address);
const fruits = ["사과", "딸기", "망고", "수박"];
const [a, b, c, d] = fruits;
console.log(a, b, c, d);
    