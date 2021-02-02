import React from 'react'

function Thead(props) { // props:{ headerText: "text", otroCosa: "loquesea" }
    const{headerText} = props;
    return (
        <th>
            <p>{headerText}</p>
        </th>
    )
}

export default Thead
