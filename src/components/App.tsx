import React from 'react';
import { FaHome, FaEnvelope, FaGithub } from "react-icons/fa";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dropdown from './Dropdown.tsx';
import Home from './Home.tsx';
import About from './About.tsx';
import ProjectList from './Projects.tsx';

function App() {
  return (
    <Router>
      <div className="app-container bg-background text-text h-full w-full">
        <nav className="navbar fixed top-0 left-0 right-0 flex items-center justify-between w-full py-5 text-2xl z-20 bg-background">
          {/* Left icons */}
          <div className="flex items-center justify-start px-11 w-full">
            <Link to='/'>
              <FaHome className='mb-0 me-5 ms-2 flex items-center hover:text-neutral-400' />
            </Link>
            <Dropdown />
          </div>
          
          {/* Right icons */}
          <div className="flex items-center justify-end space-x-6 px-11">
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
          <Route path="/projects" element={<ProjectList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
