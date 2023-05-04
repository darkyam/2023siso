import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import fact_logo from '../img/factorial_shadow.png';
import {React, useState} from 'react';
import twinkle from '../img/mini_twinkle.png'
import './css/nav_style.css'
import { Link, BrowserRouter, Router } from 'react-router-dom';


function Navibar() {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => setExpanded(false);

  return (
    
        <Navbar bg="transparent" expand="lg" sticky='top' expanded={expanded} onToggle={() => setExpanded(!expanded)} className='navbar-dark'>
      <Container>
        <Navbar.Brand>
          <div className='nav_logo'>
            <Link to={"/"}>
            <img
              src={fact_logo}
              width="200"
              height="55"
              className="d-inline-block align-top"
            />
            </Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className='nav_item'>
              <Nav.Link as={Link} to={'/about'} onClick={closeMenu}><img src={twinkle}/>About</Nav.Link>
              <Nav.Link as ={Link} to={'/entry'} onClick={closeMenu}><img src={twinkle} />Entry</Nav.Link>
              <Nav.Link as = {Link} to={'/credit'} onClick={closeMenu}><img src={twinkle} />Credit</Nav.Link>
              <Nav.Link as = {Link} to={'/archieve'} onClick={closeMenu}><img src={twinkle} />Archieve</Nav.Link>
              <Nav.Link as = {Link} to={'/exhibition'} onClick={closeMenu}><img src={twinkle} />Exhibition</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Navibar;