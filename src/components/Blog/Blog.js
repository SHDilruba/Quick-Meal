import React, { useContext} from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import LoadSpinner from '../../Spinner/LoadSpinner';
import Post from '../Post/Post';
import './Blog.css';

const Blog = () => {
  useTitle('Blog')
  const posts = useLoaderData();
  const {loading} = useContext(AuthContext);

  return (
    <div className="container blog-container">
        <h1 className='blog text-center text-warning'>Blog about Technology</h1>
         <div className="post-container container w-75">
           { loading ? <LoadSpinner></LoadSpinner>
            :
            <>
             {
              posts.map(post => <Post 
               post={post} 
               key={post._id}
               ></Post> 
               ) 
             }
            </>
           }
         </div>
    </div>
  );
};

export default Blog;