import { useState } from "react";

export default function Counter() {
  const [ count, setNumber] = useState(0);
  const onInc = () => {
    setNumber(count+1);
  }
  const onDec = () => {
    setNumber(count-1);
  }


  return (
    <>
      <h1>{ count }</h1>
      <button onClick={onInc}>+1</button>
      <button onClick={onDec}>-1</button>
    </>
  )
}