import React, { useEffect, useState } from "react";
import { Row, Col, Typography } from "antd";
import preval from "babel-plugin-preval/macro";
const { Title, Text } = Typography;

function HomePage() {
  const [cssContent, setCssContent] = useState("");

  const handleButtonClick = async () => {
    // readCssFile.js
    try {
      const greeting = preval`const fs = require("fs");
      module.exports = fs.readFileSync('./src/pages/home.css','utf8');`;
      console.log("the result is ", greeting);
      alert(greeting);
    } catch (err) {
      console.log(err);
    }
    // const fs = require("fs");

    // const cssFilePath = "path/to/your/file.css";

    // fs.readFile(cssFilePath, "utf8", (err: any, data: any) => {
    //   if (err) {
    //     console.error("Error reading CSS file:", err);
    //   } else {
    //     console.log("CSS file content:", data);
    //   }
    // });
  };
  const handleFileChange = (e: any) => {
    console.log(e.target.files);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      console.log("thie file name is ", reader.result, reader);
    };
  };
  return (
    <div>
      <button onClick={handleButtonClick}>Load CSS</button>
      {/* Your component JSX goes here */}
      <input type="file" onChange={handleFileChange}></input>
    </div>
  );
  return (
    <div className="container">
      <Row justify="center" align="middle" className="header">
        <Col span={12}>
          <Title level={1}>Welcome to Your Website</Title>
          <Text>
            This is a description of your website. You can provide some
            information about yourself or your project here.
          </Text>
        </Col>
      </Row>
      <Row justify="center" align="middle" className="features">
        {/* Add your feature sections here */}
      </Row>
      <Row justify="center" align="middle" className="footer">
        <Col span={12}>
          <Text>
            © {new Date().getFullYear()} Your Website. All rights reserved.
          </Text>
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
