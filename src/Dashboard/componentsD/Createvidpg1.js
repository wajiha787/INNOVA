import React from 'react';
import '../../Styles/Createvidpg1.css';


export default function Createvidpg1() {
  return (
    
    <div className="container">
      <h2 className="heading">Step 1 of creating your AI generated Ad...</h2>
      <h2 className="heading-m">Choose your Modal</h2>
      <div className="face-grid">
        <img src='./videos/face1.png' alt="Face 1" />
        <img src='./videos/face2.png' alt="Face 2" />
        <img src='./videos/face3.png' alt="Face 3" />
        <img src='./videos/face4.png' alt="Face 4" />
        <img src='./videos/face5.png' alt="Face 5" />
        <img src='./videos/face6.png' alt="Face 6" />
        <img src='./videos/face7.png' alt="Face 7" />
      </div>

      <button className="step-button">
        Go to Step 2
      </button>
    </div>
  );
}
