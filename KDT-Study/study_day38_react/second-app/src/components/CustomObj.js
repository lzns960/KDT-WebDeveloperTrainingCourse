export default function CustomObj(props) {
  const { name, age, nickName } = props.obj;
  return (
    <>
      <h1>이름: {name}</h1>
      <h1>나이: {age}</h1>
      <h1>별명: {nickName}</h1>
    </>
  )
};