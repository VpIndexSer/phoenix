
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
import WebContentState from 'context/webcontents/WebContentState';
import Contents from './components/Contents';
import UserTemp from 'components/UserTemp';
import PlayIt from 'components/PlayIt';
import CRUDSeason from 'components/CRUDSeason';
import CRUDEpisode from 'components/CRUDEpisode';

function App() {
  const [msg, setMsg] = useState(null);
  const [play, setPlay] = useState(null);
  const [img, setImg] = useState(null);
  const [title, setTitle] = useState(null);
  const [studio, setStudio] = useState(null);
  const [mygrid, setMygrid] = useState(null);
  const [w_id, setW_id] = useState(null);
  const [s_id, setS_id] = useState(null)
  const mgrid = (val) => {
    setMygrid(val);
  }

  // const playit = (contenturl) => {
  //   setPlay(contenturl);
  // }
  const playit = (contenturl, vtitle, vstudio, vimg) => {
    setPlay(contenturl);
    setStudio(vstudio);
    setTitle(vtitle);
    setImg(vimg);
  }
  const setWID = (wid) => {
    setW_id(wid);
  }
  const setSID = (sid) => {
    setS_id(sid);
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
      <WebContentState>
        <ContentState>

          <Router>

            <div className="App">
              <NavBar mgrid={mgrid}/>
            </div>
            <div className="container my-2" style={{ height: "100px" }}>
              <Mymsg msg={msg} />
            </div>
            <div className="container" >
              <Routes>

                <Route exact path="/"
                  element={
                    <div className="container my-3">
                      <Contents mygrid={mygrid}/>
                    </div>} />
                <Route exact path="/movie"
                  element={
                    <div className="movie">
                      <Movie />
                    </div>} />
                <Route exact path="/series"
                  element={
                    <div className="series">
                      <Series setWID={setWID} mygrid={mygrid}/>
                    </div>} />
                <Route exact path="/user"
                  element={
                    <div className="user">
                      <UserTemp play={play} title={title} studio={studio} mygrid={mygrid} mgrid={mgrid} playit={playit} />
                    </div>} />
                <Route exact path="/playit"
                  element={
                    <div className="playit">
                      <PlayIt play={play} title={title} img={img} studio={studio} />
                    </div>} />
                <Route exact path="/seasons"
                  element={
                    <div className="seasons">
                      <CRUDSeason setSID={setSID} w_id={w_id} mygrid={mygrid}/>
                    </div>} />
                <Route exact path="/episode"
                  element={
                    <div className="episode">
                      <CRUDEpisode s_id={s_id} mygrid={mygrid}/>
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
      </WebContentState>
    </>
  );
}

export default App;
