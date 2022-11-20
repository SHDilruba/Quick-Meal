import React, { useContext, useEffect, useState } from 'react';
import { Card, Container, Image, Navbar, Table } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import '../ServiceDetails/ServiceDetail.css'

const AllReviews = () => {
  const {user} = useContext(AuthContext);
  console.log(user)
  const [allReviews, setAllReviews] = useState([]);

  useEffect( () =>{
     fetch('http://localhost:5000/reviews')
     .then(res =>res.json())
     .then(data => setAllReviews(data))
  }, []);

  return (
    <div className='w-100 '>
        <h2 className='review-length text-center'>{allReviews.length} Customers Reviews:</h2>
        <div className=' review-div  mt-5'>
        {
          allReviews.map(review =>(
            <div id='#review-card' className='card mb-4 ms-0'>
                  <Navbar id="review-title" bg="" variant="light">
                      <Container>
                        <Navbar.Brand>
                          <img id="user-img"
                            alt=""
                            src={user.photoURL}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            />{' '}
                          {review.customer}
                        </Navbar.Brand>
                      </Container>
                    </Navbar>
                     <div className='text-start px-3'><p>{review.message}</p></div>
               </div>
              ))
            }
        </div>
      </div>
  );
};

export default AllReviews;