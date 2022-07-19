// JavaScript

const buttonEl = document.querySelector("table");
const dateEl = document.querySelector("#date");
const contentEl = document.querySelector("#content");
// 2 미리 전역 변수로 선언하여 문제 예방
let target = null;

// 날짜를 누르면 날짜가 날짜 입력 창에 자동으로 입력
buttonEl.addEventListener("click", function (e) {
    if (e.target.tagName === "P") {
        let dateJs2 = e.target.textContent;
        dateEl.value = `2022년 7월 ${dateJs2} 일`;
        target = e.target.parentNode;
    } else if (e.target.tagName === "DIV") {
        // 6  DIV 요소가 클릭이 되면 해당 요소를 삭제 처리!
        e.target.remove();
    }
})

//내용을 입력하고 작성 버튼을 누르면 해당 날짜에 작성 내용이 div 요소로 추가 되도록 만들기
function writeSchedule() {
    // 4 writeSchedule 이 실행 되면 그때마다 div 를 생성하여 다른 날짜에도 TASK 추가가 가능하도록 수정!
    const divEl = document.createElement("div");
    divEl.textContent = contentEl.value;
    target.append(divEl);
}

//작성 내용을 클릭하면 삭제 되는 기능 추가!
// 5 // divEl 이 여러개 생성되면 모든 div에 아래의 addEventListener 가 등록이 안되어 있으므로 삭제가 안되는 문제 발생
// e.target 을 이용하여 div 가 클릭이 되면 삭제 처리 되도록 로직 수정
divEl.addEventListener("click", function (e) {
    if (e.target.tagName === "DIV") {
        e.target.remove();
    }
})

// 2. 중간에 있던 변수 선언을 최 상단으로 옮겼습니다. 
// 4. writeSchedule 이 수행 될때마다 div 요소를 생성하여 TASK 를 여러개 등록해도 문제가 없도록 수정 
// 5. 기존에는 전역으로 선언된 divEl 이 하나라서 아래의 addEventListener 가 작동을 했지만, 이제는 여러개가 생성이 되어 아래 기능이 동작하지 않아서 다른 방식으로 처리를 하였습니다.
// 6. e.target 에 div 요소가 클릭(즉, 등록 된 TASK) 되면 해당 요소를 지우는 방식으로 5번의 내용을 대체하였습니다!


//jQuery
/*
// 날짜를 누르면 날짜가 날짜 입력 창에 자동으로 입력
$("p").on("click",function(e){
    const date = e.currentTarget.textContent;
    $("#date").val(`2022년 7월 ${date} 일`);
})

//내용을 입력하고 작성 버튼을 누르면 해당 날짜에 작성 내용이 div 요소로 추가 되도록 만들기
$("button").on("click",function(){
    const text =$("#content").val();
    $("p").append($("<div>").text(text));
    // $('#parent').append($('<div>').html('your content')) -> 안됩니다.. 
})
//작성 내용을 클릭하면 삭제 되는 기능 추가!
$("p>div").on("click", function () {
    $("div").remove();
})
*/