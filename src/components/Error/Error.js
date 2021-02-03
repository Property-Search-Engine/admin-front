import React, { useState } from 'react'; 
import Routes from '../../utils/routes'; 
import { Redirect } from "react-router-dom";



export default function Error() {

    const [goToDashBoard, setGoToDashboard] = useState(false)
    
    setTimeout(() => {
        setGoToDashboard(true)
     }, 5000)

    return (
        <div className="d-flex flex-column justify-items-center align-items-center errorContainer">

        {!goToDashBoard ? 
            (<><div>
                <img src="/assets/images/404_error_ufo.png"/>
            </div>
            <div>
                <h1>Oops something went wrong...</h1>
            </div>
            <div>
                <a href={Routes.DASHBOARD}>Click here to go back to dashboard, or you´d be direct after 5 seconds</a>
            </div></>) : <Redirect to={Routes.DASHBOARD}/>}
        </div>
    )
}
