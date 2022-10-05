import React from 'react'

export default function Where() {
  const where = prompt('어디로 갈까요? left/ right')

  return (
    <>
      {where === 'left' ? (<h1>여기는 왼쪽입니다</h1>) : (<h1>여기는 오른쪽입니다</h1>)} 
    </>
  )
  /* if문
  if (where === 'left') {
    return (
      <> 
        <h1>여기는 왼쪽입니다.</h1>
      </>
    )
  } else if (where === 'right') {
    return (
      <>
        <h1>여기는 오른쪽입니다.</h1>
      </>
    )
  } else {
    return(
      <>
        <h1>값을 잘못입력하셨습니다.</h1>
      </>
    )
  }
*/
}
