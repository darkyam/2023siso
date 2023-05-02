import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import fact_logo from '../img/factorial_shadow.png';
import React from 'react';
import twinkle from '../img/mini_twinkle.png'
import './css/nav_style.css'
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

function Navibar() {
  return (
    
        <Navbar bg="transparent" expand="lg" sticky='top' className='navbar-dark'>
      <Container>
        <Navbar.Brand href="#home">
          <div className='nav_logo'>
            <Link to={"/"}>
            <img
              src={fact_logo}
              width="100"
              height="80"
              className="d-inline-block align-top"
            />
            </Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className='nav_item'>
              <Nav.Link as={Link} to={'/about'}><img src={twinkle}/>About</Nav.Link>
              <Nav.Link as ={Link} to={'/entry'} ><img src={twinkle} />Entry</Nav.Link>
              <Nav.Link as = {Link} to={'/credit'}><img src={twinkle} />Credit</Nav.Link>
              <Nav.Link as = {Link} to={'/archieve'}><img src={twinkle} />Archieve</Nav.Link>
              <Nav.Link as = {Link} to={'/exhibition'}><img src={twinkle} />Exhibition</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
   
  );
}

export default Navibar;