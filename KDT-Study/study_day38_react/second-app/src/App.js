import './App.css';
import ChangeObj from './components/ChangeObj';
import Counter from './components/Counter';
import CustomList from './components/CustomList';
import CustomObj from './components/CustomObj';
import Logo from './components/Logo';
import MainHeader from './components/MainHeader';
import StatePractice from './components/StatePractice';
import TestCSS from './components/TestCss';
import { useState } from 'react';
import ConditionalRende from './components/ConditionalRender';
import PracticeOne from './components/PracticeOne';
import PracticeTwo from './components/PracticeTwo';
import TestRef from './components/TestRef';
import ChangeFocus from './components/ChangeFocus';

function App() {
  const nameArr = ["뽀로로", "루피", "크롱이"];
  const pororoObj = [{ 
    name: "뽀로로", 
    age: "5", 
    nickName: "사고뭉치"
  },
  { 
    name: "루피", 
    age: "7", 
    nickName: "공주님"
  },
  { 
    name: "크롱", 
    age: "500억년", 
    nickName: "공룡"
  }
];

  const [ condition, setCondition ]= useState('보이기');
  const onChange = () => {
    condition === '보이기' ? setCondition('감추기') : setCondition ('보이기');
  }
  const conditionRender = condition === '감추기' && <ConditionalRende/>

  const [ practice, setPractice ]= useState('1');
  const onChangeP = () => {
    practice === '1' ? setPractice('2') : setPractice ('1');
  }
  const practiceRender = practice === '1' ? <PracticeOne text={practice}/> : <PracticeTwo text={practice}/> 
  return (
    <div className="App">
      <ChangeFocus/>
      <TestRef/>
      {practiceRender}
      <button onClick={onChangeP}>{practice}번</button>

      {conditionRender}
      <button onClick={onChange}>{condition}</button>
      <Logo/>
      <TestCSS/>
      <ChangeObj objArr={pororoObj}/>
      <CustomObj obj={pororoObj}/>
      <CustomList arr={nameArr}/>
      <MainHeader text="Go to Naver" name="수지" href="https://naver.com"/>
      <Counter/>
      <StatePractice/>
    </div>
  );
}

export default App;
