// import './App.css';

import Board from "./components/Board";
import Profile from "./components/Profile";
import {Routes, Route, Link} from 'react-router-dom';
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import BoardDetail from "./components/BoardDetail";


function App() {
  return ( 
    <div className='App'>
      <Routes>
        <Route path='/' element={<Header/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path='/board/:boardID' element={<BoardDetail/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>

    </div>
  );
}

export default App;
