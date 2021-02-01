import React from "react";
import { Image } from "react-bootstrap";

function RadioInputs(props) {
  const { labelText, labelImgSrc, inputsName, options, value } = props;
  return (
    <div>
      {labelText && (
        <label htmlFor={inputsName}>
          {labelImgSrc && (
            <Image src={labelImgSrc} className="form-icon-label" />
          )}
          {labelText}
        </label>
      )}
      <div className="inputsContainer">
        {options.map((o, i) => (
          <div key={`radio-${inputsName}-${i}`} className="radioContainer">
            <input
              type="radio"
              name={inputsName}
              value={o.toLowerCase()}
              defaultChecked={value ?  (value === o.toLowerCase() ? true : false) : ( i === 0 ? true : false)}
            />
            <span className="checkmark"></span>
            <span>&nbsp; {o}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RadioInputs;
