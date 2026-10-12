import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#">My React App</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="mt-4">
          <h1 className="text-center mb-4">Welcome to My React App</h1>

          <div className="row">
            <div className="col-md-4 mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>Card One</Card.Title>
                  <Card.Text>
                    This is the first card in my React application.
                  </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>Card Two</Card.Title>
                  <Card.Text>
                    This is the second card in my React application.
                  </Card.Text>
                  <Button variant="success">Explore</Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>Card Three</Card.Title>
                  <Card.Text>
                    This is the third card in my React application.
                  </Card.Text>
                  <Button variant="info">Discover</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
