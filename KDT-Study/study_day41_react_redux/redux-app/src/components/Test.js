import { useSelector, useDispatch} from "react-redux"

export default function Test() {

  const weight = useSelector((state) => state); // index.js의 state를 그대로 받아온다는 익명함수
  const dispatch = useDispatch();

  return (
    <>
      <h1>당신의 몸무게는 {weight}</h1>
      <button onClick={()=> {dispatch({type:'증가'})}}>살 찌기</button>
      <button onClick={()=> {dispatch({type:'감소'})}}>살 빼기</button>
    </>
  )
}
