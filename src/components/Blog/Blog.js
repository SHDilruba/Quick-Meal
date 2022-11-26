import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Post from '../Post/Post';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useTitle('Blog')

  useEffect(() =>{
       fetch('https://quick-meal2-server.vercel.app/blog')
       .then(res => res.json())
       .then(data => setPosts(data))
  },[])

  return (
    <div className="container blog-container">
        <h1 className='blog text-center text-warning'>Blog about Technology</h1>
         <div className="post-container container w-75">
            {
               posts.map(post => <Post 
                post={post} 
                key={post._id}
                ></Post> 
                ) 
            }
         </div>
    </div>
  );
};

export default Blog;