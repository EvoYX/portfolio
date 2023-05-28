import React from "react";
import { Checkbox, Select, Card, Rate } from "antd";

const { Option } = Select;

const Food = () => {
  return (
    <div>
      <h1>Food Section</h1>

      <h2>Checklist Section</h2>
      <Checkbox.Group style={{ width: "100%" }}>
        <Checkbox value="place1">Place 1</Checkbox>
        <Checkbox value="place2">Place 2</Checkbox>
        <Checkbox value="place2">Place 2</Checkbox>
        <Checkbox value="place2">Place 2</Checkbox>
        {/* Add more checkbox items as needed */}
      </Checkbox.Group>

      <h2>Category Filter</h2>
      <Select mode="multiple" placeholder="Select categories">
        <Option value="category1">Category 1</Option>
        <Option value="category2">Category 2</Option>
        {/* Add more category options as needed */}
      </Select>

      <h2>Foodie Section</h2>
      <Card title="Food Place 1" style={{ width: 300 }}>
        <img src="food1.jpg" alt="Food 1" />
        <Rate />
        <p>Rating: 4.5</p>
        <p>Review: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Card>
      {/* Add more Card components for other food places */}
    </div>
  );
};

export default Food;
