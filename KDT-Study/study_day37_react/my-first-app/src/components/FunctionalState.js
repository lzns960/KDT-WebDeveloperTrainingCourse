import React, { useState } from "react";
// 리액트 객체에 내장되어있는 메소드를 불러와야한다. 
// 함수형컴포넌트에서 변경할 수 있는 state를 사용하려면~

function FunctionalState() {
  // 무조건 배열로 시작
  // useState안에는 초기 값을 넣어야 한다. (빈문자열/true/false)
  const [ message, setMessage ] = useState("");
  const onClickEnter = () => { setMessage("안녕하세요~")};
  const onClickLeave = () => { setMessage("안녕히가세요.")};
  
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{ message }</h1>
    </div>
  );
};

export default FunctionalState;