import React from 'react';
import '../Styles/voicehome.css';

export default function VoiceHome() {
  return (
    <div className="voicetrans-container">
      <h2 className="voice-heading">Voice of your Imagination</h2>
      <div className="voicetrans-wrapper">
        <div className="video-container1">
          <img src="/videos/voice-trans.webp" alt="Voice Transition Visual" className="image1" />
          
        </div>
        <div className="voice-description">
          <p className="voice-text">
            Use AI voice cloning to bring scripts to life, add your own audio, or even translate voiceovers into different languages with stunning clarity and realism.
          </p>
        </div>
      </div>
    </div>
  );
}