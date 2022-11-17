import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const {name, description, price, picture} = useLoaderData();

  return (
    <div className='service-detail container py-5'>
        <div className="card my-5">
          <div className="row g-0">
            <div className=" col-md-6">
              <img src={picture} className=" img-fluid h-100 rounded-start" alt="..."/>
            </div >
            <div className="col col-md-6 py-3">
              <div class="card-body ">
                <h1 className="card-title">{name}</h1>
                <p className="card-text py-2 pe-3 ">{description}</p>
                <h3 className="card-text"><small className="text-warning ">Price: ${price}</small></h3>
              </div>
            </div>
          </div>
        </div>
   </div>
  );
};

export default ServiceDetail;