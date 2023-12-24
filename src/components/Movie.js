import React from 'react'
import { useContext } from 'react'
import contentContext from '../context/contents/contentContext'

export default function Movie() {
  const concon = useContext(contentContext);
  const { searchContent } = concon;
  const searchme = async ()=>{
    console.log("hii")
    // if(document.getElementById("searchtext").value){
      let finds =document.getElementById("searchtext").value ;
      console.log(finds)
      let whatfor="all";
      searchContent(finds,whatfor);
      // console.log(finds,whatfor);      
    // }
  };
  return (
    <div>
      <h1>movie</h1>
      <div className="input-group rounded">
                  <input
                    type="search"
                    className="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    style={{background:"#cfe2ff00",color:"white",marginLeft:"16px",marginRight:"1px"}}
                    id="searchtext"
                  />
                  <span className="input-group-text border-0" id="search-addon" style={{background:"#cfe2ff00",color:"white",marginLeft:"1px",marginRight:"16px"}}>
                    <i className="fas fa-search" onClick={searchme}></i>
                  </span>
                </div>
    </div>
  )
}
