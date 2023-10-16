import React from 'react'

const PlayIt = (props) => {
  console.log("playit")
  return (
    
    props.play&&<div>
    <iframe className="my-video"src={`${props.play}`} width="640" height="480" allow="autoplay" allowfullscreen="allowfullscreen"></iframe>
   
      {/* <video controls className="my-video" playsinline="" webkit-playsinline="" preload="auto">
<source src={`${props.play}`} title="360p" type="video/mp4"/>
</video> */}
      </div>
    
  )
}

export default PlayIt