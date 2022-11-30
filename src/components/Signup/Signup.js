import React, { useContext, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import './Signup.css';
import toast from 'react-hot-toast';

const Signup = () => {
  const {createUser, updateUser, loading, setLoading} = useContext(AuthContext);
  useTitle('Signup');

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
   const email = form.email.value;
   const password = form.password.value;  
   setError('');

  if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
    setError('please provide at least two uppercase');
      return;
  }
   if(password.length < 6){
    setError('please should be at least 6 characters');
    return;
   }
   if(!/(?=.*[!@#$&*])/.test(password)){
    setError('please add at least one special character');
   return;
   }
   setError('');

     createUser(email, password)
  .then( result => {
    const user = result.user;
    console.log(user);
    setSuccess(true); 
    form.reset();
    toast.success('Signed up successfully')
    const userInfo = {
      displayName: name
    }
    updateUser(userInfo)
    .then(() =>{})
    .catch(err => console.error(err))
  })
  .catch(error => {
    console.log(error)
    setError(error.message)
    setLoading(false);
  });
 }

  return (
    <div className='container'>
          <div className='signup-form w-50 bg-light px-5 py-5 mx-auto'>
      <h1 className='text-warning mb-5 mt-3 pt-3'>Sign Up</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="" controlId="formBasicName">
      <Form.Label> Name</Form.Label>
      <Form.Control type="text" name="name" placeholder="Name"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name= "password" placeholder="Password" required />
        </Form.Group>
        <p className='text-danger mt-4'>{error}</p>
      {success && <p className='text-success'>Sucessfully Signed up</p>}
      <Button className='submit-btn w-75 my-4' variant="warning" type="submit">{loading ? 
            <Spinner animation="border" variant="dark" /> 
            : 
            'Sign Up'}
      </Button>
    </Form>
    <p className='pt-3 pb-4'><small>Already have an account? Please </small><Link className='text-warning' to='/login'>Log in</Link></p>
    </div>
    </div>
  );
};

export default Signup;