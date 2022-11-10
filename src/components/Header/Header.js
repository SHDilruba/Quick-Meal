import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import img1 from '../../images/cover.png'

const Header = () => {

  return (
    <div className='container bg-warning py-1 rounded'>
        <div>
      <Navbar className='cover-area' collapseOnSelect expand="lg" variant="light">
        <Container>
          <div>
          <img className='logo' src={img1} alt="" />
          <Navbar.Brand className='title fs-4'>Quick Meal</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <NavLink className="menu" to="/">Home</NavLink>
            <NavLink className="menu" to="/courses">Courses</NavLink>
            <NavLink className="menu" to="/blog">Blog</NavLink>
            <NavLink className="menu" to="/faq">FAQ</NavLink>
            </Nav>
            <Nav>
            <NavLink className="login fs-4" to='/login'>Login
             </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     </div>
    </div>
  );
};

export default Header;