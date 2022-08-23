import React, { useEffect, useState } from 'react';
import './Nav.css';

function Navbar() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);


  return(
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo" 
        src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg" 
        alt="Netflix Logo" />

      
    </div>
  )
}

export default Navbar