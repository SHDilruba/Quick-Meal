import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css'

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect( () =>{
     fetch('http://localhost:5000/services')
     .then(res =>res.json())
     .then(data => setServices(data))
  }, [])

  return (
   <div className=' mt-5 pt-3'>
      <h1>Available Services of Quick Meal</h1>
      <div className='services-container container mt-5'>
        {
          services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
          }
      </div>
   </div>
  );
};

export default Services;