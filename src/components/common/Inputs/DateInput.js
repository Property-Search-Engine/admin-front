import React from 'react';
import {Image } from "react-bootstrap";

function DateInput(props) {
    const {labelText, labelImgSrc, inputName, placeholder} = props;
    return (
        <div className="input-container">
            {labelText && 
                <label htmlFor={inputName}>
                    {labelImgSrc && <Image src={labelImgSrc} className="form-icon-label" />}
                    {labelText}
                </label>
            }
            <input type="date" id={inputName} name={inputName} placeholder={placeholder ? placeholder: ''} />
        </div>
    )
}

export default DateInput