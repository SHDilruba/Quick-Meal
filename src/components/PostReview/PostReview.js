import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PostReview = ({handleCustomerReview}) => {
  const { name} = useLoaderData();
  const {user} = useContext(AuthContext);

  return (
    <div className=''>
       <h2 className='service-name'>Add a Review</h2>
        <div className='review-form pt-5 mt-5 container text-center w-100 px-4'>
            <small>Service Name:</small>
            <h3 className='text-warning pb-2 
            pt-1'>{name}</h3>
          <form onSubmit={handleCustomerReview} className=' pb-5 pt-3 '>
            <div className="mb-3 ">
              <input name="customer" type="text" className="form-control text-center" placeholder="Your name" required/>
            </div>
            <div className="mb-5">
              <input name="email" type="text" className="form-control text-center" placeholder="Your email address" defaultValue={user?.email} readOnly/>
            </div>
            <div className="mb-3 rounded">
              <label className="form-label">YOUR FEEDBACK:</label>
              <textarea name="message" type="text" className="form-control py-5" rows="3" required ></textarea>
            </div>
            <input id='review-btn' className='btn btn-warning w-50  mt-3' type="submit" />
          </form>
      </div>
    </div>
  );
};

export default PostReview;