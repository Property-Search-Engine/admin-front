import React, { useState } from "react";
import { Image } from "react-bootstrap";

import {toCamelCase} from "../../../utils/helpers";

function RadioInputs(props) {
  const { labelText, labelImgSrc, inputsName, options, values, onChange } = props;
  const [checked, setChecked] = useState([]);
  const handleChange = (e) => {
    if(checked.some(item => item === e.target.value)){
      setChecked(checked.filter(item => item !== e.target.value));
    } else {
      setChecked([...checked, e.target.value]);
    }
    onChange(inputsName, checked);
  }
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
      <div className="inputsContainer" onChange={handleChange}>
        {options.map((o, i) => (
          <div key={`check-${inputsName}-${i}`} className="checkContainer">
            <input
              type="checkbox"
              name={inputsName}
              value={toCamelCase(o)}
              checked={values.some(value => value === toCamelCase(o)) ? true : false}
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
