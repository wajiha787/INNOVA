import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/login/signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setTimeout(() => setShowControls(false), 300);
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setShowControls(true);
        setIsPlaying(false);
      }
    }
  };

  const handleMouseEnter = () => isPlaying && setShowControls(true);
  const handleMouseLeave = () => isPlaying && setShowControls(false);

  return (
    <div className="app-container">
      <div className="signup-section">
        <div className="logo-container">
          <div className="logo">
            <span className="logo-icon">🔮</span>
            <span className="logo-text">INNOVA AI</span>
          </div>
          <h1 className="welcome-text">
            Welcome to <span className="gradient-text">INNOVA AI</span>
          </h1>
        </div>

        <div className="auth-buttons">
          <button className="auth-button google-button">
            <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" className="auth-icon" />
            Join with Google
          </button>
        </div>

        <div className="divider">or</div>

        <div className="email-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email-input"
          />
          <button className="create-account-button">Create account</button>
        </div>

        <div className="login-prompt">
          Have an account? <Link to="/login" className="login-link">Login &gt;</Link>
        </div>

        <div className="terms">
          By proceeding, you agree to our <a href="#" className="terms-link">Terms</a> and acknowledge our <a href="#" className="privacy-link">Privacy Policy</a>
        </div>
      </div>

      <div className="preview-section">
        <h2 className="preview-heading">
          Idea to <span className="youtube-text">YouTube</span> video
        </h2>
        <p className="preview-description">
          With INNOVA AI, you can turn any content or idea into video, instantly 🚀
        </p>

        <div className="video-preview">
          <div 
            className="video-container" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              className="video-thumbnail"
              src="/preview.mp4"
              poster="/video-poster.jpg"
              muted
            />
            
            {showControls && (
              <div className="video-overlay">
                <button className="play-button" onClick={togglePlay}>
                  <div className={isPlaying ? "pause-icon" : "play-icon"}></div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
