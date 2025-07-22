import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './componentsD/Sidebar';
import HeaderD from './componentsD/HeaderD';
import "../Styles/Dashboard.css";

export default function Dashboard() {
  const hasAnimated = useRef(false);

  useEffect(() => {
  if (hasAnimated.current) return;
  hasAnimated.current = true;

    const scripts = [
      { id: "script1", text: "Discover the magic behind our all-new McDonald's Hamburger recipe a creation born from passion, precision, and a whole lot of flavor.It all starts with 100% pure beef, seasoned to perfection and seared on a hot grill to lock in that juicy, mouthwatering taste. Each patty is cooked fresh, ensuring that every bite delivers bold, beefy satisfaction.Then comes the bun — warm, toasted just right for that soft yet slightly crisp texture that holds everything together.We layer it with our signature tangy pickles, finely chopped onions, a dash of ketchup, and just the right amount of creamy mustard, all perfectly balanced to enhance every flavor.It's not just a hamburger — it’s a carefully crafted experience, made with attention to every delicious detail.Taste the difference. Taste the care. Taste the new McDonald's Hamburger.." },
      { id: "script2", text: "she's been searching for something that truly works.She starts her day with Rajelica — a gentle cleanse, a refreshing mist, and the smooth glide of our nutrient-rich serum.As she massages it into her skin, you can see it — the dullness fades, the texture softens, and a natural glow begins to emerge.With every drop, her skin drinks in the goodness of traditional Korean botanicals and modern science — soothing green tea, brightening niacinamide, and deep hydration from hyaluronic acid.By the end of the week, the difference is undeniable. Her skin? Radiant. Even-toned. Poreless.No filters. No heavy makeup. Just real, flawless skin — confident and glowing.Rajelica — your skin’s transformation begins now." },
      { id: "script3", text: "Stay hydrated with our all-new eco-friendly water bottle — designed to keep up with your lifestyle, wherever you go.Whether you’re hitting the gym, powering through a day at the office, or exploring the outdoors, this bottle keeps your drink ice-cold for up to 24 hours and hot for 12 — thanks to its advanced double-wall insulation.Made with sustainable, BPA-free materials, it's a smart choice for you and the planet.Sleek, durable, and designed to fit perfectly in your hand or your bag — it’s hydration made effortless.Wherever life takes you, take the cool with you." }
    ];

    const intervals = []; 

    scripts.forEach(({ id, text }, index) => {
      const element = document.getElementById(id);
      if (!element) return;
      
      const words = text.split(" ");
      let wordIndex = 0;
      element.textContent = "";

      
      setTimeout(() => {
        const interval = setInterval(() => {
          if (wordIndex < words.length) {
            element.textContent += (wordIndex > 0 ? " " : "") + words[wordIndex];
            wordIndex++;
          } else { 
            clearInterval(interval);
            // Remove this interval from our tracking array
            const intervalIndex = intervals.indexOf(interval);
            if (intervalIndex > -1) {
              intervals.splice(intervalIndex, 1);
            }
          }
        }, 250); // typing speed (ms)
        
        intervals.push(interval);
      }, index * 1000); // 1 second delay between each script starting
    });


    // Cleanup function to clear any remaining intervals
    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []); // Only depend on hasAnimated

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