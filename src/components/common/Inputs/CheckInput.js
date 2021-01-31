import React from "react";
import { Image } from "react-bootstrap";

function RadioInputs(props) {
  const { labelText, labelImgSrc, inputsName, options } = props;
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
          <div key={`check-${inputsName}-${i}`} className="checkContainer">
            <input
              type="checkbox"
              name={inputsName}
              value={o.toLowerCase()}
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
