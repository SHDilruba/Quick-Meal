import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import './HomeServices.css'

const HomeServices = () => {
  const [services, setServices] = useState([]);

  useEffect( () =>{
     fetch('http://localhost:5000/topServices')
     .then(res =>res.json())
     .then(data => setServices(data))
  }, [])

  return (
      <div className='mt-5 pt-3'>
        <h1 className='title mb-5 text-warning'>Available Services</h1>
           <div className='services-container'>
                {
                  services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                }
           </div>
           <div className='all-services container mb-5 pt-5'>
              <Link to={'/services'}> <button className=' btn btn-dark rounded-pill mb-5 py-3'>All Services</button></Link>
           </div>
      </div>
  );
};

export default HomeServices;