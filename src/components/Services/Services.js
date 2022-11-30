import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import LoadSpinner from '../../Spinner/LoadSpinner';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
  const {loading} = useContext(AuthContext);
  const services = useLoaderData();
  useTitle('Services');

  return (
   <div className='services-title container'>
      <h1 className='text-warning mt-5 py-3'>All available Services of Quick Meal</h1>
      <div className='services-container container mt-5'>
          { loading ? 
            <LoadSpinner></LoadSpinner> 
            : 
          services.map(service => 
          <ServiceCard service={service} key={service._id}></ServiceCard>)
          }
      </div>
   </div>
  );
};

export default Services;