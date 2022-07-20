// SUBMENU > SEARCH
const searchEl = document.querySelector(".search");
const searchInputEl =  searchEl.querySelector("input");

searchEl.addEventListener("click", function(){
    searchInputEl.focus();
})
searchInputEl.addEventListener("focus", function(){
    searchInputEl.setAttribute("placeholder", "통합 검색");
})

//포커스의 반대되는 이벤트 blur
searchInputEl.addEventListener("blur", function(){
    searchInputEl.setAttribute("placeholder", "");
})

//SWIPER
//NOTICE >> SWIPER
const swiperNotice = new Swiper (".notice .notice-line .swiper", {
    direction: "vertical", //문자열 형식으로 줘야 한다. 방향
    loop: true, 
    autoplay: true, 
})

//PROMOTION >> SWIPER
// SWIPER PROMOTION
const swiperPromotion = new Swiper(".promotion .swiper", {
    direction: "horizontal", // 기본 값
    slidesPerView: 3, // 한번에 보여줄
    spaceBetween: 10, // 아이템간 거리
    centeredSlides: true, // 슬라이드 센터 여부
    loop: true, // 루프 여브
    autoplay: {// 자동 재생, 변경 시간 설정
        delay: 5000,
        disableOnInteraction: false, //클릭하고 왔다갔다하는 액션을 끄게하는 것 (원래 swiper의 기능)
    },
    pagination: {
        el: ".promotion .swiper-pagination",
        clickable: true, 
    },
    navigation: {
        prevEl: ".promotion .swiper-button-prev",
        nextEl: ".promotion .swiper-button-next",
    } 
});
