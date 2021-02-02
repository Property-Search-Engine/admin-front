import React from 'react';
import {Image } from "react-bootstrap";

function NumberInput(props) {
    const {labelContent, inputName,onChange, value} = props;
    const handleChange = (e) => onChange(inputName, e.target.value);
    return (
        <div className="input-container-number">
            {labelContent && 
                <label htmlFor={inputName}>
                    {labelContent.type === "image" ? <Image src={labelContent.content} className="form-icon-label number" /> : labelContent.content}
                </label>
            }
            <input type="number" id={inputName} name={inputName} onChange={handleChange}step="1" placeholder="1" value={value} />
        </div>
    )
}

export default NumberInput