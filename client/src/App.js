import React from "react";
import { Navbar, Nav, Container, ToastContainer, Row, Col, Card } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Product from "./check/Product";
import Order from "./check/Order";
import Logout from "./check/Logout";
import View from "./check/View"
import Homec from "./check/Homec"
import Header from  "./check/Header"


function App() {
  return (
    
    <BrowserRouter>
    
    <div class="main">
    </div>
      <div>
        <>
        <Card>
        <div><Header/></div>
        </Card>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="logo">FROZENCUP |</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  HOME
                </Nav.Link>
                <Nav.Link as={Link} to="/add">
                  ADDPRODUCT
                </Nav.Link>
                <Nav.Link as={Link} to="/view">
                  VIEWPRODUCT
                </Nav.Link>
                <Nav.Link as={Link} to="/order">
                  ORDERS
                </Nav.Link>
                
                
              </Nav>
              <Nav.Link href="/logout">LOGOUT</Nav.Link>
            </Container>
            
          </Navbar>
        </>
        <div>
        <ToastContainer/>
        <Container>
        <Row>
        <Col md={12}>
        <Routes>
            <Route path="/" element={<Homec />} />
            <Route path="/add" element={<Product />} />
            <Route path="/order" element={<Order />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/view" element={<View />} />
          </Routes>
        </Col>
        </Row>
        
        </Container>
        
        </div>
        <div>
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
