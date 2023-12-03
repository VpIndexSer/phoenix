import React, { useContext, useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import AddEpisode from './AddEpisode';
import webcontentContext from 'context/webcontents/webcontentContext';
import EpisodeItem from './EpisodeItem';
const CRUDEpisode = (props) => {
  const { s_id,mygrid } = props;
  if (s_id) {
    localStorage.setItem('stored_s_id', s_id);
  }
  let stored_s_id = localStorage.getItem('stored_s_id');
  const [episodes, setEpisodes] = useState({ id: "", ueno: "", ueurl: "" });
  const concon = useContext(webcontentContext);
  const { episode, getEpisode, editEpisode, deleteEpisode } = concon;
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getEpisode(stored_s_id);
      // console.log(stored_s_id)
      // console.log(episode)
    }
    else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [])

  const updateEpisode = (currentcontent) => {
    ref.current.click();
    setEpisodes({ id: currentcontent._id, ueno: currentcontent.eno, ueurl: currentcontent.eurl })
  }

  const ref = useRef(null)
  const refClose = useRef(null)
  const handleclick = (e) => {
    e.preventDefault();
    //set url
    let myurl = episodes.ueurl;
    let i2 = -1;
    i2 = myurl.indexOf("/view");
    let finalurl = myurl;
    if (i2 !== -1) {
      let finalurl0 = myurl.substring(0, i2);
      let lastend = "/preview";
      finalurl = finalurl0 + lastend;

    }
    editEpisode(episodes.id, episodes.ueno, finalurl);
    ref.current.click();
    // props.showMsg("Note is Updated Successfuly","success")
    // getNotes();
  }

  const onChange = (e) => {
    setEpisodes({ ...episodes, [e.target.name]: e.target.value });
  }


  //delete confirmation
  const refClick = useRef(null);
  const refCloseYN = useRef(null);
  let delid = null;
  const deleteYN = (deleteid) => {
    delid = deleteid;
    refClick.current.click();
  }
  const handleclick2 = (e) => {
    e.preventDefault();
    deleteEpisode(delid);
    refClick.current.click();
  }

  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button ref={refClick} type="button" className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModalCenter">
        {/* Launch demo modal */}
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle" style={{ color: "black" }}>Delete Confrimation </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p style={{ color: "black" }}>Are You Sure to delete the content ???</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" ref={refCloseYN}>Close</button>
              <button type="button" className="btn btn-primary" onClick={handleclick2}>Delete Permanently</button>
            </div>
          </div>
        </div>
      </div>

      {/* edit content */}
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>


      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel" style={{ color: "black" }}>Edit Episode</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="container my-3">
                <div className="form-group">
                  <label className="my-2" htmlFor="ueno" style={{ color: "black" }}>Episode Number</label><br />
                  <input type="text" className="form-control" id="ueno" name="ueno" value={episodes.ueno} placeholder="Enter Episode number" onChange={onChange} />
                </div>
                <div className="form-group">
                  <label className="my-2" htmlFor="ueurl" style={{ color: "black" }}>Video</label><br />
                  <input type="text" className="form-control" id="ueurl" name="ueurl" value={episodes.ueurl} placeholder="Enter Episode Video url" onChange={onChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">Close</button>
              <button type="button" disabled={episodes.ueno.length < 0 || episodes.ueurl.length <= 3} className="btn btn-primary" onClick={handleclick}>Update Season</button>
            </div>
          </div>
        </div>
      </div>


      {/* // .... */}
      <AddEpisode S_id={s_id} />
      <h1 className="container my-3 text-center">Your Episode</h1>
      <div className='row'>
        <div className="container my-4" style={{ textAlign: "center", color: "red" }}><h3>
          {episode.length === 0 && 'Comming Soon ...'}</h3> </div>
        {episode.map((episode) => {
          // for unique key constrain key is used
          return <EpisodeItem mygrid={mygrid}key={episode._id} episode={episode} updateEpisode={updateEpisode} deleteYN={deleteYN} />;
          // <ContentItem key={notes._id} updateContent={updateContent} note={notes} showMsg={props.showMsg}/>;
        }).reverse()}
      </div>
    </>
  )
}

export default CRUDEpisode