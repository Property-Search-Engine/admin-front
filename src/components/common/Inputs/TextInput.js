import React from "react";
import { Image } from "react-bootstrap";

function TextInput(props) {
  const {
    labelText,
    labelImgSrc,
    inputName,
    placeholder,
    onChange,
    value,
  } = props;
  const handleChange = (e) => onChange(inputName, e.target.value);
  return (
    <div className="input-container">
      {labelText && (
        <label htmlFor={inputName}>
          {labelImgSrc && (
            <Image src={labelImgSrc} className="form-icon-label" />
          )}
          {labelText}
        </label>
      )}
      <input
        type="text"
        id={inputName}
        name={inputName}
        onChange={handleChange}
        placeholder={placeholder ? placeholder : ""}
        value={value}
      />
    </div>
  );
}

export default TextInput;
