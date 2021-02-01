import React from 'react'; 
import { Navbar, FormControl, Form, Button, Image } from "react-bootstrap"; 

export default function Header() {
    return (
        <Navbar className="mainNav d-flex align-items-end">
            <Form className="d-flex flex-row fullWidth">
                <FormControl type="text" placeholder="Search" className="halfWidth" />
                <Button><Image src="/assets/icons/magnifying-glass.svg"/></Button>
            </Form>
        </Navbar>
    )
}
