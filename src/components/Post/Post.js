import React from 'react';
import { Card } from 'react-bootstrap';

const Post = ({post}) => {
  console.log(post)
  const {question, answer} = post;

  return (
       <div className=" container">
            <Card id='blog-card' border="dark">
               <Card.Header className='card-header py-5 bg-dark text-warning py-4'>{question}</Card.Header>
                  <Card.Body className='card-text'>
                      <Card.Text>
                        {answer}
                      </Card.Text>
                  </Card.Body>
           </Card>
       </div>
     );
  };

export default Post;