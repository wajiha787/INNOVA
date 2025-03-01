import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";
import Drawer from "./Drawer"; // Create this component separately for mobile menu
// Replace with your actual logo image
import { FaBars } from "react-icons/fa";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="sticky-header">
      <div className="logoWrapper">
        
        <div className="logo">
          <span className="INNOVA">INNOVA</span>
          <span className="tagline">AI Prompt Reel Generator</span>
        </div>
      </div>

      <nav className="desktop-nav">
        <Link to="/" className="nav-link">Home</Link>

        {/* Dropdown for AI Categories */}
        <div 
          className="solutions-container"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span className="solutions">AI Solutions ▾</span>
          {showDropdown && (
            <div className="dropdown">
              <Link to="/explore" className="dropdown-item">Explore Prompts</Link>
              <Link to="/create" className="dropdown-item">Create Prompt</Link>
              <Link to="/trending" className="dropdown-item">Trending Reels</Link>
              <Link to="/custom-ai" className="dropdown-item">Custom AI Models</Link>
            </div>
          )}
        </div>

        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>

      {/* Mobile Nav - Hamburger Menu */}
      <div className="mobile-nav">
        <button className="bar-icon" onClick={toggleDrawer}>
          <FaBars />
        </button>
      </div>

      {/* Drawer Component for Mobile Navigation */}
      {isDrawerOpen && <Drawer toggleDrawer={toggleDrawer} />}
    </header>
  );
}

export default Header;
