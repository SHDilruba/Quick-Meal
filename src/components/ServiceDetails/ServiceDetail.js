import React from 'react';
import './ServiceDetail.css';

const ServiceDetail = () => {
  return (
    <div className='service-detail container mt-5'>
           <div className="title d-flex justify-content-center">
              <h1> <small className='text-dark'>service detail:</small> name</h1>
         </div>
            <img className='img-fluid w-75 mt-5' src="" alt="" /> <br /><br />
            <p className=' p-4 mx-5 fs-5'>description</p>
   </div>
  );
};

export default ServiceDetail;