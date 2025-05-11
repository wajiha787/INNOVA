import React, { useState } from 'react';
import '../../Styles/Createvidpg3.css';

export default function Createvidpg3() {
  const [inputText, setInputText] = useState('');
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    setCharCount(text.length);
  };

  return (
    <div className="video-generator-container">
      <div className="header">
        <h1 className="version">v3.0</h1>
      </div>
      
      <div className="content">
        <h2 className="prompt-text">Give me a topic, premise and detailed instructions in any language</h2>
        
        <div className="input-container">
          <textarea
            className="text-input"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Describe what you want to see in your video..."
            maxLength={32000}
          />
          <div className="char-counter">{charCount}/32000</div>
        </div>
        
        <div className="button-group">
  <button className="Enhance-button">
    Enhance Script ♦
  </button>
  <button className="generate-button">
    Generate a video ♦
  </button>
</div>

      </div>
    </div>
  );
}