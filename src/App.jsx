import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import LogoBileseni from "./LogoBileseni";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogoBileseni />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;