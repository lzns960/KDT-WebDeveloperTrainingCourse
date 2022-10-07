import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store';

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

/* 코딩애플 몸무게 Redux 
const weight = 100;

function reducer(state = weight, action) {// js의 매개변수 전달문법: state가 없으면 weight를 넣어라
  if(action.type === '증가') {
    state++;
    return state;
  } else if (action.type === '감소') {
    return --state;
  } else {
    return state; // state 값을 전달하는 역할
  }
}
*/
let store = createStore(rootReducer, reduxDevTool);
console.log(store.getState()); // 내가 지금 만들고 있는 React 앱의 모든 state값을 확인하는 방법

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
