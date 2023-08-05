import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './ItemDetail.css';

const ItemDetail = () => {
  const { id } = useParams();
  const { posts } = useSelector((state) => state);
  const post = posts.find((post) => post.id === parseInt(id));

  const [showDetails, setShowDetails] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);

  if (!post) {
    return <div>Loading...</div>;
  }

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
    setShowUserInfo(false);
  };

  const handleShowUserInfo = () => {
    setShowUserInfo(!showUserInfo);
    setShowDetails(false);
  };

  // Filter out the current post from the posts list
  const remainingPosts = posts.filter((item) => item.id !== parseInt(id));

  return (
    <div className="item-detail">
      <h1>Post Number : {post.id}</h1>
      <div className='dis-item'>
        <div className="card">
          <img src={`https://picsum.photos/200?random=${post.id}`} alt={`Post ${post.id}`} />
          <h2>{post.title}</h2>
          
        </div>
        <div className="buttons">
          <button onClick={handleShowDetails}>
            {showDetails ? 'Hide Details' : 'Details'}
          </button>
          <button onClick={handleShowUserInfo}>
            {showUserInfo ? 'Hide User Info' : 'User Info'}
          </button>
          
          <p>{post.body.slice(0, showDetails ? undefined : 50)}</p>
           {showDetails && <p>{post.body.slice(50)}</p>}
           {showUserInfo && <p>User ID: {post.userId}</p>}
          
        </div>
      </div>
      
      

      <div className="remaining-cards">
        {remainingPosts.map((item, index) => (
          <div key={item.id} className="card">
            <img src={`https://picsum.photos/200?random=${item.id}`} alt={`Post ${item.id}`} />
            <h2>{item.title}</h2>
            <p>{item.body.slice(0, 50)} {item.body.length > 50 && '...'}</p>
            {index % 3 === 2 && <div className="clearfix" />} {/* Add clearfix after every 3rd item */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemDetail;

