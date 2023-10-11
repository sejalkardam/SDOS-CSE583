import React from 'react';
import './Navbar.css'; // Create a CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/flavors">Flavors</a>
        </li>
        <li className="nav-item">
          <a href="/category">Category</a>
        </li>
        <li className="nav-item">
          <a href="/trending">Trending Cakes</a>
        </li>
        <li className="nav-item">
          <a href="/occasion">Occasion</a>
        </li>
        <li className="nav-item">
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;


