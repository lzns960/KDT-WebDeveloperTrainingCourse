//console.log(window)

//single element
// const form = document.getElementById("todo-form")
/*
const form = document.querySelector("#todo-form");
console.log(form)
*/


//multiple element
/*
//querySelectorAll을 사용하는 것이 일반적 
const items= document.querySelectorAll(".item");
items.forEach(()=>{
    console.log(item);
})
console.log(items);

console.log(document.getElementsByClassName("item"));
console.log(document.getElementsByTagName("li"));
*/

/*
todos.lastElementChild.remove();
todos.firstElementChild.textContent = "Hello";
todos.lastElementChild.innerHTML = "<h1>Hello</h1>"


button.addEventListener("click", function(e){
    e.preventDefault(); //기본적인 이벤트가 방지되면서 button form의 새로고침을 방지할 수 있다. 
    e.target.style.color = "red"
})
*/
const todos = document.querySelector("#todo-list");
const button = document.querySelector(".submit");
const todoInput = document.querySelector("#todo-input");
const msg = document.querySelector("#msg");
button.addEventListener("click",onSubmit)

function onSubmit(e){
    e.preventDefault();

    //공백 추가 방지 
    if(todoInput.value === ''){
        msg.style.display = 'block';
        setTimeout(()=> msg.style.display = "none", 2000)//이벤트예약(이벤트,초) 
        return;
    }

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(todoInput.value));
    li.classList.add("item"); // li에 css 적용위한 item 클래스 추가 
    todos.appendChild(li);
    todoInput.value = ""; // 할일 추가 후 todoInput을 빈칸으로 만들기 위함
}
