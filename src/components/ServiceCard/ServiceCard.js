import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({service}) => {
  const {_id, name, description, price, picture} = service;

  return (
    <div>
        <div id='card' className='service card w-100'>
            <PhotoProvider>
                  <PhotoView src={picture}>
                     <img className='img-fluid' src={picture} alt="" />
                  </PhotoView>
            </PhotoProvider>
                <h3 className='pt-4'>{name}</h3>
                   <p className='para'>{description}</p>
                  <h4 className='text-warning'>Price: ${price}</h4>
                <Link to={`/serviceDetail/${_id}`}>
                     <button className=' btn btn-dark w-100 py-3'>Service Detail</button>
                </Link>
          </div>
    </div>
  );
};

export default ServiceCard;