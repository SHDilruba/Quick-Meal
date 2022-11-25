import React from 'react';
import { Card } from 'react-bootstrap';

const Post = ({post}) => {
  console.log(post)
  const {question, answer} = post;

  return (
       <div className="container">
            <Card id='blog-card'>
               <Card.Header className='card-header bg-light pt-4 px-5  border-dark '>
                <h5 className='blog-title'>{question}</h5>
                </Card.Header>
                  <Card.Body id='card-text'>
                      <Card.Text>
                        {answer}
                      </Card.Text>
                  </Card.Body>
           </Card>
       </div>
     );
  };

export default Post;