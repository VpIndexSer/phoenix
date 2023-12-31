import React from "react";
import { useContext,useState } from 'react'
import contentContext from '../context/contents/contentContext'
import { Link, useLocation } from "react-router-dom";
// import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
export const NavBar = (props) => {
  const [whatfor, setwhatfor] = useState("all")
  const concon = useContext(contentContext);
  const { searchContent } = concon;
  const { mgrid } = props;
  let location = useLocation();
  let navigate = useNavigate();
  let currtoken = localStorage.getItem("token");
  //console.log(currtoken)
  const handleLogOut = async () => {
    await fetch("https://backend-api-five-psi.vercel.app/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ currtoken }),
    });
    localStorage.removeItem("token");
    localStorage.removeItem("play");
    localStorage.removeItem("title");
    localStorage.removeItem("studio");
    localStorage.removeItem("stored_w_id");
    localStorage.removeItem("stored_s_id");
    navigate("/login");
  };
  const searchme = async ()=>{
   
    if(document.getElementById("searchtext").value){
      let finds =document.getElementById("searchtext").value ;
      
      // console.log(finds,whatfor);
      //localy api fetch
      // const response = await fetch("http://localhost:5000/api/contents/fetchcontents", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "auth-token": localStorage.getItem('token')
      //   },
      //   body: JSON.stringify({finds,whatfor}),
        
      // });
      // const json = await response.json();
      // console.log(json);

      //use context api call
      searchContent(finds,whatfor);
    }
   
  };
   const enterme = (event) => {
      if (event.key === 'Enter') {
        searchme();
      }
    };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Phoenix
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="input-group rounded ">
                <span
                  className="nav-link dropdown-toggle bg-dark "
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{border:"1px solid #dee2e6 ",borderRadius:"5px 0px 0px 5px",marginLeft:"5px"}}
                >
                 
                </span>
                  <input  
                  // onKeyPress={enterme}
                  onKeyDown={enterme}
                    type="search"
                    className="form-control "
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    style={{background:"#cfe2ff00",color:"white",marginLeft:"0px",marginRight:"1px",borderRadius:"0px 5px 5px 0px"}}
                    id="searchtext"
                    
                  />
                  <span className="input-group-text border-0" id="search-addon" style={{background:"#cfe2ff00",color:"white",marginLeft:"0px",marginRight:"16px"}}>
                    <i className="fas fa-search" onClick={searchme}></i>
                  </span>
                 
                <div
                  className="dropdown-menu bg-dark setwidth"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <span
                    className="dropdown-item dropcolor "
                 
                    onClick={() => setwhatfor("content")}
                  >
                    By Name
                  </span>
                  <span
                    className="dropdown-item dropcolor"
                    onClick={() => setwhatfor("studio")}
                  >
                    {" "}
                    By Producer
                  </span>
                  <span
                    className="dropdown-item dropcolor"
                    onClick={() => mgrid("all")}
                  >
                    {" "}
                    By All
                  </span>
                </div>
                </div>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/movie" ? "active" : ""
                  }`}
                  to="/movie"
                >
                  movie
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/series" ? "active" : ""
                  }`}
                  to="/series"
                >
                  series
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/user" ? "active" : ""
                  }`}
                  to="/user"
                >
                  user
                </Link>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle bg-dark"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Grids
                </span>
                <div
                  className="dropdown-menu bg-dark"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <span
                    className="dropdown-item dropcolor"
                    onClick={() => mgrid("col2")}
                  >
                    2 Grid
                  </span>
                  <span
                    className="dropdown-item dropcolor"
                    onClick={() => mgrid("col3")}
                  >
                    {" "}
                    3 Grid
                  </span>
                  <span
                    className="dropdown-item dropcolor"
                    onClick={() => mgrid("col4")}
                  >
                    {" "}
                    4 Grid
                  </span>
                </div>
              </li>
              {/* <div style={{paddingInline:'2px'}}onClick={()=>mgrid('col2')}>2 Column</div>
        <div onClick={()=>mgrid('col3')}style={{paddingInline:'2px'}}> 3 Column</div>
        <div style={{paddingInline:'2px'}} onClick={()=>mgrid('col4')}> 4 Column</div> */}
            </ul>

            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            {!localStorage.getItem("token") ? (
              <form className="d-flex ">
                <Link to="/login">
                  <button type="button" className="btn btn-warning mx-1">
                    Log In
                  </button>
                </Link>
              </form>
            ) : (
              <button
                type="button"
                onClick={handleLogOut}
                className="btn btn-warning mx-1"
              >
                Log Out
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
