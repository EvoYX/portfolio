import React from 'react';
import { Card } from 'antd';

const Blog = () => {
  return (
    <div>
      <h1>IT Documentation/Blog Page</h1>
      
      <Card title="Blog Post 1" style={{ width: 300 }}>
        <p>Date: 1st May 2023</p>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Card>
      {/* Add more Card components for other blog posts */}
    </div>
  );
};

export default Blog;
