import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import webcontentContext from 'context/webcontents/webcontentContext';
import { useNavigate } from 'react-router-dom';

const AddWebContents = () => {
    let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            //   getNotes();
        }
        else {
            navigate("/login");
        }
        // eslint-disable-next-line
    }, [])


    const concon = useContext(webcontentContext);
    const { addContent } = concon;
    const [content, setContent] = useState({ name: "", img: "",studio: "",contenttype:"movie"});
    const handleclick = (e) => {
        // debugger
        e.preventDefault();
        let myimg=content.img;
        let img1=myimg.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?id=");
        //... click copy link method but not optimize for all link
        // let finalimg=img1.replace("/view?usp=drive_link","");
        //using indexof and substring function
        let i=img1.indexOf("/view");
        let finalimg=img1.substring(0,i);
    
        addContent(content.name,finalimg,content.studio,content.contenttype);
        setContent({ name: "", img: "", studio: "" });
        //  props.showMsg("Content is Added Successfuly","success")
    }

    const onChange = (e) => {
        setContent({ ...content, [e.target.name]: e.target.value });
    }
    return (
        <>
            <div>
                <center>
                    <h1 className='my-2'>Add Web Series Content</h1>
                </center>
                <form className='wholeform' >
                    <div className="form-group">
                        <label htmlFor="name" className='addformlable'>Name of Series</label>
                        <input type="text" onChange={onChange} name="name" value={content.name} className="form-control addform" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Series name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="img" className='addformlable'>Image</label>
                        <input type="text" onChange={onChange} name="img" value={content.img} className="form-control addform" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Image Url" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="studio" className='addformlable'>Studio</label>
                        <input type="text" onChange={onChange} name="studio" value={content.studio} className="form-control addform" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Producer Name" required />
                    </div>

                    <button disabled={content.name.length < 1 ||content.img.length < 5} type="submit" className="btn btn-success mybtn" onClick={handleclick}>Submit</button>
                </form>
            </div>
        </>
    )
}


export default AddWebContents