// AOS.init({
//     offset: 300,
//     duration: 1000,
// });
/* 
//원래 위치에서 원하는 위치로 보내는 애니메이션 
gsap.to(".box1", {
    x: 1000,
    rotation: 720,
    scaleX: 2,
    duration: 4,
})
//원하는 위치로 보내놓았다가 원래 위치로 복귀시키는 애니메이션 
gsap.from(".box2", {
    x: 1000,
    rotation: 720,
    scaleX: 2,
    duration: 4,
})


//애니메이션을 연결 및 조합
let tl = gsap.timeline(); //timeline메소드를 tl 변수에 선언

tl.to(".box3", {
    x: 1000,
    rotation: 720,
    duration: 3
}).to(".box3", {
    backgroundColor: "hotpink",
    duration: 1,
}).to(".box3", {
    x: 0,
    opacity: 0,
    duration: 3
})

//스크롤에 따라 gsap 작동
gsap.registerPlugin(ScrollTrigger);

gsap.to(".box5", {
    ScrollTrigger:{
        trigger: ".box5",
        toggleActions: "restart", //스크롤이 발생할 때마다 동작하도록 설정
        markers: true, //스크롤 애니메이션이 어디서 동작하게 되는지 확인할 수 있음
        scrub: true, //스크롤에 따라 반응
        //애니메이션 시작되는 지점, 스크롤 값에 따라 어떻게 설정되는지
        //요소의 꼭대기부터 애니메이션을 시작하겠다. 
        start: "bottom 50%",
    },
    x: 1000,
    rotation: 720,
    scaleX: 2,
    duration: 3,
})

gsap.from(".box7", {//Box6이 보여야 box7가 동작 
    ScrollTrigger:{
        trigger: ".box6",
        toggleActions: "restart", //스크롤이 발생할 때마다 동작하도록 설정
        markers: true, //스크롤 애니메이션이 어디서 동작하게 되는지 확인할 수 있음
        scrub: true, //스크롤에 따라 반응
        end: "+=3000", //애니메이션이 동작할 스크롤 크기
        pin: true, //애니메이션이 화면을 따라온다. 요소가 얼마만큼의 크기를 가져가는지도 알아야 한다. 
    },
    x: 1000,
    rotation: 720,
    scaleX: 2,
    duration: 4,
})
*/


gsap.registerPlugin(ScrollTrigger);

//gsap 기본 속성 설정 
gsap.defaults ({
    ease: "none",
    duration: 2,
})

const tl = gsap.timeline ({
    scrollTrigger: {
        trigger: ".wrap", //시작점
        start: "top top", 
        marker: true,
        end: "+=3000px",
        scrub: true,
        pin: true, //꼭 있어야 화면이 고정된 채로 스크롤한 것이 보인다. 
    }
});

tl.from (".palevioletred", {xPercent: -100}) // x축 상대크기 자기 크기만큼 사라져있는 것
.from(".palegoldenrod", {xPercent:100})
.from(".palegreen", {yPercent:-100})
.from(".paleturquoise",{yPercent:100});