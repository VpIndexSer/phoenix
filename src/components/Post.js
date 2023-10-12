import React from 'react'
export const Post = (props) => {
    const { content} = props;
  return (
    <div>
        <img src={content.img} alt={content.name} />
    </div>
  )
}
