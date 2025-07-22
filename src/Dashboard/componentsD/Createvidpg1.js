import React, { useRef } from 'react';
import '../../Styles/Createvidpg1.css';

export default function Createvidpg1() {
  const fileInputRef = useRef();

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("User selected file:", file);
    }
  };

  return (
    <div className="create-video-wrapper">
      {/* Step Timeline */}
      <div className="step-timeline">
        <div className="step active">1. Choose Model</div>
        <div className="line"></div>
        <div className="step">2. Choose VoiceOver</div>
        <div className="line"></div>
        <div className="step">3. Write Script</div>
        <div className="line"></div>
        <div className="step">4. Customize</div>
        <div className="line"></div>
        <div className="step">5. Preview & Generate</div>
      </div>

      {/* Content Area */}
      <div className="content-area">     
        <div className="model-section">
          <h3 className="section-heading">Choose Real Life AI Model</h3>
          <div className="face-grid">
            <img src='/videos/face2.png' alt="Face 2" />
            <img src='/videos/face4.png' alt="Face 4" />
            <img src='/videos/face6.png' alt="Face 6" />
            <img src='/videos/face7.png' alt="Face 7" />

            <div className="upload-box" onClick={handleUploadClick}>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              <p>Upload Model</p>
              <span className="plus-sign">+</span>
            </div>
          </div>
        </div>

       
        <div className="model-section">
          <h3 className="section-heading">Choose Cartoon Model</h3>
          <div className="face-grid">
            <img src='/videos/Avatar1.png' alt="Cartoon 1" />
            <img src='/videos/Avatar2.png' alt="Cartoon 2" />
            <img src='/videos/Avatar3.png' alt="Cartoon 3" />
            <img src='/videos/Avatar4.png' alt="Cartoon 4" />
            

            <div className="upload-box" onClick={handleUploadClick}>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              <p>Upload Model</p>
              <span className="plus-sign">+</span>
            </div>
          </div>
        </div>
        

       <div className="model-section">
  <h3 className="section-heading">Design Yourself</h3>
  
    <textarea
      className="design-prompt"
      placeholder="Enter your model description or prompt here..."
      rows={4}
      
    />
    <button
      className="design-button"
      onClick={() => alert('Prompt submitted!')}
    >
      Submit Prompt
    </button>

</div>



        <button className="step-button">Next: Choose voiceover →</button>
      </div>
      </div>
    
  );
}