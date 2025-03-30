import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import LogoBileseni from "./LogoBileseni";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogoBileseni />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
