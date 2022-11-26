import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewRow from '../ReviewRow/ReviewRow';
import './MyReview.css';

const MyReviews = () => {
  useTitle('MyReviews');

  const {user, logOut} = useContext(AuthContext);
   const [reviews, setReviews] = useState([]);

   useEffect(() =>{
         fetch(`https://quick-meal2-server.vercel.app/reviews?email=${user.email}`, {
              headers: {
                  authorization: `Bearer ${localStorage.getItem('quickMealToken')}`
              }
         })
         .then(res => {
          if(res.status === 401 || res.status === 403){
              logOut()
          }
          return res.json()
         })
         .then(data => {
          setReviews(data)
         })
   }, [user?.email]);

   const handleDelete = id =>{
    const proceed = window.confirm('Are you sure to cancel this review?')
    if(proceed){
      fetch(`https://quick-meal2-server.vercel.app/reviews/${id}`,{
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

const handleStatusUpdate = id =>{
  fetch(`https://quick-meal2-server.vercel.app/reviews/${id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({status: 'Approved'})
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if(data.modifiedCount > 0) {
      const remaining =  reviews.filter(rev => rev._id !== id)
      const approving = reviews.find(rev => rev._id === id);
      approving.status = 'Approved'

      const newReview = [ approving, ...remaining];
      setReviews(newReview);
    }
  })
}

  return (
    <div className='my-review-container'>
        <div className='mb-5 text-warning '>
          { reviews.length < 1 ? 
              <>
              <h1 className='no-reviews text-center'>No reviews were added</h1>
              </>
              :
              <>
              <h1 className='mb-5'>You have {reviews.length} {reviews.length > 1 ? 'Reviews': 'Review'}</h1>
              <Table  id='review-container'className='container' striped bordered hover size="md">
                <thead className='bg-dark text-warning'>
                  <tr>
                    <th>Delete</th>
                    <th>Edit</th>
                    <th>Service Detail</th>
                    <th className='customer-detail'>Customer</th>
                    <th>Review</th>
                  </tr>
                </thead>
                <tbody>
                      {
                          reviews.map(review => <ReviewRow
                          key={review._id}
                          review={review}
                          handleDelete={handleDelete}
                          handleStatusUpdate={handleStatusUpdate}
                    ></ReviewRow>)
                      }
              </tbody>
              </Table>
              </>
              }
          </div>
        </div>
      );
    };

export default MyReviews;