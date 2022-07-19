// JavaScript

const buttonEl = document.querySelector("table");
const dateEl = document.querySelector("#date");
const contentEl = document.querySelector("#content");

// 날짜를 누르면 날짜가 날짜 입력 창에 자동으로 입력
buttonEl.addEventListener("click", function(e){
    if(e.target.tagName === "P"){
        let dateJs2 = e.target.textContent;
        dateEl.value = `2022년 7월 ${dateJs2} 일`;
        target = e.target.parentNode;
    }
})

//내용을 입력하고 작성 버튼을 누르면 해당 날짜에 작성 내용이 div 요소로 추가 되도록 만들기
let target = null;
const divEl = document.createElement("div");

function writeSchedule(){
    divEl.textContent = contentEl.value;
    target.append(divEl);
}

//작성 내용을 클릭하면 삭제 되는 기능 추가!
divEl.addEventListener("click",function(e){
    console.log(e.target.tagName);
    if(e.target.tagName === "DIV"){
        e.target.remove();
    }
})

