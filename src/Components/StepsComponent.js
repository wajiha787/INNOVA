import React from 'react';
import '../Styles/StepsComponent.css';

export default function StepsComponent() {
  return (
    <div className="steps-container">
      <h2 className="main-heading">Watch How INNOVA Crafts Your Video</h2>
      <p className="main-description">
        Sit back as INNOVA turns your Ideas to Life.<br />
        Your creative partner that whips up stunning ads, smart logos, and posts them to Social Media directly.
      </p>

      <div className="steps-wrapper">
        {/* Step 1 */}
        <div class="steps-vertical">
        <div class="vertical-step">
        <div className="step-inner">
    
    <div className="step-content">
      <h3 className="step-heading">Tell Your Story</h3>
      <p className="step-description">
        Simply input your script or key points into the system, and our AI will understand the main message, helping you create AI video content in an instant.
      </p>
    </div>
    <div className="step-image-container">
      <img src="/videos/01.png" alt="Step 1" className="step-image" />
    </div>
    <div className="step-number">01</div>
  </div>
</div>
</div>


        {/* Step 2 */}
        <div class="steps-vertical">
        <div class="vertical-step">
        <div className="step-inner">
          <div className="step-content">
            <h3 className="step-heading">AI Crafts Your Video</h3>
            <p className="step-description">
            Sit back as our system turns your text into an AI-generated video. The AI will choose animations and transitions and even suggest music and voiceovers.
            </p>
          </div>
          <div className="step-image-container">
            <img src="/videos/02.png" alt="Step 2" className="step-image" />
            <div className="step-number">02</div>
            </div>
</div>
</div>
</div>

        {/* Step 3 */}
        <div class="steps-vertical">
        <div class="vertical-step">
        <div className="step-inner">
          <div className="step-content">
            <h3 className="step-heading">Personalize the Video</h3>
            <p className="step-description">
            Customize the video to your liking by tweaking colors, fonts, layouts, and timing. Add your own voiceover or choose from a library of professional options.
            </p>
          </div>
          <div className="step-image-container">
            <img src="/videos/03.png" alt="Step 3" className="step-image" />
            <div className="step-number">03</div>
          </div>
        </div>
        </div>
        </div>

        <div class="steps-vertical">
        <div class="vertical-step">
        <div className="step-inner">
          <div className="step-content">
            <h3 className="step-heading">Download & Share</h3>
            <p className="step-description">
            Once you're happy with your masterpiece, render it in minutes and share it with the world! Impress your audience on social media, your website, or anywhere you need to captivate your audience.
            </p>
          </div>
          <div className="step-image-container">
            <img src="/videos/04.png" alt="Step 2" className="step-image" />
            </div>
            <div className="step-number">04</div>
          
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}