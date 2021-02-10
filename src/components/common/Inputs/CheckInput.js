import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-bootstrap";

import { toCamelCase } from "../../../utils/helpers";

function RadioInputs(props) {
  const {
    labelText,
    labelImgSrc,
    inputsName,
    options,
    values,
    onChange,
  } = props;

  const [checked, setChecked] = useState([]);
  const [firstCall, setFirstCall] = useState(1);

  useEffect(() => {
    if (firstCall !== 1) {
      onChange(inputsName, checked);
    }
    setFirstCall(firstCall + 1);
  }, [checked]);

  const handleChange = (e) =>
    checked.some((item) => item === e.target.value)
      ? setChecked(checked.filter((item) => item !== e.target.value))
      : setChecked([...checked, e.target.value]);

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
              defaultChecked={
                values.some((value) => value === toCamelCase(o)) ? true : false
              }
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
