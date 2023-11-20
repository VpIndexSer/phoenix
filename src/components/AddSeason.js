import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import webcontentContext from 'context/webcontents/webcontentContext';
import { useNavigate } from 'react-router-dom';
const AddSeason = (props) => {
  const { w_id } = props;
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
  const { addSeason } = concon;
  const [season, setSeason] = useState({ sno: "" });
  const handleclick = (e) => {
    // debugger
    e.preventDefault();
    addSeason(w_id, season.sno);
    setSeason({ sno: "" });
    //  props.showMsg("Content is Added Successfuly","success")
  }

  const onChange = (e) => {
    setSeason({ ...season, [e.target.name]: e.target.value });
  }
  return (
    <>
      <div>
        <center>
          <h1 className='my-2'>Add Web Series Content</h1>
        </center>
        <form className='wholeform' >
          <div className="form-group">
            <label htmlFor="name" className='addformlable'>Number of Season</label>
            <input type="text" onChange={onChange} name="sno" value={season.sno} className="form-control addform" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Season number" required />
          </div>
          <button disabled={season.sno.length < 0} type="submit" className="btn btn-success mybtn" onClick={handleclick}>Add Season</button>
        </form>
      </div>
    </>
  )
}

export default AddSeason