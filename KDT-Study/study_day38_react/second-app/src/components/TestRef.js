import { useState, useRef } from "react";

export default function TestRef (){
  const [text, setText] = useState("안녕하세요");

  const inputValue = useRef();
  // 변화값에 관련된 모든 내용들이 변수에 담기게 된다. 
  const onChangeText = () => {
    console.log(inputValue);
    let inputText = inputValue.current.value;
    // inputValue 변수의 객체 current에 들어있고. 그에 대한 value값 
    // e.target.value와 같은 뜻
    setText(inputText);
  }
  return (
    <div>
      <h1>{text}</h1>
      <input ref={inputValue} onChange={onChangeText}></input>
    </div>
  )
}