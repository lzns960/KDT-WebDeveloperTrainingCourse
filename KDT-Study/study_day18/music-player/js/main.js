const frame = document.querySelector("section");
const list = frame.querySelectorAll("article");
// 아티클이 들어있는 배열이기 때문에 list라고 지정 8개 article이 들어있는 유사배열
const len = list.length;
const deg = 360 / len;

const names = ["cardio", "groove", "happy", "light", "lily" , "limes", "pop", "swing"]

for (let i = 0; i < len; i++){
    list[i].style.transform = `rotate(${deg * i}deg) translateY(-100vh)`; 

    //사진 뽑아넣기 
    const pic = list[i].querySelector(".pic");
    pic.style.backgroundImage = `url(./img/${names[i]}.jpg)`;

    const title = list[i].querySelector(".text>h2");
    title.innerHTML = `${names[i]}`;

    const audio = document.createElement("audio");
    audio.setAttribute("src", `./music/${names[i]}.mp3`);
    audio.setAttribute("loop", "loop"); //무한히 돌아가게 하기 

    list[i].append(audio);
}
    // i 값에 따라 deg 값이 바뀔 것이니까 string으로 넣을 수 없으니 백틱이 필요

/* 좌우 이동 버튼 클릭 액션 처리 */
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
let num = 0; 

/* 가운데 패널 활성화 처리 */
let active = 0;

prev.addEventListener("click", function(e){
    frame.style.transform = `rotate(${deg * ++num}deg)`;
    
    if (active === 0) {
        active = len -1; //배열이기때문에 -1을 해준다. 
    }  else {
        active--;
    }

    for (let el of list) {
        el.classList.remove("on");
    }
    list[active].classList.add("on");
})

next.addEventListener("click", function(e){
    frame.style.transform = `rotate(${deg * --num}deg)`;

    if(active === len-1) {
        active = 0; // 마지막요소면 처음으로 가야하기 때문에
    } else {
        active++; 
    }

    for (let el of list) {
        el.classList.remove("on");
    }
    list[active].classList.add("on");
})

let before = -1; //수치가 들어가는 변수기 때문에 let으로 선언. 


for (let el of list) {
    const play = el.querySelector(".play");
    const pause = el.querySelector(".pause");
    const load = el.querySelector(".reload");

    play.addEventListener("click", function(e){
        if (before === -1){
            before = e.currentTarget;
        } else if (e.currentTarget !== before) {
            before.closest("article").querySelector("audio").pause();
            before.closest("article").querySelector(".pic").classList.remove("on");
            before = e.currentTarget;
        } 
        
        e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
        e.currentTarget.closest("article").querySelector("audio").play();
    });//closest메소드: 클릭이 일어난 버튼에 가장 가까운 아티클을 선택
    //상위 부모 요소 찾을 때 많이 쓴다. 

    pause.addEventListener("click",(e) => {
        e.currentTarget.closest("article").querySelector(".pic").classList.remove("on");
        e.currentTarget.closest("article").querySelector("audio").pause();
    });

    load.addEventListener("click", function(e){
        if (before === -1){
            before = e.currentTarget;
        } else if (e.currentTarget !== before) {
            before.closest("article").querySelector("audio").pause();
            before.closest("article").querySelector(".pic").classList.remove("on");
            before = e.currentTarget;
        } 
        
        e.currentTarget.closest("article").querySelector(".pic").classList.add("on");

        e.currentTarget.closest("article").querySelector("audio").load();
        e.currentTarget.closest("article").querySelector("audio").play();
    });
}


