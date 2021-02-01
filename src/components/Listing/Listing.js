import React from 'react'
import Header from '../common/Header/Header'
import Sidebar from '../common/Sidebar/Sidebar'
import ListContainer from './ListingContainer/ListContainer'

function Listing() {
    return (
        <main className="d-flex flex">
        <Sidebar active="listing"/>
        <div className="mainContainer">
            <Header/>
            <ListContainer /> 
        </div>
    </main>
    )
}

export default Listing
