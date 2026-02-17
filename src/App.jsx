
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Project from "./project";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}
