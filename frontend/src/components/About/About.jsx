import React from "react";
import {Link} from 'react-router-dom'
import "./About.css"; // custom CSS styling

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Side - Text Content */}
        <div className="about-left">
          <div className="about-badge">
            <span className="icon">🩺</span>
            <span>ABOUT</span>
          </div>

          <h1>HumanCare Hospital</h1>

          <p>
            Ophthalmology is a dynamic and evolving field that integrates
            medical, surgical, and technological expertise to preserve and
            enhance vision. Ophthalmologists contribute not only to individual
            patients but to society as a whole.
          </p>

          <ul className="features">
            <li>✅ Choose a Qualified Pediatrician</li>
            <li>✅ Comprehensive Health Services</li>
            <li>✅ Child-Focused Health Approach</li>
            <li>✅ Behavioral and Mental Health</li>
            <li>✅ Accessibility of Support Staff</li>
          </ul>

          <button className="about-btn">ABOUT US</button>
        </div>

        {/* Right Side - Image */}
        <div className="about-right">
          {/* ✅ Use image from public folder */}
          <img src="/images/about_7_3 (1).webp" alt="Hospital" />
        </div>
      </div>
    </section>
  );
};

export default About;
