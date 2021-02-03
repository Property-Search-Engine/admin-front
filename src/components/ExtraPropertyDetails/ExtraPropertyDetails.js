import React from 'react'; 
import { camelCaseStringToCapitalizeString } from '../../utils/helpers'; 

export default function ExtraPropertyDetails(props) {
    
    const { property } = props;

    return (
        <div className="d-flex flex-column justify-content-center align-items-center extraDetailsContainer">
           <div className="d-flex flex-row">
                <p>Home Type: </p>
                <p>{camelCaseStringToCapitalizeString(property.homeType)}</p>
           </div> 
           <div className="d-flex flex-row">
                <p>Equipment: </p>
                <p>{camelCaseStringToCapitalizeString(property.equipment)}</p>
           </div>
           <div className="d-flex flex-row">
                <p>Condition: </p>
                <p>{camelCaseStringToCapitalizeString(property.condition)}</p>
           </div>
           <div className="d-flex flex-row">
                <p>Description: </p>
                <p>{property.description}</p>
           </div>
           <div className="d-flex flex-row">
                <p>Options: </p>
                {property.filters.map(filter => <p>{camelCaseStringToCapitalizeString(filter)}</p>)}
           </div>
        </div>
    )
}
