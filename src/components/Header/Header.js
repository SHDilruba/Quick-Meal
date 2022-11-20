import React, { useContext } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';
import img1 from '../../images/cover.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
  const { user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
       logOut()
       .then(() =>{})
       .catch(err => console.log(err));
  }

  return (
    <div className='header-container container '>
        <div  className=''>
      <Navbar className='cover-area' collapseOnSelect expand="lg" variant="light">
        <Container>
          <div>
          <img className='logo' src={img1} alt="" />
          <Navbar.Brand className='title fs-5 px-2 text-light bg-dark rounded'>Quick Meal</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <NavLink className="menu" to="/">Home</NavLink>
            <NavLink className="menu" to="/services">Services</NavLink>
            <NavLink className="menu" to="/blog">Blog</NavLink>
            </Nav>
            <Nav>
            <div className="">
              {user?.uid ? 
               <>
                <NavLink className=" menu" to='/reviews' >My Reviews</NavLink>
                <NavLink to='/addService' ><button className='right-btn rounded'>Add Service</button></NavLink>
                 <button className='right-btn rounded ms-3' onClick={handleLogOut} >Log Out</button>
               </>
              : 
              <>
                <Link to='/Login'><button className='right-btn rounded px-3 fs-5'>Login</button></Link> 
              </>
              }
             </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     </div>
    </div>
  );
};

export default Header;