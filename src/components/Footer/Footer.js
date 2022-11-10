import React from 'react';
// import logo from '../../images/logo.svg';
import img1 from '../../images/cover.png'
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container container bg-dark'>
          <div className='footer container pt-5'>
              <div>
                  <img className='logo' src={img1} alt="" />
                  <h5 className='title fs-3 text-warning'>Quick Meal</h5>
                  <p className='text-white'>copyright reserved © 2022</p>
              </div>
              <div>
                <p className='text-white'>Contact:</p>
                  <h6 className='text-warning'><small className='text-white'>Email: </small> jeckychef@hotmail.com</h6>
                  <h6 className='text-warning'><small className='text-white'>Whatsapp: </small>3298654091</h6>
              </div>
              <div>
                    <p className='text-white'>Service area:</p>
                    <h6 className='text-warning'> Palermo central</h6>
                    <h6 className='text-warning'>Sicily, Italy</h6>
              </div>
          </div>
    </div>
  );
};

export default Footer;