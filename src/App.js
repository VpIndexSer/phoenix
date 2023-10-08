
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

function App() {
  const [msg, setMsg] = useState(null);

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
          <div className="container my-2" style={{ height: "100px"}}>
            <Mymsg msg={msg} />
          </div>
          <div className="container" >
            <Routes>

              <Route exact path="/"
                element={
                  <div className="container my-3">
                    <Contents/>
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
