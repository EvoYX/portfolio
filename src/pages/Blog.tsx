import React, { useEffect, useState } from "react";
import { Card } from "antd";
import blogData from "../data/blogData.json";

// Use the `blogData` variable to access the JSON data
interface BlogPost {
  id: number;
  title: string;
  date: string;
  tags: string[];
  preview: string;
  content: { heading: string; text: string }[];
}

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  const fetchJson = () => {
    setBlogPosts(blogData);
  };
  useEffect(() => {
    // Fetch the blog posts from the JSON file
    fetchJson();
  }, []);

  return (
    <div className="centered-content">
      {blogPosts.map((post: any) => (
        <Card key={post.id} title={post.title}>
          <p>{post.preview}</p>
          <a href={`/blog/${post.id}`}>Read More</a>
        </Card>
      ))}
    </div>
  );
};

export default Blog;
