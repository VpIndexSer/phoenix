import { useState } from "react"
import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function Login(props) {
    const [credentials, setcredentials] = useState({email:"",password:""})
    let navigate = useNavigate();
    const handelSubmit=async(e)=>{
        e.preventDefault();  
        
        const response = await fetch("https://backend-api-five-psi.vercel.app/api/auth/login", {
        // const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({email:credentials.email,password:credentials.password}),
          });
          const json=await response.json();
          // console.log(json)
          if(json.success)
          {
            //redirect
            localStorage.setItem('token',json.authtoken);
            props.showMsg("logged in Successfuly ","success")
            navigate("/");
          }
          else{
            props.showMsg("Invalid detailes","danger")
          }
    }
    
    const onChange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value});
}
  return (
    <div className="my-5">
            <div className="mb-5">
                <center><h1>Log In to continue on Phoenix</h1></center>
            </div>
            <form onSubmit={handelSubmit} className='wholeform'> 
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label addformlable">Email address</label>
                    <input type="email" className="form-control addform" id="email"  value={credentials.email}onChange={onChange}name="email" aria-describedby="emailHelp"/>
                        <div id="email" className="addform-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label addformlable">Password</label>
                    <input type="password" className="form-control addform" value={credentials.password}onChange={onChange} name='password' id="password"/>
                </div>
                <div style={{ textAlign: "right", color: "white" }}>
                <button type="submit" className="btn btn-success mybtn">Log In</button>
                </div>
            </form>
        </div>
  )
}
