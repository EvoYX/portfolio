import React from "react";
import { Link } from "react-router-dom";
import { Typography, Menu } from "antd";
import { HomeOutlined, BookOutlined, CoffeeOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Home = () => {
  return (
    <div>
      <Title level={1}>Welcome to the Home Page</Title>

      {/* Add your page content here */}
    </div>
  );
};

export default Home;
