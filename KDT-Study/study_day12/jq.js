/*
$("span").remove();

let spanEl = document.querySelector("span");
spanEl.remove();
*/

/*
function showValue() {
    $("input").val("가나다라마바사");
    document.querySelector("input").value = "가나다라마바사";
}
*/

/*
$("span").text("가나다라마바사");
document.querySelector("span").textContent="가나다라마바사";
*/

/*
//실습 JS로 구현하기 
const changeBtn = document.querySelector(".changeBtn");
const spanEl = document.querySelector(".span");
const printBtn = document.querySelector(".printBtn");
const textInput = document.querySelector (".textInput");

changeBtn.addEventListener("click",function(){
    textInput.setAttribute("value","가나다라마바사");
})

function changeSpan() {
    spanEl.textContent=textInput.value
}
*/
/*

//실습 JQuery로 구현하기 

// Js의 addEventListener = jQuery의 on
$(".printBtn").on("click", function(){
    $(".span").text($(".textInput").val());
})
$(".changeBtn").on("click", function(){
    $(".textInput").val("가나다라마바사");
})
*/
/*
// 실습: Js
const textInput = document.querySelector(".textInput");
const changeBtn1 = document.querySelector(".changeBtn1");
const changeBtn2 = document.querySelector(".changeBtn2");

changeBtn1.addEventListener("click",function(){
    textInput.setAttribute("placeholder","변경1을 누르셨습니다.");
})

changeBtn2.addEventListener("click",function(){
    textInput.setAttribute("type","radio");
})

// 실습: jQuery
$(".changeBtn1").on("click",function(){
    $(".textInput").attr("placeholder","변경1을 누르셨습니다.");
})
$(".changeBtn2").on("click",function(){
    $(".textInput").attr("type","radio");
})
*/
/*
//실습 :css style
const changeBtn1 = document.querySelector(".changeBtn1");
const changeBtn2 = document.querySelector(".changeBtn2");

document.querySelector("div").style = "width:100px; height:100px;";
changeBtn1.addEventListener("click",function(){
    document.querySelector("div").style.backgroundColor = "orange";
})

$(".changeBtn2").on("click",function(){
    $("div").css("background-color","orange");
})
*/

/*
//html 추가 
$("p").html("<h1>루피</h1>");

document.querySelector("p").innerHTML="<h1>루피</h1>";
*/

/*
const li = document.createElement("li");
li.textContent = "추가용";

$(".me").before(li);
*/

const button1 = document.querySelector(".first");
const button2 = document.querySelector(".last");
const textInput = document.querySelector(".text");
const list = document.querySelector("ul");

button1.addEventListener("click",function(){
    const addLi = document.createElement("li");
    addLi.textContent=textInput.value;

    list.append(addLi);
    textInput.value = "";
})


function prependLi() {
    let text = $(".text").val();

    $("ul").prepend(`<li>${text}</li>`);
}

const children = document.querySelector("div").children;
const childNodes = document.querySelector("div").childNodes;

console.log("children", children);
console.log("nodes", childNodes);