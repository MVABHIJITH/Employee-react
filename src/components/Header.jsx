import React from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    < >
      <Navbar style={{ backgroundColor: '  rgb(164, 68, 156)', zIndex: '10px' }} data-bs-theme="light" >
        <Container>
          <Navbar.Brand style={{ fontSize: "30px", color: 'white' }}> <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
            <i class="fa-solid fa-users"></i> <b className='ms-2'>Employee</b></Link></Navbar.Brand>

          <div className="midDiv ms-center ">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            /></div>
          <Nav className="msauto ">
            <Nav.Link className='text-white' ><b>Home</b></Nav.Link>
            <Nav.Link className='text-white'><b>Services</b></Nav.Link>
            <Nav.Link className='text-white'><b>About Us</b></Nav.Link>
            <Nav.Link className='text-white'><b>Contact</b></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  )
}

export default Header