// import React from 'react';
// import ReactDOM from 'react-dom';
// react는 es6기반으로 만들어졌기 때문에 import로 한다. 

function HelloWorldBtn() {
  const [isClick, setClickState] = React.useState("아직 클릭 안됨");
  const text = isClick ? "이제 클릭 됨" : "아직 클릭 안됨";

  return (
    <button onClick={() => setClickState(!isClick)}>
      <div>
        <span>{text}</span>
      </div>
    </button>
  )
}

 //  const e = React.createElement; react로 쓸 수 있는 빈요소 생성
const domContainer = document.getElementById("app");  // 돔요소를 담을 컨테이너
const root = ReactDOM.createRoot(domContainer); // 최상위요소
root.render(<HelloWorldBtn/>);