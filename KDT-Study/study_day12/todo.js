const inputTask = document.querySelector(".input-task");
const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");

console.log(inputTask,addBtn, todoList);

addBtn.addEventListener("click", function(){
    //inputTask에 공란일 경우
    if(inputTask.value === ""){
        inputTask.setAttribute("placeholder","할 일을 입력해주세요.");
    } else {
        // HTML 요소를 만들어주는 메소드: createElement
        const addLi = document.createElement("li");
        
        const checkBox = document.createElement("input");
        checkBox.setAttribute("type","checkbox");

        //체크박스 체크하면 취소선 만들기
        checkBox.addEventListener("click", function(){
            if(checkBox.checked === true) {
                //자기 부모요소를 다 들고온다. 부모요소에 접근하고 싶으면 parentNode를 사용.
                checkBox.parentNode.style.textDecoration = "line-through"
            }
            else {
                checkBox.parentNode.style.textDecoration = "none"
            }
        })

        //삭제 버튼 만들기 
        const deletBtn = document.createElement("input");
        deletBtn.setAttribute("type", "button");
        deletBtn.setAttribute("value","삭제");
        deletBtn.setAttribute("onclick","deletTask(this)");

        // li 자식으로 체크박스 두는 append
        // <li>
        //     <input type = "checkbox"/>
        // </li>
        addLi.append(checkBox,inputTask.value ,deletBtn );
        // addLi.textContent = inputTask.value;
        // textContent를 사용하면 앞에 있는 append를 다 날려버린다. 그냥 append 쓰333
        todoList.append(addLi);

        //내용추가된 후 초기화시키는 것
        inputTask.value = "";
    }
})

/*
//삭제 방법1 클릭된 요소 제거 (onclick + this)
function deletTask(t) {
    t.parentNode.remove();
}
*/
// ul 태그 내에서 특정 클릭이 발생하면 모든 정보를 전달해준다. 
/* 삭제 방법2: 부모요소 전체에 addEvent 
E매개변수로 전달해서 
E target이 뭔지 체크하고 if로 걸어서 삭제시키는 것 
*/
todoList.addEventListener("click",function(e){
    console.log(e.target.tagName);
    if(e.target.tagName === "INPUT"//tagName은 대문자로 받아와야함~ 
    && e.target.getAttribute("type")=== "button"){
        e.target.parentNode.remove();
    }
})

