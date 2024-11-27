import React from 'react';
import { FaHome, FaEnvelope, FaGithub } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dropdown from './Dropdown.tsx';
import Home from './Home.tsx';
import Projects from './Projects.tsx';
import About from './About.tsx';

function App() {
  return (
    <Router>
      <div className="app-container bg-background text-text h-full">
        <nav className="navbar fixed top-0 flex items-center justify-between w-full lg:py-11 text-2xl z-20">
          {/* Left icons */}
          <div className="flex items-center justify-start px-11 w-full">
            <Link to='/'>
              <FaHome className='mb-4 me-5 ms-2 mt-3 flex items-center hover:text-neutral-400 lg:mb-0 lg:mt-0' />
            </Link>
            <Dropdown />
          </div>
          
          {/* Right icons */}
          <div className="flex items-center justify-end space-x-5 px-11">
            <a href="mailto:davejamesbird@gmail.com" target='_blank' rel='noopener noreferrer' className=" hover:text-neutral-400">
              <FaEnvelope size={24} />
            </a>
            <a href="https://github.com/davebird00" target='_blank' rel='noopener noreferrer' className="hover:text-neutral-400">
              <FaGithub size={24} />
            </a>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
