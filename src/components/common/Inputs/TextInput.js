import React from 'react';
import {Image } from "react-bootstrap";

function TextInput(props) {
    const {labelText, labelImgSrc, inputName, placeholder} = props;
    return (
        <div className="textInputContainer">
            {labelText && 
                <label htmlFor={inputName}>
                    {labelImgSrc && <Image src={labelImgSrc} className="form-icon-label" />}
                    {labelText}
                </label>
            }
            <input type="text" id={inputName} name={inputName} placeholder={placeholder ? placeholder: ''} />
        </div>
    )
}

export default TextInput
