import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Blog from "./pages/Blog";
import Food from "./pages/Food";
import Home from "./pages/Home";
import { Menu } from "antd";
import { HomeOutlined, BookOutlined, CoffeeOutlined } from "@ant-design/icons";

function App() {
  return (
    <Router>
      <Menu mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="blog" icon={<BookOutlined />}>
          <Link to="/blog">Blog</Link>
        </Menu.Item>
        <Menu.Item key="food" icon={<CoffeeOutlined />}>
          <Link to="/food">Food</Link>
        </Menu.Item>
      </Menu>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/blog" Component={Blog} />
        <Route path="/food" Component={Food} />
      </Routes>
    </Router>
  );
}

export default App;
