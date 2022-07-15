let boxOne = document.querySelector(".box-1");
let boxTwo = document.querySelector(".box-2");
let boxThree = document.querySelector(".box-3");
console.log(boxOne);
console.log(boxTwo);
console.log(boxThree);


boxOne.classList.add("orange");
boxTwo.classList.add("skyblue");

console.log(boxThree.classList.contains("coral"));
boxThree.classList.remove("coral");
boxThree.addEventListener("click",function(){
    boxThree.classList.add("coral");
})