import React, { useState } from 'react'

const PlayIt = (props) => {
  console.log("playit")
  if(props.play){
    localStorage.setItem("play",props.play);
    localStorage.setItem("title",props.title);
    localStorage.setItem("studio",props.studio);
    localStorage.setItem("img",props.img);
  }
  let play=localStorage.getItem("play");
  let title=localStorage.getItem("title");
  let studio=localStorage.getItem("studio");
  let img=localStorage.getItem("img");
  const [hide, setHide] = useState(null);
  const [ishide, setIshide] = useState(1);
  const show=()=>{
    setHide(1);
    setIshide(null);
  }
  return (
    
    play&&<div>
      {
    ishide&&<div className='myimgagecontainer'><img className="my-img" src={`${img}`} alt="content imgs" onClick={show}/></div>  }
    {
    hide&&<iframe className="my-video"src={`${play}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
    }
    <img src="https://vscode.dev/github/VpIndexSer/phoenix/blob/master/src/components/p.gif" alt="img" />
    <p><h2>{title}</h2></p>
    <p><h5>by : {studio}</h5></p>

      {/* <video controls className="my-video" playsinline="" webkit-playsinline="" preload="auto">
<source src={`${props.play}`} title="360p" type="video/mp4"/>
</video> */}
      </div>
    
  )
}

export default PlayIt