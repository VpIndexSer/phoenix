import React from 'react'
import {Link} from "react-router-dom";

const SeasonItem = (props) => {
  const { season,updateSeason,deleteYN,setSID,mygrid } = props;
  return (
    
    <>   
    <div className={`${mygrid} mysm col-md-3 col-lg-3 col-xl-2 col-sm-4 my-3`}>
    <div className="card contentitem my-2">
            <div className="card-body aspectsize" style={{backgroundColor:"#0b0a29"}}>
               
                {/* <h5 className="card-title" style={{textAlign:"center"}}>{content.name?content.name.slice(0,14):""}</h5> */}
                {/* <p className="card-text"><b>Producer: </b>{content.studio?content.studio.slice(0,19):""}</p> */}
                <div className="d-flex justify-content-end oprationline">                      
                <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteYN(season._id)}}></i>
                <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{updateSeason(season)}}></i>
                <Link to="/episode" style={{marginTop:"-5px"}}>
                <i className="fa-solid fa-folder-plus" style={{color:"white"}} onClick={()=>{setSID(season._id)}}></i>
                </Link>
                </div>
                <h5 className="card-title" style={{textAlign:"center"}}>Season : {season.sno}</h5>
            </div>
    </div>
   
</div>
</>

  )
  
 // props.showMsg("Note is Deleted Successfuly","warning")
}

export default SeasonItem