import React, { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Benefits.css';

const Benefits = () => {
 const [benefits, setBenefits] = useState([]);

 useEffect( () =>{
  fetch('http://localhost:5000/benefits')
  .then(res => res.json())
  .then(data => setBenefits(data))
}, []);

  return (
    <div className='benefits-container'>
      <h2 className='text-warning'>Benefits of Home made food from Quick Meal</h2>
      <div className='benefits-card w-100'>
      {
        benefits.map(benefit =>(
           <>
            <Card className='benefit border-dark'>
               <Card.Header className='benefit-header pt-3 text-dark border-dark bg-light'><h5>{benefit.title}</h5></Card.Header>
                  <Card.Body className='benefit-body'>
                      <Card.Text>
                        {benefit.description}
                      </Card.Text>
                  </Card.Body>
              </Card>
           </>
          ))
         }
      </div>
    </div>
  );
};

export default Benefits;