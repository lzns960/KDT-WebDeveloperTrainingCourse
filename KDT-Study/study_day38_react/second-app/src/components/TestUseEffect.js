import { useEffect, useRef, useState } from "react";

export default function TestUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] =useState("입력해주세요!");
  
  const inputValue = useRef();   // input 태그를 참조

  const onInputChange = () => {
    console.log("🎹키 입력");
    setText(inputValue.current.value) // useRef
    // input 태그에 useRef를 저장하는 것에 쓰는건지 / 참조하는건지 잘 구분
    // 저장할 때는 useRef 선언한 것. current ( 저장소로 쓴다면 초기화를 시켜야 한다.)
    // 값을 참조할 때는 선언한 것.current.value로 한번 더 들어가야한다. 
  }


  const onButtonClick = () => {
    console.log("🪓 버튼 클릭");
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("🎨렌더링 할 때마다 실행되는 useEffect");
  })

  useEffect(() => {
    console.log("👓둘 다 보고 있는 useEffect");
  }, [count, text ])

  useEffect(() => {
    console.log("🎃 최초 렌더링 시에만 실행되는 useEffect");
  }, [])

  return(
    <>
      <h1>{count}</h1>
      <button onClick={onButtonClick}> +1 버튼</button>
      <br></br> <br/>
      <input ref={inputValue} onChange={onInputChange}></input>
      <h1>{text} </h1>
    </>
  )
}

