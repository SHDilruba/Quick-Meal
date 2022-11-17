import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Services.css'

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect( () =>{
     fetch('http://localhost:5000/services')
     .then(res =>res.json())
     .then(data => setServices(data))
  }, [])
  
  const navigate = useNavigate(); 
  const handleNavigate = () =>{
    // navigate(`/services/${id}`);
    navigate('/review'); 
}

  return (
      <div>
        {
          services.map(service =>
        
        <div  className='services-container container mt-5 pt-5'>
          <div className='services'>
             <div className='card w-100'>
                <img src={service.picture} alt="" />
                <h3 className='mt-4 px-1'>{service.name}</h3>
                <p>{service.description}</p>
                <button onClick={handleNavigate}  className='btn btn-warning'>Service Detail</button>
              </div>
            </div> 
          </div>
          )}
      </div>
  );
};

export default Services;