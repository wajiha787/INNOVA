import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../Styles/Signup.css";
import { auth, provider } from './firebaseconfig';
import { signInWithPopup } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // 👈 for navigation without page reload

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed');

      alert('Login successful');
      navigate('/dashboard'); // 👈 navigate without full page reload
    } catch (err) {
      alert(err.message);
      console.error(err);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const res = await fetch('http://localhost:5000/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user.email,
          name: user.displayName,
          googleId: user.uid
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      localStorage.setItem('token', data.token);
      alert('Google login successful!');
      navigate('/dashboard'); // 👈 navigate to dashboard
    } catch (err) {
      console.error(err);
      alert(err.message || "Google login failed");
    }
  };

  return (
    <div className="app-container">
      <div className="signup-section">
        <div className="logo-container">
          <h2 className="gradient-text">Welcome to INNOVA</h2>
          <p className="welcome-text">Login to your account</p>
        </div>

        <div className="auth-buttons">
          <button className="auth-button google-button" onClick={handleGoogleSignup}>
            <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" className="auth-icon" />
            Join with Google
          </button>
        </div>

        <div className="divider">or</div>

        <form onSubmit={handleEmailSignup}>
          <input
            type="email"
            placeholder="Email"
            className="email-input"
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="email-input"
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="create-account-button">Login</button>
        </form>

        <div className="forgot-password-link">
          <Link to="/forgotpass">Forgot Password?</Link>
        </div>

        <div className="login-prompt">
          Don't have an account? <Link to="/signup" className="login-link">Signup</Link>
        </div>

        <div className="terms">
          By signing up, you agree to our Terms & Conditions and Privacy Policy.
        </div>
      </div>

      <div className="preview-section">
        <div className="video-box1">
          <video controls autoPlay muted loop className="video">
            <source src="/videos/Water-bottleAd.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Login;
