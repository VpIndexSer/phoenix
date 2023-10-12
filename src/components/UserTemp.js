import React from 'react'
import { useContext,useEffect } from 'react'
import contentContext from '../context/contents/contentContext'
import {useNavigate} from 'react-router-dom';
import { Post } from './Post';
const UserTemp = () => {
    let navigate = useNavigate();
    const concon = useContext(contentContext);
    const { content,getContent } = concon;
    useEffect(() => {
        if (localStorage.getItem('token')) {
          getContent();
        }
        else{
          navigate("/login");
        }
        // eslint-disable-next-line
      }, [])
    
    return (
        <>
        <div className="container"> 
            <div className='row'>
                <div className="container my-4" style={{ textAlign: "center", color: "red" }}><h3>
                    {content.length === 0 && 'No Content to Display'}</h3> </div>
                {content.map((content) => {
                       
                    return <Post content={content}/>;
                })}
            </div>
            </div>
        </>
    )
}

export default UserTemp