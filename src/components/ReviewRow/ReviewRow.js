import React, { useEffect, useState } from 'react';import { Button } from 'react-bootstrap';
import MyModal from '../Modal';
;

const ReviewRow = ({review, handleDelete, handleStatusUpdate}) => {
  const {_id, customer, name, message, email, service,status } = review;
  
   const [reviewService, setReviewService] = useState([]);

   useEffect( () =>{
       fetch(`http://localhost:5000/services/${service}`)
       .then(res => res.json())
       .then(data => setReviewService(data))
   }, [service])

  return (
    <>
    <tr>
      <td> 
        <div onClick={() => handleDelete(_id)} className='review-table'>
        <Button variant='light rounded border-dark ' className='text-danger'>Delete</Button>
        </div>
        </td>
      <td> 
       <div className='review-table'>
       <MyModal 
       reviewService={reviewService}
        review={review} 
        handleStatusUpdate={handleStatusUpdate}       
       ></MyModal>
       </div>
        </td>
        <td>
          <div className='service-detail m-0 pt-0 container'>
              {
                reviewService?.picture &&
                <img src={reviewService.picture} alt="" />
              }
               <div >
                <h6 className='review-name'>{name}</h6>
              </div>
          </div>
        </td>
        <td className='customer-detail'>
          <div className=' customer-row'>
                 <div>{customer}</div>
                 <div><small>{email}</small></div>
              </div>
        </td >
        <td> <div className='customer-row'>{message}</div></td>
   </tr>
  </>
  );
};

export default ReviewRow;