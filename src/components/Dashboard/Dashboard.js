import React from "react";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import Sidebar from "../common/Sidebar/Sidebar";
import Header from "../common/Header/Header"; 

export default function Dashboard (props) {
    return (
        <main className="d-flex flex mainContainer">
       
              
                         
                      <Sidebar active="dashboard"/>
    
                        <div>
                            <Header/>
                        </div>
            
          
        </main>
        );
  };