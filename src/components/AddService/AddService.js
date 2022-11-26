import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import './AddService.css';

const AddService = () => {
  const {_id} = useLoaderData();
  useTitle('AddService');

  const handleAddService = event =>{
    event.preventDefault()
    const form = event.target;
    const  name = form.name.value;
    const picture = form.photoURL.value;
    const description = form.description.value;
    const price = form.price.value;

    const service = {
      service: _id,
      name,
      picture,
      description,
      price
    }

    console.log(service);

    fetch('https://quick-meal2-server.vercel.app/topServices', {
      method: 'POST',
      headers: {
         'content-type': 'application/json'
      },
      body: JSON.stringify(service)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  .catch(er => console.error(er));
  alert('service added successfully')
  event.target.reset();
}

  return (
    <div id='add-service' className=' pt-5 pb-3 container bg-dark'>
       <h1 className='text-warning'>Add a service</h1>
       <div className='review-form pt-5 mt-5 container text-center w-100 px-5'>
          <form onSubmit={handleAddService} className=' pb-5 pt-3 py-5 px-4'>
            <div className="mb-5 ">
              <input name="name" type="text" className="form-control text-center py-3" placeholder="Service title"/>
            </div>
            <div className="mb-5">
              <input name="photoURL" type="text" className="form-control text-center py-3" placeholder="photo URL" />
            </div>
            <div className="mb-5 rounded">
              <textarea name="description" type="text" className="form-control py-5 text-center" rows="3" placeholder="description" ></textarea>
            </div>
            <div className="mb-5">
              <input name="price" type="text" className="form-control text-center py-3" placeholder="price" />
            </div>
            <input id='review-btn' className='btn btn-warning w-50  mt-3 mb-4 py-2' type="submit" />
          </form>
      </div>
    </div>
  );
};

export default AddService;