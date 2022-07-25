/*
const user = {
    id: 1,
    name: "tetz",
    email: ["xenosign@naver.com", "tetz@spreatics.com"],
};
const str = JSON.stringify(user); //외부로 데이터를 보내기 위한 문자열 형태로 변경 
console.log(str);
console.log(typeof str);

const obj = JSON.parse(str); //json 형태로 다시 만들어줌 = 파싱한다. 
console.log(obj);
console.log(typeof obj);
*/

//js에서 외부파일을 가져올 때는 import로 가져온다. Mydata라는 변수에 담아준다. 
import myData from "./myData.json" assert { type: "json" };
console.log(myData);
