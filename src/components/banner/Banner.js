import React from 'react';
import img1 from '../../images/cover.png'
import './Banner.css'

const Banner = () => {
  return (
    <div className='cover container bg-dark pt-4'>
      <div className=' cover-description text-center'>
        <h2 className='text-warning pb-4'>Hi! I’m Sujana, owner of Quick Meal </h2>
         <p className='text-white px-5'>I provide many type of hand-prepared healthy ready meals/food delivery service in the central area of Palermo city.    <br /> <br />
         My services can be ideal for you and your family whice can be save your time and money, can be part of a balanced diet also. 
          <br />
          <br />
        </p>
        <h5 className='text-warning'><small className='text-white'>Contact: </small> jeckychef@hotmail.com</h5>
          <h5 className='text-warning'><small className='text-white'>Whatsapp: </small>3298654091</h5>
      </div>
      <div>
          <img className='img-fluid' src={img1} alt="" />
      </div>
  </div>
  );
};

export default Banner;