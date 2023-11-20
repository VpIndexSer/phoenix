import webcontentContext from './webcontentContext';
// import { useState,useEffect } from 'react'
import { useState } from 'react'
// import { useState } from 'react'
const WebContentState = (props) => {
  // const host = "http://localhost:5000";
  const host = "https://backend-api-five-psi.vercel.app";
  const contentinitial = []
  const [content, setContent] = useState(contentinitial)
  const seasoninitial = [];
  const [season, setSeason] = useState(seasoninitial);
  const episodeinitial = [];
  const [episode, setEpisode] = useState(episodeinitial);

  const getContent = async () => {
    //api call
    const response = await fetch(`${host}/api/webcontent/fetchallcontents`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });
    const json = await response.json();
    //  console.log(json)
    setContent(json);
  }

  //add note
  const addContent = async (name, img, studio, contenttype) => {

    //api call

    const response = await fetch(`${host}/api/webcontent/addcontent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ name, img, studio, contenttype }),
    });
    const contents = await response.json();

    setContent(content.concat(contents));

  }

  //delete note
  const deleteContent = async (id) => {

    //api call

    const response = await fetch(`${host}/api/webcontent/deletecontent/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },

    });
    const json = await response.json();
    console.log(json)

    const newContents = content.filter((content) => { return content._id !== id });
    setContent(newContents);
  }


  //update note
  const editcontent = async (id, name, img, studio, contenttype) => {
    //localy put the value
    // contenttype="movie";
    //api call

    const response = await fetch(`${host}/api/webcontent/updatecontent/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ name, img, studio, contenttype }),

    });

    const json = response.json();
    console.log(json)
    // localy check for value
    // console.log(contenttype)


    //localy update data but server side has same date so no error will be occurs
    let newContent = JSON.parse(JSON.stringify(content))
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

  //  add season
  const addSeason = async (wid, sno) => {
    //api call

    const response = await fetch(`${host}/api/webcontent/addcontent/addseason/${wid}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ sno }),
    });
    //user side localy updation
    const seasons = await response.json();

    setSeason(season.concat(seasons));
  }

  // all seasons
  const getSeason = async (w_id) => {
    //api call
    const response = await fetch(`${host}/api/webcontent/fetchallcontents/fetchallseason/${w_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });
    const json = await response.json();
    //  console.log(json)
    setSeason(json);
  }

  // edit Season
  const editSeason = async (sid, sno) => {
    //localy put the value
    // contenttype="movie";
    //api call
    const response = await fetch(`${host}/api/webcontent/updatecontent/updateseason/${sid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ sno }),

    });

    const json = response.json();
    console.log(json)
    // localy check for value
    // console.log(contenttype)


    //localy update data but server side has same date so no error will be occurs
    let newSeason = JSON.parse(JSON.stringify(season))
    //logic edite in client
    for (let index = 0; index < newSeason.length; index++) {
      const element = newSeason[index];
      if (element._id === sid) {
        newSeason[index].sno = sno;
        break;
      }
    }
    setSeason(newSeason);
  }

  //delete note
  const deleteSeason = async (sid) => {

    //api call

    const response = await fetch(`${host}/api/webcontent/deletecontent/deleteseason/${sid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },

    });
    const json = await response.json();
    console.log(json)
    //frontend side localy delete
    const newSeason = season.filter((season) => { return season._id !== sid });
    setSeason(newSeason);
  }

  //  add episode
  const addEpisode = async (sid, eno, eurl) => {
    //api call

    const response = await fetch(`${host}/api/webcontent/addcontent/addseason/addepisode/${sid}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ eno, eurl }),
    });
    //user side localy updation
    const episodes = await response.json();

    setEpisode(episode.concat(episodes));
  }


  // all seasons
  const getEpisode = async (s_id) => {
    //api call
    const response = await fetch(`${host}/api/webcontent/fetchallcontents/fetchallseason/fetchallepisode/${s_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });
    const json = await response.json();
    //  console.log(json)
    setEpisode(json);
  }

  //delete Episode
  const deleteEpisode = async (eid) => {

    //api call

    const response = await fetch(`${host}/api/webcontent/deletecontent/deleteseason/deleteepisode/${eid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },

    });
    const json = await response.json();
    console.log(json)
    //frontend side localy delete
    const newEpisode = episode.filter((episode) => { return episode._id !== eid });
    setEpisode(newEpisode);
  }

  // edit Episode
  const editEpisode = async (eid, eno,eurl) => {
    //localy put the value
    // contenttype="movie";
    //api call
    const response = await fetch(`${host}/api/webcontent/updatecontent/updateseason/updateepisode/${eid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ eno,eurl }),

    });

    const json = response.json();
    console.log(json)
    // localy check for value
    // console.log(contenttype)


    //localy update data but server side has same date so no error will be occurs
    let newEpisode = JSON.parse(JSON.stringify(episode))
    //logic edite in client
    for (let index = 0; index < newEpisode.length; index++) {
      const element = newEpisode[index];
      if (element._id === eid) {
        newEpisode[index].eno = eno;
        newEpisode[index].eurl = eurl;
        break;
      }
    }
    setEpisode(newEpisode);
  }
  return (
    <webcontentContext.Provider value={{ content, season, episode,editEpisode,deleteEpisode, getEpisode, addEpisode, addContent, deleteContent, editcontent, getContent, addSeason, getSeason, editSeason, deleteSeason }}>
      {/* <noteContext.Provider value={{state,update}}> */}
      {props.children}
    </webcontentContext.Provider>
  )
}

export default WebContentState