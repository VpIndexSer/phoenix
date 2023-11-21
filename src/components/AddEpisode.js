import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import webcontentContext from 'context/webcontents/webcontentContext';
import { useNavigate } from 'react-router-dom';
const AddEpisode = (props) => {
  const { S_id } = props;
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      //   getNotes();
    }
    else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const concon = useContext(webcontentContext);
  const { addEpisode } = concon;
  const [episode, setEpisode] = useState({ eno: "", eurl: "" });
  const handleclick = (e) => {
    // debugger
    e.preventDefault();
    //set url
    let myurl = episode.eurl;
    let i2 = -1;
    i2 = myurl.indexOf("/view");
    let finalurl = myurl;
    if (i2 !== -1) {
      let finalurl0 = myurl.substring(0, i2);
      let lastend = "/preview";
      finalurl = finalurl0 + lastend;

    }
    addEpisode(S_id, episode.eno, finalurl);
    setEpisode({ eno: "", eurl: "" });
    //  props.showMsg("Content is Added Successfuly","success")
  }

  const onChange = (e) => {
    setEpisode({ ...episode, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <center>
        <h1 className='my-2'>Add Web Series Content Season Episode</h1>
      </center>
      <form className='wholeform' >
        <div className="form-group">
          <label htmlFor="name" className='addformlable'>Number of Episode</label>
          <input type="text" onChange={onChange} name="eno" value={episode.eno} className="form-control addform" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Episode number" required />
        </div>
        <div className="form-group">
          <label htmlFor="name" className='addformlable'>Video</label>
          <input type="text" onChange={onChange} name="eurl" value={episode.eurl} className="form-control addform" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Episode Video URL" required />
        </div>
        <button disabled={episode.eno.length < 0 || episode.eurl.length <= 3} type="submit" className="btn btn-success mybtn" onClick={handleclick}>Add Episode</button>
      </form>
    </div>
  )
}

export default AddEpisode