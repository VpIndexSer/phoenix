import React from 'react'
import {Link} from "react-router-dom";
export const Post = (props) => {
    const { content,playit} = props;
    let mygrid=props.mygrid;
    const uplay =()=>{
     // console.log("200");
      playit(content.url,content.name,content.studio,content.img);
    }
  return (
    <>

    <div className={`${mygrid} col-sm-3 col-md-2 col-lg-2 postcontainer`}>
      <Link to="/playit">
        <img  className="post" src={content.img} alt={content.name} onClick={uplay} />
        </Link>
    </div>
    
    </>
  )
}
