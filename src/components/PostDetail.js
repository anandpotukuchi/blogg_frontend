import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/posts/${id}`)
    .then(response => {
      const postData = response.data.data; // Access the nested data array
    setPost(postData);
    })  
    
    
    
    .then(response => setPost(response.data))
      .catch(error => console.error('Error fetching post:', error));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p><strong>Created At:</strong> {new Date(post.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default PostDetail;