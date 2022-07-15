/*

//querySelector
let boxEl = document.querySelector(".box");
console.log(boxEl);

*/
/*

//getElementById
let boxEl2 = document.getElementById("second-box");
console.log(boxEl2);

*/
/*

// clssList
let boxEl = document.querySelector(".box");
boxEl.classList.add("active");
console.log(boxEl.classList.contains("active"));
boxEl.classList.remove("active");
console.log(boxEl.classList.contains("active"));

*/
/*

//addEventListener
let boxEl = document.querySelector(".box");
boxEl.addEventListener("click",function(){
    if(boxEl.classList.contains("orange")){
        boxEl.classList.remove("orange");
        boxEl.classList.add("skyblue");
    } 
    else if (boxEl.classList.contains("skyblue")){
        boxEl.classList.remove("skyblue");
        boxEl.classList.add("orange");
    }
    else {boxEl.classList.add("orange");
    }
})

*/

/*
//setAttribute 속성 변경

let boxEl = document.querySelector(".box");
let inputEl = document.getElementById("input");

boxEl.addEventListener("click", function(){
    inputEl.setAttribute("type","password");
})
*/
/*
//textContent
let boxEl = document.querySelector(".box");
boxEl.addEventListener("click", function(){
    boxEl.textContent = "KDT";
})
*/
//실습

let boxEl = document.querySelector(".box");
let buttonEl = document.getElementById("button");
let addEl = document.getElementById("add");
let textEl = document.getElementById("text");
let spanEl = document.getElementById("span");

boxEl.addEventListener("click",function(){
    if(boxEl.classList.contains("orange")){
        boxEl.classList.remove("orange");
        boxEl.classList.add("skyblue");
    } 
    else if (boxEl.classList.contains("skyblue")){
        boxEl.classList.remove("skyblue");
        boxEl.classList.add("orange");
    }
    else {boxEl.classList.add("orange");
    }
})

buttonEl.addEventListener("click", function(){
    textEl.setAttribute("placeholder","아이디를 입력하세요.");
    spanEl.textContent= "아이디를 입력하세요";
})


// addEl.addEventListener("click", function printId(){
//     const id = document.querySelector(".id").value;
//     document.querySelector(".result").innerText = id;
// })

addEl.addEventListener("click", function(){
    let inputText;
    inputText = textEl.value;
    spanEl.textContent = inputText;
})