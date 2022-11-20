import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect( () =>{
     fetch('http://localhost:5000/services')
     .then(res =>res.json())
     .then(data => setServices(data))
  }, [])

  return (
   <div className='services-title container'>
      <h1 className='text-warning mt-5 py-3'>Available all Services of Quick Meal</h1>
      <div className='services-container container mt-5'>
        {
          services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
          }
      </div>
   </div>
  );
};

export default Services;