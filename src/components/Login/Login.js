import { GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Login.css';
import useTitle from '../../hooks/useTitle';
import { Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';

const Login = () => {
  const { signIn, providerLogin, loading, setLoading } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  useTitle('login');
  
 const from = location.state?.from?.pathname || '/';

  const handleSubmit = event =>{
     event.preventDefault();
     const form = event.target;
     const email = form.email.value;
     const password = form.password.value;

     signIn(email, password)
     .then (result => {
       const user = result.user;
       setError('');

        const currentUser = {
            email: user.email
        }
        console.log(currentUser);

fetch('https://quick-meal2-server.vercel.app/jwt', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(currentUser)
})
 .then(res => res.json())
 .then(data => {
     console.log(data);
     localStorage.setItem('quickMealToken', data.token);
     toast.success('Login successful')         
         navigate (from, { replace: true })
     
 });

     })
     .catch(error =>{
         console.log(error.message)
         setError(error.message);
         setLoading(false);
     })   
  }

      const googleProvider = new GoogleAuthProvider();
     
       const handleGoogleSignIn = () =>{
         providerLogin(googleProvider)
         .then(result => {
           const user = result.user; 
           navigate(from, {replace: true})
           setError('');
            console.log(user);
          })
          .catch(error => {
           console.error('error', error)
          })
          }

  return (
    <div className='container my-5'>             
    <div className='login-form container bg-light w-50 p-5'>
      <h1 className='text-warning my-5'> Login </h1>
          <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className=" form-label">Email</label>
                <input type="email" name="email" className="form-control py-2 rounded" id="formGroupExampleInput" placeholder="Your email" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                <input type="password" name="password" className="form-control  py-2 rounded" id="formGroupExampleInput2" placeholder="Your password" required />
             <div className='text-danger'>{error}</div>
            </div>
            <button className="login-btn btn btn-warning py-2 w-75 mt-4" type="submit">{loading ? 
            <Spinner animation="border" variant="dark" /> 
            : 
            'Login'}
            </button>
         <div className='my-4 text-warning'>---------  OR  -----------</div>
          <div>
              <button className='git-login-btn w-75 py-2 mb-4 btn btn-dark' onClick={handleGoogleSignIn}>Log In with Google</button> 
        </div>
        <p className='pb-5'><small>New to Quick Meal? Please  </small> <Link className='text-warning' to='/signup'> Sign Up</Link></p>
        </form> 
    </div>
  </div>
  );
};

export default Login;