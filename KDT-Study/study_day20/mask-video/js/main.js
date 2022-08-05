const main = document.querySelector("main"); //문서에서 제일 처음만나는 하나를 변수에 넣는다.
const btns = main.querySelectorAll("#nav li"); // queryselectorall은 배열이므로 각가에 접근해야한다. btns[0]처럼
const btnsLen = btns.length;

let before = -1; // 배열은 -1의 값을 가질 수 없다. 


for (let i = 0; i < btnsLen; i++) {
    btns[i].addEventListener("click",function(){
        if (before === -1 && i !== 0) { // 처음 load 됐을 때= -1 
            before = i; 
            btns[0].classList.remove("on"); 
            btns[i].classList.add("on"); // 클릭된 애한테 class on 추가 
        }  else if (before !== i) {// 재확대 안되는 예외처리 
            btns[before].classList.remove("on");
            btns[i].classList.add("on");
            before = i;
        }
    })
}