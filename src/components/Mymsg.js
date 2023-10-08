import React from 'react'

function Mymsg(prop) {
    const capitalize=(word)=>{
        if(word==="danger"){
            word="error";
        }
        const lower =word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        prop.msg && <div>
            <div className={`alert alert-${prop.msg.type} alert-dismissible fade show`} role="alert" style={{marginTop:"1px",zIndex:"100" }}>
                <strong>{capitalize(prop.msg.type)}<t> </t>:</strong><t> </t>{prop.msg.msg}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
        </div>
    )
}

export default Mymsg