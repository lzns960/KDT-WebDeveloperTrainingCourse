import { useRef, useState } from "react";

// 변수여도 컴포넌트로 구현가능하다. 
const Comparing = () => {
  const [countState, setState] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;
  const [render, setRender] = useState(0);

  const reRender = () => {

  }

  const countUpState = () => {
    setState(countState + 1 );
    console.log("State:" , countState);
  }
  
  const countUpRef = () => {
    countRef.current = countRef.current +1;
    console.log("Ref:", countRef.current);
  }

  const countUpVar = () => {
    countVar = countVar + 1 ; 
    console.log("Variable:", countVar);
  }

  return (
    <>
      <h1>State: {countState}</h1>
      <h1>Ref: {countRef.current}</h1>
      <h1>Variable: {countVar}</h1>
      <button onClick={countUpState}>State +1</button>
      <button onClick={countUpRef}>Ref +1</button>
      <button onClick={countUpVar}>Variable +1</button>
      <button onClick={reRender}>렌더링 +1</button>
    </>
  )
}

export default Comparing;