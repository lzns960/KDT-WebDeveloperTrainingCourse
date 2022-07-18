# Mission_4th

[https://sparkly-cendol-b0a4f7.netlify.app/](https://sparkly-cendol-b0a4f7.netlify.app/)

페이지 따라 만들기 과제 입니다!HTML 구조는 위 링크의 페이지에서 개발자 도구를 사용하셔서 참고하셔도 되고, 직접 원하는 구조로 만드셔도 됩니다! 페이지를 따라 만드시는데 필요한 최소한의 정보는 아래를 참고하시고, 여기에 적절한 CSS 속성 값을 추가하시면 됩니다!

1. body 태그 속성
    1. height: 3000px
    2. background-image: url("[https://mblogthumb-phinf.pstatic.net/20160127_177/krazymouse_1453865104404DjQIi_PNG/%C4%AB%C4%AB%BF%C0%C7%C1%B7%BB%C1%EE_%B6%F3%C0%CC%BE%F0.png?type=w2](https://mblogthumb-phinf.pstatic.net/20160127_177/krazymouse_1453865104404DjQIi_PNG/%C4%AB%C4%AB%BF%C0%C7%C1%B7%BB%C1%EE_%B6%F3%C0%CC%BE%F0.png?type=w2)");
    3. margin: 0;
2. 화면 좌측 그라디에이션이 들어간 div 속성(해당 속성에는 별다른 CSS 속성 값 추가가 필요 없습니다)
    1. position: relative;
    2. left: 20px;
    3. height: 3000px;
    4. width: 100px;
    5. background: linear-gradient(orange, black);
3. 상하단 메뉴를 구성하는 flex 요소 container 및 아이템 배경 색상은 자유
4. flex 컨테이너
    1. 위 아래 모두 height: 70px / width: 100%
5. flex 아이템 동일 속성
    1. height: 50px;
    2. border-radius: 30px;
    3. font-weight: 700;
    4. flex 아이템 내부의 텍스트는 수평, 수직으로 중앙 정렬
6. 화면 상단 flex nav 메뉴의 item 요소 속성
    1. flex-basis: 150px;
7. 화면 하단 flex nav 메뉴의 item은 고정 비율로 1:1:1:2 가 나오도록 만들어 주세요!
    1. 화면 폭이 줄어도 해당 비율은 유지가 되어야 합니다.
8. 버튼에 마우스가 올라가면 버튼 색상이 변경
9. 뷰포트 최상단과 최하단에 각각 flex를 사용한 nav 메뉴가 고정되어 스크롤을 따라 다니도록 메뉴 만들기

개발자 도구를 잘(?) 사용하시면 물론 많은 정보를 얻으실 수 있으시겠지만 가급적 직접 만들어 보시는 것을 권해 드립니다!

![캡처](https://user-images.githubusercontent.com/78632299/175308770-62db109b-9520-4489-9d0d-6f4e3d586fe2.JPG)
