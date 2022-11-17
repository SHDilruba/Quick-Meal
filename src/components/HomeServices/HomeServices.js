import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeServiceCard from '../HomeServiceCard/HomeServiceCard';
import './HomeServices.css'

const HomeServices = () => {
  const [services, setServices] = useState([]);

  useEffect( () =>{
     fetch('http://localhost:5000/services')
     .then(res =>res.json())
     .then(data => setServices(data))
  }, [])

  return (
      <div className='mt-5 pt-5'>
        <div className='services-container container'>
        {
          services.map(service => <HomeServiceCard service={service} key={service._id}></HomeServiceCard>)
        }
          </div>
          <div className=' all-services container mb-5 pt-5'>
              <Link to={'/services'}> <button className=' btn btn-dark mb-5 py-3'>All Services</button></Link>
          </div>
      </div>
  );
};

export default HomeServices;