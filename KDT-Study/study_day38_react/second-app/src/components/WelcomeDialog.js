import React from 'react'
import Dialog from './Dialog'

export default function WelcomeDialog(props) {
  return (
    <>
      <Dialog color="blue" title="welcome to summoner's lift" message="칼바람나락에 오신 것을 환영합니다."/>
      <button onClick={()=> {alert(props.alertMessage)}}> {props.content} </button> 
        {/* 온클릭은 익명함수로 해야한다. */}
    </>
  )
}
