import React from 'react'
import AddSeason from './AddSeason'

const CRUDSeason = (props) => {
    return (
        <>
            <AddSeason/>
            <div>season{props.w_id}</div>

        </>
    )
}

export default CRUDSeason