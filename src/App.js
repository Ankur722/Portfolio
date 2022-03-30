import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Project from "./components/Project";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="project" element={<Project />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
