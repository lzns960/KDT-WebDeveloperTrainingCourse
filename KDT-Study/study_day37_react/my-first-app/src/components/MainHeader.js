import React from "react";
// 모든 클래스 컴포넌트는 리액트에서 가져오기때문에 항상 import React를 해야한다. 

class MainHeader extends React.Component {
  render () {
    return (
      <h1>Hello, Component World!</h1>
    )
  }
}

/* function MainHeader() {
  return (
    <h1>Hello, Component World!</h1>
  )
}
*/

export default MainHeader;