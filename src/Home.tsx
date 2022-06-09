import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => (
  <div>
    <h1>HomePage</h1>
    <Link to="/list">goList</Link>
  </div>
);
export default HomePage;
