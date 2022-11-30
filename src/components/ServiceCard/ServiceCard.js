import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Button } from 'react-bootstrap';

const ServiceCard = ({service}) => {
  const {_id, name, description, price, picture} = service;

  return (
    <div className='container'>
        <div id='card' className='service card w-100'>
             <PhotoProvider>
              <PhotoView src={picture}>
                 <img className='img-fluid' src={picture} alt="" />
              </PhotoView>
        </PhotoProvider>
            <h3 className='pt-4'>{name}</h3>
               <p className='para'>{description.slice(0,100)}.....</p>
              <h4 className='text-warning'>Price: ${price}</h4>
            <Link to={`/serviceDetail/${_id}`}>
                 <Button id="service-btn" className=' w-75 rounded-pill mt-3' variant='light' size='md'>Service Detail</Button>
            </Link>
          </div>
    </div>
  );
};

export default ServiceCard;