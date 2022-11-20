import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import AllReviews from '../AllReviews/AllReviews';
import PostReview from '../PostReview/PostReview';
import './ServiceDetail.css';

const ServiceDetail = () => {
  let service = useLoaderData();
  const {_id, name, description, price, picture} = useLoaderData();

  const {user} = useContext(AuthContext);

  const handleCustomerReview = event =>{
    event.preventDefault()
    const form = event.target;
    const customer = form.customer.value;
    const email =  user?.email || 'unregistered';
    const message = form.message.value;

    const review = {
      service: _id,
      name,
      customer: customer,
      email: email,
      message
    }

    fetch('http://localhost:5000/reviews', {
        method: 'POST',
        headers: {
           'content-type': 'application/json'
        },
        body: JSON.stringify(review)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.acknowledged){
         alert('review added successfully')
         form.reset();
      }
    })
    .catch(er => console.error(er));

}

  return (
    <div className='service-detail container col-lg-8'>
        <div id='detail-card' className="card mt-5 rounded-end">
          <div className="row g-0">
            <div className="col-md-6">
              <img src={picture} className="img-fluid rounded-start" alt="..."/>
            </div >
            <div className="col col-md-6">
              <div class="card-body">
                <h1 className="service-name card-title">{name}</h1>
                <p className="card-text">{description}</p>
                <h3 className="card-text"><small className="text-warning ">Price: ${price}</small></h3>
              </div>
            </div>
          </div>
      </div>
       <div id='review-section'>
       <div className='all-reviews'>
           <AllReviews
                  service={service}
            ></AllReviews>
      </div>
       <div>
          <PostReview 
               handleCustomerReview={handleCustomerReview}
          ></PostReview>
       </div>
       </div>
   </div>
  );
};

export default ServiceDetail;