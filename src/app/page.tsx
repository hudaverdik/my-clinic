// pages/HomePage.tsx
import React from 'react';
import Layout from '../components/clientlayout'; // Assuming you have a Layout component
import '../styles/common.css'; // Global styles

const HomePage = () => {
  return (
    <Layout>
      <div className="container">
        <h1>Welcome to the Home Page</h1>
        <p>This is the starting point of your application.</p>
        {/* More content here */}
      </div>
    </Layout>
  );
};

export default HomePage;
