import React, { useState } from 'react';
import "../Styles/ForgotPassword.css"

function Forgotpassword() {
  const [email, setEmail] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch('http://localhost:5000/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    alert(data.message);
  } catch (error) {
    alert("Error: " + error.message);
  }
};


  return (
   <div className="forgot-wrapper">
  <form onSubmit={handleSubmit} className="forgot-container">
    <h2>Forgot Password</h2>
    <input
      type="email"
      placeholder="Enter your email"
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <button type="submit">Send Reset Link</button>
  </form>
</div>
  );
}

export default Forgotpassword;
