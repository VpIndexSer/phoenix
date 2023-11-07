import React from 'react'

const PlayIt = (props) => {
  console.log("playit")
  if(props.play){
    localStorage.setItem("play",props.play);
    localStorage.setItem("title",props.title);
    localStorage.setItem("studio",props.studio);
  }
  let play=localStorage.getItem("play");
  let title=localStorage.getItem("title");
  let studio=localStorage.getItem("studio");
  return (
    
    play&&<div>
    <iframe className="my-video"src={`${play}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
    <p><h2>{title}</h2></p>
    <p><h5>by : {studio}</h5></p>

      {/* <video controls className="my-video" playsinline="" webkit-playsinline="" preload="auto">
<source src={`${props.play}`} title="360p" type="video/mp4"/>
</video> */}
      </div>
    
  )
}

export default PlayIt