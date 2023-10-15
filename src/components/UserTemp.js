import React from 'react'
import { useContext,useEffect } from 'react'
import contentContext from '../context/contents/contentContext'
import {useNavigate} from 'react-router-dom';
import { Post } from './Post';
const UserTemp = (props) => {
    let navigate = useNavigate();
    const concon = useContext(contentContext);
    const { content,getContent } = concon;
    const{playit,mygrid,mgrid}=props;
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
        <div className="container-fluid "> 
        <div style={{display:'flex'}}>
        <div style={{paddingInline:'2px'}}onClick={()=>mgrid('col2')}>2 Column</div>
        <div onClick={()=>mgrid('col3')}style={{paddingInline:'2px'}}> 3 Column</div>
        <div style={{paddingInline:'2px'}} onClick={()=>mgrid('col4')}> 4 Column</div>
        </div>

            <div className='row'>
                <div className="container my-4" style={{ textAlign: "center", color: "red" }}><h3>
                    {content.length === 0 && 'No Content to Display'}</h3> </div>
                {content.map((content) => {
                    return <Post mygrid={mygrid} key={content._id} playit={playit} content={content}/>;
                })}
            </div>
            </div>
        </>
    )
}

export default UserTemp