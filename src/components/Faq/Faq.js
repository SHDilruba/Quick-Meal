import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
  return (
    <div className='my-5 py-5 text-warning'>
      <h2 className='my-5'>Have you any question about Quick Meal?</h2>
    <Accordion className='text-warning border border-warning' defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Is this a restaurent?</Accordion.Header>
        <Accordion.Body>
            No, Quick Meal is a completely home made quick meal service.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Do you give service out of the city?</Accordion.Header>
        <Accordion.Body>
          No, Quick meal service is just available in the inside of the city.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Where are your service area?</Accordion.Header>
        <Accordion.Body>
          Quick Meal service area is in the central area of Palermo city.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
};

export default Faq;