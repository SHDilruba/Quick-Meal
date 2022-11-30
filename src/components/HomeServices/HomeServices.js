import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import LoadSpinner from '../../Spinner/LoadSpinner';
import ServiceCard from '../ServiceCard/ServiceCard';
import './HomeServices.css'

const HomeServices = () => {
  const [services, setServices] = useState([]);
  const {loading} = useContext(AuthContext);

  useEffect( () =>{
     fetch('https://quick-meal2-server.vercel.app/topServices')
     .then(res =>res.json())
     .then(data => setServices(data))
  }, [])

  return (
      <div className='mt-5 pt-3'>
        <h1 className='title mb-5 pb-2 text-warning'>Available Services</h1>
           <div className='services-container'>
                { loading ? 
                <LoadSpinner></LoadSpinner>
                 :
                  services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                }
           </div>
           <div className='all-services container  bg-warning rounded-pill mb-5 '>
              <Link to={'/services'}> <Button variant="dark" className='rounded-pill border-dark mb-5 py-3 w-50'>SEE ALL</Button></Link>
           </div>
      </div>
  );
};

export default HomeServices;