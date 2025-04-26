import React from 'react';
import '../Styles/editingstudio.css';

export default function EditingStudio() {
  return (
    <div className="editingstudio-outer">
      <div className="editingstudio-container">
        <h2 className="editing-heading">Editing Studio</h2>
        <div className="editingstudio-wrapper">
          <div className="image-container">
            <img src="/videos/editing-studio.png" alt="AI Editing Studio Interface" className="studio-image" />
          </div>
          <div className="editing-description">
            <p className="editing-text">
            Logo, Colors, Voice: Customize Every Detail in Your Video
            </p>
            <ul className="editing-features">
              <li>Smart cut detection for seamless editing</li>
              <li>Auto-color correction and lighting adjustment</li>
              <li>AI-powered background removal/replacement</li>
              <li>One-click social media format conversion</li>
              <li>Real-time collaboration features</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}