import React from 'react'
import {Link} from "react-router-dom";
// import { useContext } from 'react'
// import webcontentContext from 'context/webcontents/webcontentContext';
const WebContentItem = (props) => {
    // const concon=useContext(webcontentContext);
    // const{deleteContent}=concon;
    const { content,updateContent,deleteYN,setWID,mygrid } = props;
    
    return (
        <div className={`${mygrid} mysm col-md-3 col-lg-3 col-xl-2 col-sm-4 my-3`}>
            <div className="card contentitem my-2">
            
            <img className="card-img-top poster" src={content.img}  alt="img" />
                    <div className="card-body aspectsize">
                       
                        {/* <h5 className="card-title" style={{textAlign:"center"}}>{content.name?content.name.slice(0,14):""}</h5> */}
                        {/* <p className="card-text"><b>Producer: </b>{content.studio?content.studio.slice(0,19):""}</p> */}
                        <div className="d-flex justify-content-end oprationline">                      
                        <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteYN(content._id)}}></i>
                        <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{updateContent(content)}}></i>
                        <Link to="/seasons" style={{marginTop:"-5px"}}>
                        <i className="fa-solid fa-folder-plus" style={{color:"white"}} onClick={()=>{setWID(content._id)}}></i>
                        </Link>
                        </div>
                        <h5 className="card-title" style={{textAlign:"center"}}>{content.name}</h5>
                        <p className="card-text"><b>Producer: </b>{content.studio}</p>
                        
                    </div>
            </div>
           
        </div>
    )
}
 // props.showMsg("Note is Deleted Successfuly","warning")

export default WebContentItem