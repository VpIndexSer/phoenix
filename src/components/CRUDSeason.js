import React,{ useContext, useState, useEffect,useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import AddSeason from './AddSeason'
import SeasonItem from './SeasonItem';
import webcontentContext from 'context/webcontents/webcontentContext';
const CRUDSeason = (props) => {
    const concon = useContext(webcontentContext);
    const { season, getSeason, deleteSeason, editSeason } = concon;
    const { w_id, setSID } = props;
    if(w_id)
    {
        localStorage.setItem("stored_w_id",w_id);
    }
    let stored_w_id=localStorage.getItem("stored_w_id");
    let navigate = useNavigate();
    const [seasons, setSeasons] = useState({id: "", esno: "" })
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getSeason(stored_w_id);
        }
        else {
            navigate("/login");
        }
        // eslint-disable-next-line
    }, [])
    
    const updateSeason = (currentcontent) => {
        ref.current.click();
        setSeasons({ id: currentcontent._id, esno: currentcontent.sno })
    }

    const ref = useRef(null)
    const refClose = useRef(null)
    const handleclick = (e) => {
        e.preventDefault();
        editSeason(seasons.id, seasons.esno);
        ref.current.click();
        // props.showMsg("Note is Updated Successfuly","success")
        // getNotes();
    }

    const onChange = (e) => {
        setSeasons({ ...seasons, [e.target.name]: e.target.value });
    }


    //delete confirmation
    const refClick = useRef(null);
    const refCloseYN = useRef(null);
    let delid = null;
    const deleteYN = (deleteid) => {
        delid = deleteid;
        refClick.current.click();
    }
    const handleclick2 = (e) => {
        e.preventDefault();
        deleteSeason(delid);
        refClick.current.click();
    }

    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button ref={refClick} type="button" className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModalCenter">
                {/* Launch demo modal */}
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle" style={{ color: "black" }}>Delete Confrimation </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p style={{ color: "black" }}>Are You Sure to delete the content ???</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" ref={refCloseYN}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleclick2}>Delete Permanently</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* edit content */}
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"  style={{ color: "black" }}>Edit Season</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="container my-3">
                                <div className="form-group">
                                    <label className="my-2" htmlFor="esno"  style={{ color: "black" }}>Season Number</label><br />
                                    <input type="text" className="form-control" id="esno" name="esno" value={seasons.esno} placeholder="Enter Season number" onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={seasons.esno.length <0} className="btn btn-primary" onClick={handleclick}>Update Season</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* // .... */}
            <AddSeason w_id={w_id} />
            {/* <div>season{w_id}</div> */}
            <h1 className="container my-3 text-center">Your Content</h1>
            <div className='row'>
                <div className="container my-4" style={{ textAlign: "center", color: "red" }}><h3>
                    {season.length === 0 && 'No Content to Display'}</h3> </div>
                {season.map((season) => {
                    // for unique key constrain key is used
                    return <SeasonItem season={season} updateSeason={updateSeason} deleteYN={deleteYN} setSID={setSID} />;
                    // <ContentItem key={notes._id} updateContent={updateContent} note={notes} showMsg={props.showMsg}/>;
                })}
            </div>
        </>
    )
}

export default CRUDSeason