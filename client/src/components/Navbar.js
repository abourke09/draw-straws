import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class myNavbar extends Component {
  render() {
    return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>Draw Straws</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/games/new">New</Nav.Link>
              <Nav.Link href="/players">All Players</Nav.Link>
              <Nav.Link href="/games">All Games</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  }
}

export default myNavbar;
