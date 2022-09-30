import { useEffect, useRef, useState } from "react";

export default function PracticeTimer() {
  const [ render, setRender ] = useState(0);
  const time = useRef(0);

  useEffect(()=> {
    const timer = setInterval(() => {
      time.current = time.current + 1; // Ref가 Interval 1초에 한번씩 값이 올라간다. 
      console.log(time.current);
    }, 1000); // 1000ms = 1초

    return() => { // 위의 useEffect가 언마운트되면 실행되는 코드 
      clearInterval(timer);
      console.log("타이머 종료");
    }
  },[]); // 켜질 때 한번만 실행되도록 빈 배열 켜기

  const showTime = () => {
    setRender(render + 1);
  }

  return (
    //  3. 시간 버튼을 누르면 지금까지 마운트가 된 시간을 출력해 줍니다!
    <>
      <h1>{time.current}</h1> 
      <button  onClick={showTime}>시간</button>
    </>
    
  ) 
}


