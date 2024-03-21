import React from "react";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [activeButton, setActiveButton] = React.useState(1);
  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <nav className="px-3 py-1 sticky-top rounded-pill bg-dark-c text-center w-50 mx-auto mt-4 text-colour-c d-flex justify-content-between nav-font">
      <Link to="/" className={activeButton === 1 ? 'text-theme-color nav-font' : 'not-selected-nav nav-font' }
        onClick={() => handleClick(1)}
      >
        Profile
      </Link>
      <Link to="/experience" className={activeButton === 2 ? 'text-theme-color nav-font' : 'not-selected-nav nav-font'}
        onClick={() => handleClick(2)}
      >
        Experience
      </Link>
      <Link to="/education" className={activeButton === 3 ? 'text-theme-color nav-font' : 'not-selected-nav nav-font' }
        onClick={() => handleClick(3)}
      >
        Education
      </Link>
    </nav>
  )
}