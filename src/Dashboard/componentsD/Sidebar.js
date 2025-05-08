import React from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="INNOVA">INNOVA</h1>

      <div className="sidebar-nav">
        <p className='nav-item'>Create image</p>
        <button className='createreel'>+ Create Ad</button>
        <p className='nav-item'>Create Subtitles</p>
        <p className='nav-item'>Create voice over</p>
        <p className='nav-item'>Create picture To video</p>
        <p className='nav-item'>Check Leads on Social media</p>
        <p className='nav-item'>Post on Social Media with captions</p>
        <p className='nav-item'>Your Drafts</p>
        <p className='nav-item'>Add Text to video</p>
        <p className='nav-item'>MP4 compressor</p>
        <p className='nav-item'>Video Trimmer</p>
        <p className='nav-item'>Editor</p>
      </div>
    </div>
  );
};

export default Sidebar;
