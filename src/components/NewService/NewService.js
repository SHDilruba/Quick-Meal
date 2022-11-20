import React from 'react';

const NewService = () => {
  return (
    <div>
    <div id='card' className='service  card w-100'>
        <img className='img-fluid' src={picture} alt="" />
            <h3 className='pt-4 pb-3'>{name}</h3>
               <p className='px-4'>{description}</p>
              <h4 className='text-warning'>Price: ${price}</h4>
            <Link to={`/serviceDetail/${_id}`}>
                 <button className=' btn btn-dark w-100 py-3'>Service Detail</button>
            </Link>
      </div>
</div>
  );
};

export default NewService;