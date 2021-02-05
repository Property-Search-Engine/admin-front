import React, {useState} from 'react'; 
import { Form, Button } from "react-bootstrap";
import TextInput from "../../../common/Inputs/TextInput"; 
import {svgPath} from "../../../../utils/helpers"; 
import ROUTES from "../../../../utils/routes"; 

export default function NewAdminForm() {

    const initialFormData = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: ""
    }; 

    const [formData, setformData] = useState(initialFormData); 

    const {
        firstName,
        lastName,
        phoneNumber,
        email,
        password
    } = formData; 

    const handleChange = (inputName, inputValue) => {
        setformData({
            ...formData, 
            [inputName]: inputValue
        });
    }; 

    const handleSubmit = (e) => {
        e.preventDefault();

        //POST to API
        console.log(formData); 
    };


    return (
            <Form id="settings-form" onSubmit={handleSubmit}>
                
                <div className="d-flex flex-column border p-3">
                    <div className="heading">
                        <h6>Create New Admin</h6>
                    </div>
                    <TextInput
                    inputName="firstName"
                    labelText="First Name"
                    placeholder="First Name"
                    labelImgSrc={svgPath("tagblue")}
                    onChange={handleChange}
                    value={firstName}
                    />
                    <TextInput
                    inputName="lastName"
                    labelText="Last Name"
                    placeholder="Last Name"
                    labelImgSrc={svgPath("tagblue")}
                    onChange={handleChange}
                    value={lastName}
                    />
                    <TextInput
                    inputName="phoneNumber"
                    labelText="Phone Number"
                    placeholder="Phone Number"
                    labelImgSrc={svgPath("tagblue")}
                    onChange={handleChange}
                    value={phoneNumber}
                    />
                    <TextInput
                    inputName="email"
                    labelText="Email"
                    placeholder="Email"
                    labelImgSrc={svgPath("tagblue")}
                    onChange={handleChange}
                    value={email}
                    />
                    <TextInput
                    inputName="password"
                    labelText="Password"
                    placeholder="Password"
                    labelImgSrc={svgPath("tagblue")}
                    onChange={handleChange}
                    value={password}
                    />
                    <div>
                        <Button variant="primary" type="submit" className="mr-3 submitNewAdmin" onclick={handleSubmit}>
                            Submit
                        </Button>
                    </div>
                </div>
            </Form>
    )
}
