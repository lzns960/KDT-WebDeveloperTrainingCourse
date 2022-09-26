import React, { Component } from "react";

class ClassState extends Component {
  constructor(props) { // constructor 클래스 내부에서 사용되는 초기값
    super(props);

    this.state = {
      message: "",
    }
  } 

  render() {
    const { message } = this.state;
    const onClickEnter = () => { this.setState({ message: "안녕하세요." }) };
    // state 내부에 저장된 message의 빈 문자열을 안녕하세요로 바꿔준다. 
    const onClickLeave = () => { this.setState({ message: "안녕히가세요~" }) };
    return ( // return 값은 html 을 그리는 것
      <div>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
        <h1>{ message }</h1>
      </div>
    );
  }
}

export default ClassState;