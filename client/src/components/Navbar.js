import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'

const MyNavbar = () => (
  <div>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Draw Straws</Navbar.Brand>
      <NavLink exact to="/"> Home | </NavLink>
      <NavLink exact to="/new"> New | </NavLink>
      <NavLink exact to="/players"> All Players | </NavLink>
      <NavLink exact to="/games"> All Games </NavLink>
    </Navbar>
  </div>
)

export default MyNavbar;
