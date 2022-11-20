import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
       fetch('http://localhost:5000/blog')
       .then(res => res.json())
       .then(data => setPosts(data))
  },[])

  return (
    <div className="container blog-container">
        <h2 className='blog text-center'>Blog about Technology</h2>
         <div className="post-container">
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