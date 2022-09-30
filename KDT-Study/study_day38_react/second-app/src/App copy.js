// import './App.css';
import { useEffect, useRef, useState } from 'react';
import PracticeTimer from './components/PracticeTimer';


function App() {
  const [show, setShow] = useState(false);
  const changeFocus = useRef(); // 돔요소를 참조할 때는 데이터를 저장하려는 것이 아니기 때문에 useRef를 선언만 하면된다.(초기값 지정필요x)

  useEffect(()=> {
    changeFocus.current.focus(); // useEffect 안에 있기 때문에 한번만 될 것이다. 
  },[]);

  return (
  // 1. 버튼을 클릭하면 PracticeTimer 컴포넌트가 마운트 되고 
    <div className='App'>
      { show && <PracticeTimer/>}
      <button ref={changeFocus} onClick={()=> setShow(!show)}>{show? "숨기기" : "보이기"}</button>
    </div>
  );
}

export default App;
