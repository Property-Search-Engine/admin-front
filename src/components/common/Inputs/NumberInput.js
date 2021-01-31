import React from 'react';
import {Image } from "react-bootstrap";

function NumberInput(props) {
    const {labelContent, inputName} = props;
    return (
        <div className="input-container-number">
            {labelContent && 
                <label htmlFor={inputName}>
                    {labelContent.type === "image" ? <Image src={labelContent.content} className="form-icon-label number" /> : labelContent.content}
                </label>
            }
            <input type="number" id={inputName} name={inputName} step="1" placeholder="1" />
        </div>
    )
}

export default NumberInput