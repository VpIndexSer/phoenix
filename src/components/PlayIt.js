import React from 'react'

const PlayIt = (props) => {
  console.log("playit")
  return (
    
    props.play&&<div>
    <iframe className="my-video"src={`${props.play}`}  allow="autoplay" allowfullscreen="allowfullscreen"></iframe>
    <p><h2>{props.title}</h2></p>
    <p><h5>by : {props.studio}</h5></p>

      {/* <video controls className="my-video" playsinline="" webkit-playsinline="" preload="auto">
<source src={`${props.play}`} title="360p" type="video/mp4"/>
</video> */}
      </div>
    
  )
}

export default PlayIt