// 핸드폰 가리기
let phone_number = "01033334444"
let result = solution1(phone_number);

function solution1(phone_number) {
    var answer = '';
    for (let i = 0 ; i < phone_number.length; i++){
        if(i < phone_number.length-4){  
            answer = answer+"*";
            //phone_number 길이보다 -4만큼 적을 때 * 문자열 더해주기
        }else {
            answer = answer+ phone_number[i];
            //끝 4자리는 값을 더해주기 
        }
    }
    return answer;
}

console.log(result); //"*******4444"


//없는 숫자 더하기
let numbers = [1,2,3,4,6,7,8,0];
let result2 = solution2(numbers);

function solution2(numbers) {
    var answer = 0;
    for (let i = 0; i < 10; i++){ //0부터 9까지의 숫자 중
        if (!numbers.includes(i)){ //배열에 포함되지 않은 경우 
            answer = answer + i; // 해당 값을 계속 더하기 
        }
    }
    return answer;
}
console.log(result2); //14

//나누어 떨어지는 숫자배열
let arr = [5,9,7,10];
let divisor = 5;
let result3 = solution3(arr, divisor);

function solution3(arr, divisor) {
    var answer = [];

    for(let element of arr){ //배열 for of 반복문
        if(element % divisor === 0){ //array의 각 element를 divisor로 나누어 떨어지는 경우 
            answer.push(element); //element추가 
        }
    }
    if (answer.length === 0){ //divisor로 나누어 떨어지는 element가 하나도 없을 경우
        answer.push(-1);  //배열에 -1을 추가하여 반환
    }
    answer.sort(function(a,b){ //오름차순으로 배열을 정렬하여 반환 
        return a-b; 
    }) 
    return answer;
}

console.log(result3); //[5, 10]

/*
Array.prototype.sort(): 기본정렬 순서를 문자열에 따르기 때문에 
숫자열을 정렬할 경우 원하는대로 정렬이 되지 않는다. 
sort()메소드는 함수식과 함께 사용할 수 있다. 다음 함수를 만들어 오름차순 정렬할 수 있다. 
Array.sort((a,b)=> a-b);
*/

