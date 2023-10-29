
import React from 'react';
import {Link,useLocation} from "react-router-dom";
// import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
export const NavBar = () => {
    let location = useLocation();
    let navigate = useNavigate();
    let currtoken=localStorage.getItem('token');
    //console.log(currtoken)
    const handleLogOut=async()=>{
     await fetch("https://backend-api-five-psi.vercel.app/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        }, 
        body: JSON.stringify({currtoken}),
      });
      localStorage.removeItem('token')
      navigate("/login");
    }
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Phoenix</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/movie"?"active":""}`} to="/movie">movie</Link>                   
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/series"?"active":""}`} to="/series">series</Link>                   
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/user"?"active":""}`} to="/user">user</Link>                   
              </li>
            </ul>
            
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
           {!localStorage.getItem('token')?<form className="d-flex " ><Link to="/login"><button type="button" className="btn btn-warning mx-1">Log In</button></Link>
            </form>:<button type="button" onClick={handleLogOut} className="btn btn-warning mx-1">Log Out</button>}
          </div>
        </div>
      </nav>
      </>
    
    )
}



