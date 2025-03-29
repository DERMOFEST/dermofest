import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";

const App = () => (
  <div>
    <h1>Welcome to DermoFest</h1>
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<div>Home Page</div>} />
      <Route path="/about" element={<About />} />
    </Routes>
  </div>
);

export default App;
