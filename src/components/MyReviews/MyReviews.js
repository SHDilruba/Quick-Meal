import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewRow from '../ReviewRow/ReviewRow';
import { Table } from 'react-bootstrap';
import './MyReview.css';

const MyReviews = () => {
  const {user} = useContext(AuthContext);
   const [reviews, setReviews] = useState([]);

   useEffect(() =>{
         fetch(`http://localhost:5000/reviews?email=${user.email}`)
         .then(res => res.json())
         .then(data =>setReviews(data))
   }, [user?.email]);

   const handleDelete = id =>{
    const proceed = window.confirm('Are you sure to cancel this review?')
    if(proceed){
      fetch(`http://localhost:5000/reviews/${id}`,{
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.deletedCount > 0){
         alert('deleted successfully')
         const remaining = reviews.filter(review => review._id !== id);
         setReviews(remaining);
      }
    })
  }
}

  return (
    <div className='my-review-container container'>
        <div className='mb-5 text-warning '> { reviews.length > 0 ? <h1>You have {reviews.length} {reviews.length > 1 ? 'Reviews': 'Review'}</h1>
        :
         <h1>You don't have any review</h1>
         }</div>
        <Table id='review-container' striped bordered hover size="md">
          <thead className='bg-dark text-warning'>
            <tr>
              <th>Delete</th>
              <th>Service Detail</th>
              <th>Name & Email</th>
              <th>Your Review</th>
            </tr>
          </thead>
           <tbody>
                 {
                    reviews.map(review => <ReviewRow
                          key={review._id}
                          review={review}
                          handleDelete={handleDelete}
                    ></ReviewRow>)
                  }
          </tbody>
          </Table>
      </div>
    );
};

export default MyReviews;