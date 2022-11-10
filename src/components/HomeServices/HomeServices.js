import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomeServices.css'

  // const navigate = useNavigate(); 
  const handleNavigate = () =>{
    // navigate(`/services/${id}`);
}

const HomeServices = () => {
  return (
    <div >
    <div  className='services-container container mt-5 pt-5'>
      <div className='services'>
         <div className='card w-100'>
            <img src="" alt="" />
            <h3 className='mt-4 px-1'>Name</h3>
            <p>description</p>
            <button onClick={handleNavigate}  className='btn btn-warning'>Service Detail</button>
          </div>
        </div> 
      </div>
          <div className='my-5'>
             <Link to={'/services'}> <button className='btn btn-warning w-50'>All Services</button></Link>
       </div>  
  </div>
);
};

export default HomeServices;