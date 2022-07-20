const date = document.querySelector("#date");
const content = document.querySelector("#content");
const calendar = document.querySelector("table");

// 전역 변수 선언하고 클릭된 위치를 저장하고 실행
//데이터를 전달할 때 전역 변수로 전달하는 건 위험하다.
let target; //let 변수는 중괄호 안에서 벗어나지 못한다. 

//  함수에 데이터 전달할 때는 매개변수로 전달하는 것이 좋다. 
calendar.addEventListener("click", function(e){
    console.log("e-target",e.target.tagName);
    if(e.target.tagName === "P") {
        date.value = e.target.textContent;
        target = e.target.parentNode; //p태그의 부모인 TD 태그로 전역변수 지정
        //불러오는 것이 먼저
    }else if (e.target.tagName === "TD") {
        date.value = e.target.querySelector("p").textContent; //e.target인 TD 태그안의 P태그안에 있는 텍스트를 지정
        //e.target.firstChild.textContent; 로 사용가능 /TD 태그의 첫번째 자식 P 태그안에 있는 텍스트를 지정
        //e.target.child[0].textContent; 로 사용가능
        target = e.target; //전역변수에 위치값을 저장. 
    }
    /*
    //삭제방법1 
    else if (e.target.tagName === "DIV") {
        e.target.remove();
    }
    */
})
//e.target: 정확하게 클릭된 요소가 무엇인지 반환해준다.
//e.currentTarget: 클릭된 요소의 부모요소를 반환해준다. 

function writeSchedule() {
    let task = content.value;
    let divEl = document.createElement("div");

    divEl.setAttribute("onclick", "deleteTask(this)");//전역으로 노는 함수기 때문에 자기자신을 지워달라고 this를 입력한다.

    divEl.textContent = task;
    
    /* 삭제방법2 
    // 추가된 DIV에 remove 이벤트 리스너 거는 방식(target 뒤에 붙이기 전에 달아주는 것이 좋다.)
    divEl.addEventListener("click", function(){
        if(divEl.style.textDecoration === "line-through" ) {
            divEl.remove();
        }else {
            divEl.style = "text-decoration: line-through";
    }
    });
    */

    target.append(divEl);
    content.value  = "";
}

// onclick + this 로 이용한 삭제방법3
function deleteTask(t) {//속성으로 걸어줬던 this가 t로 매개변수가 들어온다. 
    t.remove();
}

