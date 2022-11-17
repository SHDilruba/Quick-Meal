import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeServiceCard = ({service}) => {
  const {_id, name, description, price, picture} = service;

  const navigate = useNavigate(); 
  const handleNavigate = () =>{
    navigate(`/review/${_id}`); 
  }

  return (
    <div>
        <div id='card' className='service  card w-100'>
            <img className='img-fluid' src={picture} alt="" />
                <h3 className='pt-4 pb-3'>{name}</h3>
                   <p className='px-4'>{description}</p>
                     <h4 className='text-warning'>Price: ${price}</h4>
                  <button onClick={handleNavigate}  className=' btn btn-dark w-100 py-3'>Service Detail</button>
          </div>
    </div>
  );
};

export default HomeServiceCard;