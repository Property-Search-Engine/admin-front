import React from 'react'
import { Form, Image } from 'react-bootstrap';

function SelectInput(props) {
    const { labelText, labelImgSrc, inputName, options,onChange, value } = props;
    const handleChange = (e) => onChange(inputName, e.target.value);
    return (
        <Form.Group controlId={inputName} size="sm">
              {labelText && 
                <Form.Label>
                    {labelImgSrc && <Image src={labelImgSrc} className="form-icon-label" />}
                    {labelText}
                </Form.Label>
              }
              <Form.Control
                name={inputName}
                onChange={handleChange}
                value={value}
                as="select"
                custom
              >
                  {Object.keys(options).map(opt => 
                    <option value={opt} selected={value === opt ? true : false}>
                        {options[opt]}
                    </option>
                  )}
              </Form.Control>
            </Form.Group>
    )
}

export default SelectInput;