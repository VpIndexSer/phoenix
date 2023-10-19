
import './App.css';
import Movie from './components/Movie';
import { NavBar } from './components/NavBar';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

import Series from './components/Series';
import Mymsg from './components/Mymsg';
import Login from './components/Login';
import ContentState from './context/contents/ContentState';
import Contents from './components/Contents';
import UserTemp from 'components/UserTemp';
import PlayIt from 'components/PlayIt';

function App() {
  const [msg, setMsg] = useState(null);
  const [play, setPlay] = useState(null);
  const [mygrid, setMygrid] = useState(null);
  const mgrid=(val)=>{
    setMygrid(val);
  }

  const playit = (contenturl) => {
    setPlay(contenturl);
  }
  const showMsg = (message, type) => {
    setMsg({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setMsg(null);
    }, 3000);
  }
  return (
    <>
      
      <ContentState>
        
        <Router>
       
          <div className="App">
          <NavBar />
          </div>
          <div className="container my-2" style={{ height: "100px" }}>
            <Mymsg msg={msg} />
          </div>
          <div className="container" >
            <Routes>

              <Route exact path="/"
                element={
                  <div className="container my-3">
                    <Contents />
                  </div>} />
              <Route exact path="/movie"
                element={
                  <div className="movie">
                    <Movie />
                  </div>} />
              <Route exact path="/series"
                element={
                  <div className="series">
                    <Series />
                  </div>} />
              <Route exact path="/user"
                element={
                  <div className="user">
                    <UserTemp play={play} mygrid={mygrid} mgrid={mgrid} playit={playit}/>
                  </div>} />
              <Route exact path="/playit"
                element={
                  <div className="playit">
                    <PlayIt play={play}/>
                  </div>} />
              <Route exact path="/login"
                element={
                  <div className="container my-3">
                    <Login showMsg={showMsg} />
                  </div>} />
            </Routes>
          </div>
        </Router>
      </ContentState>
    </>
  );
}

export default App;
