import React from 'react';
import img1 from '../../images/cover.png'
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container container'>
              <div>
                <h6 className='foot-text'>Contact:</h6>
                  <h6 className=''><small className='foot-text'>Email: </small> quickmeal@hotmail.com</h6>
                  <h6 className='text-dark'><small className='foot-text'>Whatsapp: </small>3298654091</h6>
              </div>
              <div>
                  <img className='logo' src={img1} alt="" />
                  <h5 className='title fs-3 text-dark'>Quick Meal</h5>
                  <p className='foot-title'>copyright reserved © 2022</p>
              </div>
              <div>
                    <h6 className='foot-text'>Service area:</h6>
                    <h6 className=''> Palermo central</h6>
                    <h6 className=''>Sicily, Italy</h6>
              </div>
          </div>
  );
};

export default Footer;