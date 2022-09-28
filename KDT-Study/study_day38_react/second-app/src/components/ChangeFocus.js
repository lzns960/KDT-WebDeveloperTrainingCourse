import { useState, useRef } from "react";

export default function ChangeFocus() {
  const inputOne = useRef();
  const inputTwo = useRef();

  const ChangeFocusOne = () => {
    inputOne.current.focus();
  }

  const ChangeFocusTwo = () => {
    inputTwo.current.focus();
  }
  return (
    <>
      <input ref={inputOne}></input>
      <input ref={inputTwo}></input>
      <button onClick={ChangeFocusOne}> 1번 버튼 </button>
      <button onClick={ChangeFocusTwo}> 2번 버튼 </button>
    </>
  )
}