import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../store/actions';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Filter posts based on the search term
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      <h1>Social Media For Travellers</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="cards">
        {filteredPosts.map((post) => (
          <div key={post.id} className="card">
            <img src={`https://picsum.photos/200?random=${post.id}`} alt={`Post ${post.id}`} />
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/item/${post.id}`}>Read More...</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;


