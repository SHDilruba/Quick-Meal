import React, { useEffect, useState } from 'react';
import './ReviewRow.css';

const ReviewRow = ({review, handleDelete}) => {
  const {_id, customer, name, message, email, service } = review;

   const [reviewService, setReviewService] = useState([]);

   useEffect( () =>{
       fetch(`http://localhost:5000/services/${service}`)
       .then(res => res.json())
       .then(data => setReviewService(data))
   }, [service])

  return (
    <tr>
      <td> <div onClick={() => handleDelete(_id)} className='review-table mt-5'><button>X</button></div></td>
        <td>
          <div className='service-detail '>
              {
                reviewService?.picture &&
                <img src={reviewService.picture} alt="" />
              }
               <div >
               <small className='text-warning'>Service: </small>
                <h6>{name}</h6>
              </div>
          </div>
        </td>
        <td>
          <div className='table-part py-5'>
                 <div>{customer}</div>
                 <div className='email'>{email}</div>
              </div>
        </td >
        <td> <div className='py-5'>{message}</div></td>
   </tr>
  );
};

export default ReviewRow;