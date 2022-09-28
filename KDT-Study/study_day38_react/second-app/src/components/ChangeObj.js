import { useState } from "react";

export default function ChangeObj(props) {
  const [ index, changeIndex ] = useState(0);
  // 재할당해야하기때문에 let으로 선언
  let obj = props.objArr[index];

  const onchange = () => {
    if(index === props.objArr.length -1) {
      changeIndex(0);
    } else {
      changeIndex(index+1);
    }
    obj = props.objArr[index];
  }
  return (
    <div>
      <h1>이름: {obj.name}</h1>
      <h1>나이: {obj.age}</h1>
      <h1>별명: {obj.nickName}</h1>
      <button onClick={onchange}>프로필 변경하기</button>
    </div>
  );
};