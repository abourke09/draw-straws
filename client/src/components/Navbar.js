import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

const MyNavbar = () => (
  <div>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Draw Straws</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink exact to="/">Home</NavLink>
          <NavLink exact to="/new">New</NavLink>
          <NavLink exact to="/players">All Players</NavLink>
          <NavLink exact to="/games">All Games</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default MyNavbar;
