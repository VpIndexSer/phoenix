import React from 'react'
const EpisodeItem = (props) => {
    const { episode,updateEpisode,deleteYN} = props;
    let url=episode.eurl.slice(0,9);
  return (
    <>   
    <div className="col-md-3 col-lg-3 col-xl-2 col-sm-4 my-3">
    <div className="card contentitem my-2">
            <div className="card-body aspectsize">
                <div className="d-flex justify-content-end oprationline">                      
                <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteYN(episode._id)}}></i>
                <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{updateEpisode(episode)}}></i>
                </div>
                <h5 className="card-title" style={{textAlign:"center"}}><b>Episode no : </b>{episode.eno}</h5>
                <p className="card-text"><b>URL: </b>{url}...</p>
            </div>
    </div>
   
</div>
</>
  )
}

export default EpisodeItem