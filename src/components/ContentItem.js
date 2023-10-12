import React from 'react'
import { useContext } from 'react'
import contentContext from '../context/contents/contentContext'
export default function ContentItem(props) {
    const concon=useContext(contentContext);
    const{deleteContent}=concon;
    const { content,updateContent } = props;
    
    return (
        <div className="col-md-3 col-lg-3 col-xl-3 col-sm-4 col-xs-6 my-3">
            <div className="card contentitem my-2">
            
            <img className="card-img-top poster" src={content.img}  alt="img" />
                    <div className="card-body aspectsize">
                       
                        {/* <h5 className="card-title" style={{textAlign:"center"}}>{content.name?content.name.slice(0,14):""}</h5> */}
                        {/* <p className="card-text"><b>Producer: </b>{content.studio?content.studio.slice(0,19):""}</p> */}
                        <div className="d-flex justify-content-end oprationline">                      
                        <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteContent(content._id)}}></i>
                        <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{updateContent(content)}}></i>
                        </div>
                        <h5 className="card-title" style={{textAlign:"center"}}>{content.name}</h5>
                        <p className="card-text"><b>Producer: </b>{content.studio}</p>
                        
                    </div>
            </div>
           
        </div>
    )
}
 // props.showMsg("Note is Deleted Successfuly","warning")
