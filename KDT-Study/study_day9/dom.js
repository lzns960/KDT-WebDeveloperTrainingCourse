let boxEl = document.querySelector(".box");
//box 클래스를 가져다가 boxEl 변수에 넣어라. 

console.log(boxEl);

boxEl.addEventListener("click",function (){

    if (boxEl.classList.contains("orange")) {
        boxEl.classList.remove("orange");
        boxEl.classList.add("skyblue");
    } else {
        boxEl.classList.add("orange");
    }
})