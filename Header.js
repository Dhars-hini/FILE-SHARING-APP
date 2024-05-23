import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="title">Filesharing App</h1>
        <nav className="navbar">
          <ul className="nav-links">
            <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
            <li><NavLink to="/fileshare" activeClassName="active">File Share</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
