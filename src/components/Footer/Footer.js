import React from 'react';
import img1 from '../../images/cover.png'
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container container bg-dark'>
              <div>
                <p className='text-warning'>Contact:</p>
                  <h6 className='text-light'><small className='foot-text'>Email: </small> quickmeal@hotmail.com</h6>
                  <h6 className='text-light'><small className='foot-text'>Whatsapp: </small>3298654091</h6>
              </div>
              <div>
                  <img className='logo' src={img1} alt="" />
                  <h5 className='title fs-3 text-warning'>Quick Meal</h5>
                  <p className='text-light'>copyright reserved © 2022</p>
              </div>
              <div>
                    <p className='text-warning'>Service area:</p>
                    <h6 className='text-light'> Palermo central</h6>
                    <h6 className='text-light'>Sicily, Italy</h6>
              </div>
          </div>
  );
};

export default Footer;