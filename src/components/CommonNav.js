import React from 'react';
import { Alert, Container, Navbar } from 'react-bootstrap';

export default function CommonNav() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
