import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Sidebar from "../common/Sidebar/Sidebar";
import ModalForm from "../common/ModalForm/ModalForm";

export default function Dashboard(props) {
  const [isModalFormOpen, setIsModalFormOpen] = useState(false);

  function handleModalToggle() {
    if (isModalFormOpen === true) {
      setIsModalFormOpen(false);
    } else {
      setIsModalFormOpen(true);
    }
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Sidebar active="dashboard" />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            <Button variant="primary" onClick={handleModalToggle}>
              {isModalFormOpen ? "open" : "close"}
            </Button>
            <ModalForm
              isModalFormOpen={isModalFormOpen}
              handleModalToggle={handleModalToggle}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
