import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import AllReviews from '../AllReviews/AllReviews';
import PostReview from '../PostReview/PostReview';
import './ServiceDetail.css';
import toast from 'react-hot-toast';

const ServiceDetail = () => {
  let service = useLoaderData();
  const {_id, name, description, price, picture} = service;

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
      message,
      photo: user.photoURL
    }

    fetch('https://quick-meal2-server.vercel.app/postReview', {
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
         toast.success('review added successfully')
       
         form.reset();
      }
    })
    .catch(er => console.error(er));
}

  return (
    <div className='service-detail-card container col-lg-8'>
        <div id='detail-card' className="card">
          <div className="row g-0">
            <div className="col-md-6">
              <img src={picture} className="img-fluid rounded-start" alt="..."/>
            </div >
            <div className="col col-md-6">
              <div className="card-body">
                <h2 className="service-name card-title">{name}</h2>
                <p className="card-text">{description}</p>
                <h3 className="card-text"><small className="text-warning ">Price: ${price}</small></h3>
              </div>
            </div>
          </div>
      </div>
       <div id='review-section'>
       <div className='all-reviews'>
           <AllReviews
                 service={service} key={_id}
           ></AllReviews>
      </div>
       <div className='service-name'>
            { user ? 
                  <PostReview 
                    handleCustomerReview={handleCustomerReview}
                    key={_id}
                ></PostReview>
                : 
                <>          
              <h4 className='warning-text'>Please  <Link to='/login'> <button className='btn btn-warning mx-2'>Log in</button></Link>  to add a review</h4>
             </>
            }
       </div>
     </div>
   </div>
  );
};

export default ServiceDetail;