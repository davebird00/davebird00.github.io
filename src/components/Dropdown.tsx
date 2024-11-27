import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen); 
  };

  const handleSelect = (path: string) => {
    navigate(path); 
    setIsOpen(false); 
  };

  return (
    <div className='relative me-auto flex flex-col ps-0'>
      <button
        className={`mb-4 lg:mb-0 lg:pe-2 bg-transparent hover:text-neutral-400 transition-transform duration-400 ease-linear ${isOpen ? 'rotate-180': ''}`}
        onClick={toggleDropdown}>
        &#9660;
      </button>

      {isOpen && (
        <ul className={`absolute top-full left-0 w-50 bg-tertiary shadow-sm rounded-md animate-slideDown ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        } origin-top`}
        >
          <li
            onClick={() => handleSelect('/about')}
            className="px-4 py-2 cursor-pointer hover:bg-secondary rounded-t-md"
          >
            About
          </li>
          <li
            onClick={() => handleSelect('/projects')}
            className="px-4 py-2 cursor-pointer hover:bg-secondary rounded-b-md"
          >
            Projects
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;