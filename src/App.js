import "./App.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/items/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
