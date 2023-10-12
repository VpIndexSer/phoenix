import React from 'react'
export const Post = (props) => {
    const { content} = props;
  return (
    <>
    <div className="col-xs-6 col-sm-3 col-md-2 col-lg-2 postcontainer">
        <img  className="post" src={content.img} alt={content.name} />
    </div>
    </>
  )
}
