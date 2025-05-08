import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>INNOVA AI</h3>
          <Link to="/explore" className="footer-link">AI Video Generator</Link>
          <Link to="/create" className="footer-link">AI Image Generator</Link>
          <Link to="/trending" className="footer-link">AI Subtitle Generator</Link>
          <Link to="/custom-ai" className="footer-link">Voiceover Generator</Link>
        </div>

        <div className="footer-section">
          <h3>INNOVA Studio</h3>
          <Link to="/video-editor" className="footer-link">Video Editor</Link>
          <Link to="/picture-video" className="footer-link">Picture Video Maker</Link>
          <Link to="/add-text" className="footer-link">Add Text to Video</Link>
          <Link to="/compressor" className="footer-link">MP4 Compressor</Link>
          <Link to="/compressor" className="footer-link">Video Trimmer</Link>
        </div>

        <div className="footer-section">
          <h3>Templates</h3>
          <Link to="/business-template" className="footer-link">Business Video Template</Link>
          <Link to="/slideshow-template" className="footer-link">Slideshow Template</Link>
          <Link to="/social-template" className="footer-link">Social Media Video Template</Link>
          <Link to="/ad-template" className="footer-link">Advertisement Video Template</Link>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <Link to="/help" className="footer-link">Help</Link>
          <Link to="/team-work" className="footer-link">Team Work</Link>
          <Link to="/pricing" className="footer-link">Pricing</Link>
          <Link to="/signup" className="footer-link">Signup</Link>
          <Link to="/login" className="footer-link">Login</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} INNOVA. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
