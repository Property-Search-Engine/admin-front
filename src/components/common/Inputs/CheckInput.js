import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-bootstrap";

import { toCamelCase } from "../../../utils/helpers";

function CheckInputs(props) {
  const {
    labelText,
    labelImgSrc,
    inputsName,
    options,
    values,
    onChange,
  } = props;

  const handleChange = (e) =>
    values.some((item) => item === e.target.value)
      ? onChange(
          inputsName,
          values.filter((item) => item !== e.target.value)
        )
      : onChange(inputsName, [...values, e.target.value]);

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

export default CheckInputs;
