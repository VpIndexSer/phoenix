import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
import contentContext from '../context/contents/contentContext'
import { useNavigate } from 'react-router-dom';
import AddContents from './AddContents';
import ContentItem from './ContentItem';

export default function Contents(props) {
  const{mygrid}=props;
  //fetching all notes with help of usecontext
  let navigate = useNavigate();
  const concon = useContext(contentContext);
  const { content, getContent, editcontent, deleteContent } = concon;
  //   console.log(notes)

  const [contents, setContents] = useState({ id: "", ename: "", eimg: "", eurl: "", estudio: "", econtenttype: "" })
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getContent();
    }
    else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [])

  const updateContent = (currentcontent) => {
    ref.current.click();
    setContents({ id: currentcontent._id, ename: currentcontent.name, eimg: currentcontent.img, eurl: currentcontent.url, estudio: currentcontent.studio, econtenttype: "movie" })
  }

  const ref = useRef(null)
  const refClose = useRef(null)
  const handleclick = (e) => {
    e.preventDefault();
    // console.log("updating note",note)
    let myimg = contents.eimg;
    let img1 = myimg.replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?id=");
    // let finalimg=img1.replace("/view?usp=drive_link","");

    let i = -1;
    i = img1.indexOf("/view");
    let finalimg = myimg;
    if (i !== -1) {
      finalimg = img1.substring(0, i);
    }


    let myurl = contents.eurl;
    //let url1=myurl.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?id=");
    //let finalurl=url1.replace("/view?usp=drive_link","");
    let i2 = -1;
    i2 = myurl.indexOf("/view");
    let finalurl = myurl;
    if (i2 !== -1) {
      let finalurl0 = myurl.substring(0, i2);
      let lastend = "/preview";
      finalurl = finalurl0 + lastend;

    }

    editcontent(contents.id, contents.ename, finalimg, finalurl, contents.estudio, "movie");
    ref.current.click();
    // props.showMsg("Note is Updated Successfuly","success")
    // getNotes();
  }

  const onChange = (e) => {
    setContents({ ...contents, [e.target.name]: e.target.value });
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
    deleteContent(delid);
    refClick.current.click();
  }
  return (<>
   
    <AddContents />
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
    {/* edit from */}
    <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch demo modal
    </button>


    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Edit Contents</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form className="container my-3">
              <div className="form-group">
                <label className="my-2" htmlFor="ename">Name</label><br />
                <input type="text" className="form-control" id="ename" name="ename" value={contents.ename} placeholder="Enter Name" onChange={onChange} />

              </div>
              <div className="form-group">
                <label className="my-2" htmlFor="eimg">Image</label><br />
                <input type="text" className="form-control" id="eimg" name="eimg" value={contents.eimg} placeholder="Image Url" onChange={onChange} />
              </div>
              <div className="form-group">
                <label className="my-2" htmlFor="eurl">Video </label><br />
                <input type="text" className="form-control" id="eurl" name="eurl" value={contents.eurl} placeholder="Video Url" onChange={onChange} />
              </div>
              <div className="form-group">
                <label className="my-2" htmlFor="estudio">Studio </label><br />
                <input type="text" className="form-control" id="eurl" name="estudio" value={contents.estudio} placeholder="Studio" onChange={onChange} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">Close</button>
            <button type="button" disabled={contents.ename.length <= 1 || contents.eimg.length < 5 || contents.eurl.length < 5 || contents.estudio.length <= 1} className="btn btn-primary" onClick={handleclick}>Update Content</button>
          </div>
        </div>
      </div>
    </div>


    <h1 className="container my-3 text-center">Your Content</h1>
    <div className='row'>
      <div className="container my-4" style={{ textAlign: "center", color: "red" }}><h3>
        {content.length === 0 && 'No Content to Display'}</h3> </div>
      {content.map((content) => {
        // for unique key constrain key is used

        return <ContentItem key={content._id} mygrid={mygrid} updateContent={updateContent} deleteYN={deleteYN} content={content} />;
        // <ContentItem key={notes._id} updateContent={updateContent} note={notes} showMsg={props.showMsg}/>;
      }).reverse()}
    </div>
  </>)
}
