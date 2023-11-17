import webcontentContext from './webcontentContext';
// import { useState,useEffect } from 'react'
import { useState } from 'react'
// import { useState } from 'react'
const WebContentState = (props) => {
   // const host = "http://localhost:5000";
   const host = "https://backend-api-five-psi.vercel.app";
   const contentinitial = []
   const [content, setContent] = useState(contentinitial)
   const getContent = async () => {
     //api call
     const response = await fetch(`${host}/api/webcontent/fetchallcontents`, {
       method: "GET",
       headers: {
         "Content-Type": "application/json",
         "auth-token": localStorage.getItem('token')
       },
     });
     const json=await response.json();
   //  console.log(json)
     setContent(json);
   }
 
   //add note
   const addContent = async (name, img,studio,contenttype) => {
 
     //api call
 
     const response = await fetch(`${host}/api/webcontent/addcontent`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         "auth-token": localStorage.getItem('token')
       },
       body: JSON.stringify({ name, img,studio,contenttype}),
     });
     const contents=await response.json();
     
     setContent(content.concat(contents));
    
   }
 
   //delete note
   const deleteContent = async(id) => {
     
     //api call
 
     const response = await fetch(`${host}/api/webcontent/deletecontent/${id}`, {
       method: "DELETE",
       headers: {
         "Content-Type": "application/json",
         "auth-token": localStorage.getItem('token')
       },
      
     });
    const json=await response.json();
    console.log(json)
 
     const newContents = content.filter((content) => { return content._id !== id });
     setContent(newContents);
   }
 
 
   //update note
   const editcontent = async (id,name, img,studio,contenttype) => {
     //localy put the value
     // contenttype="movie";
     //api call
 
     const response = await fetch(`${host}/api/webcontent/updatecontent/${id}`, {
       method: "PUT",
       headers: {
         "Content-Type": "application/json",
         "auth-token": localStorage.getItem('token')
       },
       body: JSON.stringify({ name, img,studio,contenttype}),
       
     });
    
     const json = response.json();
     console.log(json)
     // localy check for value
     // console.log(contenttype)
 
 
     //localy update data but server side has same date so no error will be occurs
     let newContent=JSON.parse(JSON.stringify(content))
     //logic edite in client
     for (let index = 0; index < newContent.length; index++) {
       const element = newContent[index];
       if (element._id === id) {
         newContent[index].name = name;
         newContent[index].img = img;
         newContent[index].studio = studio;
         break;
       }
     }
     setContent(newContent);
 
 
   }
 
   return (
     <webcontentContext.Provider value={{ content, addContent, deleteContent, editcontent ,getContent}}>
       {/* <noteContext.Provider value={{state,update}}> */}
       {props.children}
     </webcontentContext.Provider>
   )
 }

export default WebContentState