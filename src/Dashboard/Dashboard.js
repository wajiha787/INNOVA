import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './componentsD/Sidebar';
import HeaderD from './componentsD/HeaderD';
import "../Styles/Dashboard.css";


export default function Dashboard() {
  useEffect(() => {
    const scripts = [
      { id: "script1", text: "Discover the magic behind our new McDonald's Hamburger recipe." },
      { id: "script2", text: "Introducing Rajelica — the ultimate Korean skincare transformation." },
      { id: "script3", text: "Stay hydrated with our all-new eco-friendly water bottle." }
    ];

    scripts.forEach(({ id, text }) => {
      const element = document.getElementById(id);
      if (!element) return;
      const words = text.split(" ");
      let wordIndex = 0;
      element.textContent = "";

      const interval = setInterval(() => {
        if (wordIndex < words.length) {
          element.textContent += (wordIndex > 0 ? " " : "") + words[wordIndex];
          wordIndex++;
        } else {
          clearInterval(interval);
        }
      }, 250); // typing speed (ms)
    });
  }, []);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="content-area">
        <HeaderD />
        <div className="main-content">
          <h3 className="center-heading">
            INNOVA has got a lot of crafts videos waiting for you...
          </h3>

          <div className="button-wrapper">
            <Link to="/create-video" style={{ textDecoration: 'none' }}>
  <button className="ai-video-btn">
    <h2 className="btn-heading">Create AI video</h2>
    <p className="btn-subheading">start from scratch →</p>
  </button>
</Link>

          </div>

         <div className="video-script-wrapper">
  <div className="video-box">
    <video controls autoPlay muted loop className="video">
      <source src="/videos/Hamburger-Ad.mp4" type="video/mp4" />
    </video>
  </div>
  <div className="script-box">
    <span className="typewriter-text" id="script1"></span>
    <span className="cursor">|</span>
  </div>
</div>

<div className="video-script-wrapper">
  <div className="video-box">
    <video controls autoPlay muted loop className="video">
      <source src="/videos/Korean_SkincareAd.mp4" type="video/mp4" />
    </video>
  </div>
  <div className="script-box">
    <span className="typewriter-text" id="script2"></span>
    <span className="cursor">|</span>
  </div>
</div>

<div className="video-script-wrapper">
  <div className="video-box">
    <video controls autoPlay muted loop className="video">
      <source src="/videos/Water-bottleAd.mp4" type="video/mp4" />
    </video>
  </div>
  <div className="script-box">
    <span className="typewriter-text" id="script3"></span>
    <span className="cursor">|</span>
  </div>
</div>


          </div>
        </div>
      </div>
  );
}
