//날짜를 누르면 날짜가 날짜 입력 창에 자동으로 입력
//jQuery
/*
$("p").on("click",function(e){
    let date = e.currentTarget.textContent;
    $("#date").val(`2022년 7월 ${date} 일`);
})
*/
//js
const buttonEl = document.querySelector("table");
const dateEl = document.querySelector("#date");
const btn = document.querySelector("button");
const contentEl = document.querySelector("#content");

let target = null;

buttonEl.addEventListener("click", function(e){
    // let dateJs = e.target.innerText;
    // dateEl.value = `2022년 7월 ${dateJs} 일`;
    if(e.target.tagName === "P"){
        let dateJs2 = e.target.textContent;
        dateEl.value = `2022년 7월 ${dateJs2} 일`;
        target = e.target.parentNode;
    }
})


//내용을 입력하고 작성 버튼을 누르면 해당 날짜에 작성 내용이 div 요소로 추가 되도록 만들기
/*
$("button").on("click",function(e){
    var text =$("content").val();
    $(e.currentTarget).append($("<div>").text(text));
})
// taget이 바껴도  안바뀐다.. 
*/
// js
function writeSchedule(){
    const divEl = document.createElement("div");
    divEl.textContent = contentEl.value;
    target.append(divEl);
}
//작성 내용을 클릭하면 삭제 되는 기능 추가!

/*


if ($("#contnt").value != ""){
    $("p").append("<div></div>");
    $("div").val($("#content").val());
}
        $("#content").val(e.currentTarget.append())
        console.log(input);


function writeSchedule();
const dateEls = document.querySelectorAll("p");
todoList.addEventListener("click",function(e){
    console.log(e.target.tagName);
    if(e.target.tagName === "INPUT"&& e.target.getAttribute("type")=== "button"){
        e.target.parentNode.remove();
    }
})
부모요소한테 append 추가 
e.target 이용해서 textcontent 가져오기 
const tableList = document.querySelector("table");

tableList.addEventListener("click",function(e){
    console.log(e.target);
})


todoList.addEventListener("click",function(e){
    console.log(e.target.className);
})


function addClassName() {
    document.getElementsByClassName("dateEls").className;
}
console.log ("p");

todoList.addEventListener("click",function(e){
    console.log(e.target.className);
    if(e.target.classNameName === ""&&
    e.target.getAttribute("type")=== "button"){
        e.target.parentNode.remove();
    }
})
dateEls.forEach(function(e){
    e.target.className = "i"
})


$("p").on("click",function(){
    $("#date").val($("p").text());
})


p마다 클래스 네임 부여 
클래스 네임 반환받고

년도 날짜 먼저 그다음 클래스안에꺼 

document에서 뭔가를 클릭 했을 때, 해당 요소에다가 class 추가!
추가된 class가 가지고 있는 value 가져오기
날짜 input box에 2022년 7월 + 가져온 value 더해서 입력해주기 !

))

*/