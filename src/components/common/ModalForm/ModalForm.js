import React from "react";
import { Form, Button, Image } from "react-bootstrap";
import Modal from '../Modal/Modal';
import TextInput from "../Inputs/TextInput";
import RadioInputs from "../Inputs/RadioInputs";
import CheckInput from "../Inputs/CheckInput";
import DateInput from "../Inputs/DateInput";
import NumberInput from "../Inputs/NumberInput";

import {svgPath} from "../../../utils/helpers";
import {fadeOut} from "../../../utils/helpers";

function ModalForm(props) {
  const { isModalFormOpen, handleModalToggle, formData } = props;
  
  const handleSubmit = e => {
    e.preventDefault();
    
    //Fetch to endpoint 
   
    close();
    e.target.reset();
  }
  function close(){
    const fadeOutTime = 300;
    const fadeOutElement = document.querySelector('.modalOverlay');
    fadeOut(fadeOutElement, fadeOutTime);
    setTimeout(() => handleModalToggle() , fadeOutTime);
  }
  return (
      <Modal isOpen={isModalFormOpen} handleModalToggle={handleModalToggle}>
        <Form id="property-form"  onSubmit={handleSubmit}>
          <Button variant="secondary" onClick={close} className="close-modal-button">X</Button>
          <h2 className="modal-form-title">Add a new property to the system </h2>
          <div className="d-flex">
          <div className="modal-form-column">
            <TextInput
              inputName="street"
              labelText="Street"
              placeholder="Property Street"
              labelImgSrc={svgPath('tagblue')}
              value={formData.street || ''}
            />
            <TextInput
              inputName="number"
              labelText="Number"
              placeholder="Property Number"
              labelImgSrc={svgPath('tagblue')}
              value={formData.number || ''}
            />
            <TextInput
              inputName="city"
              labelText="City"
              placeholder="Property City"
              labelImgSrc={svgPath('tagblue')}
              value={formData.city || ''}
            />
            <TextInput
              inputName="state"
              labelText="State"
              placeholder="Property State"
              labelImgSrc={svgPath('tagblue')}
              value={formData.state || ''}
            />
            <TextInput
              inputName="country"
              labelText="Country"
              placeholder="Property Country"
              labelImgSrc={svgPath('tagblue')}
              value={formData.country || ''}
            />
            <RadioInputs 
              options={['Available', 'Sold']}
              inputsName="status"
              labelText="Status"
              labelImgSrc={svgPath('tagblue')}
              value={formData.status || ''}
            />
            <RadioInputs
              options={['Apartment', 'Duplex', 'House', 'Penthouse']}
              inputsName="type"
              labelText="Type of property"
              labelImgSrc={svgPath('tagblue')}
              value={formData.type || ''}
            />
            <RadioInputs
              options={['New House', 'Good condition', 'Needs renovation']}
              inputsName="condition"
              labelText="Condition of Property"
              labelImgSrc={svgPath('tagblue')}
              value={formData.condition || ''}
            />
            <Form.Group controlId="equipment" size="sm">
              <Form.Label>
                <Image src={svgPath('tagblue')} className="form-icon-label" />
                Furnished
              </Form.Label>
              <Form.Control name="equipment" as="select" custom>
                <option value="full" selected={formData.equipment === 'full' ? true : false}>Fully furnished</option>
                <option value="partial" selected={formData.equipment === 'partial' ? true : false}>Partial furnished</option>
                <option value="none" selected={formData.equipment === 'none' ? true : false}>Not furnished</option>
              </Form.Control>
            </Form.Group>
          </div>
          <div className="modal-form-column">
            <TextInput
              inputName="price"
              labelText="Price"
              placeholder="Property Price"
              labelImgSrc={svgPath('tagblue')}
              value={formData.price || ''}
            />
            <p className="m-0"><Image src={svgPath('tagblue')} className="form-icon-label mb-2" /> characteristics</p>
            <div className="input-container-number">
              <NumberInput 
                inputName="bedroom"
                labelContent={{type: 'image', content: svgPath('bed') }}
                value={formData.bedroom || ''}
              />
               <NumberInput 
                inputName="bath"
                labelContent={{type: 'image', content: svgPath('bath') }}
                value={formData.bath || ''}
              />
              <NumberInput 
                inputName="m2"
                labelContent={{type: 'image', content: svgPath('m2') }}
                value={formData.m2 || ''}
              />
            </div>
            <DateInput
              inputName="date"
              labelText="Publication date"
              placeholder={new Date().toLocaleString('en-GB', { timeZone: 'UTC' })}
              labelImgSrc={svgPath('tagblue')}
              value={formData.date || ''}
            />
            <CheckInput 
             options={['Pets Allowed', 'Lift', 'Garden', 'Air conditioning', 'Pool', 'Terrace']}
             labelText="More Filters"
             inputsName="filters"
             labelImgSrc={svgPath('filter')}
             value={formData.filters || ''}
            />
            <Form.Group controlId="description">
              <Form.Label> <Image src={svgPath('tagblue')} className="form-icon-label" />Description</Form.Label>
              <Form.Control as="textarea" rows={10} placeholder="Add here the description...  " value={formData.description || ''}/>
            </Form.Group>
            <div className="d-flex">
            <Button variant="primary" type="submit" className="mr-3">
              Submit
            </Button>
            <Button variant="secondary" onClick={close}>
              Cancel
            </Button>
            </div>
            
          </div>
          </div>
         
        </Form>
        </Modal>
  );
}

export default ModalForm;
