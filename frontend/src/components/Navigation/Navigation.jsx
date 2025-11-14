import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      {/* Top Header Bar */}
      <div className="top-header">
        {/* Left Side */}
        <div className="left-section">
          <div className="contact-item">
            <i className="fa fa-phone"></i>
            <span>+91 8757094836</span>
          </div>
          <div className="contact-item">
            <i className="fa fa-envelope"></i>
            <span>info@humancarehospital.com</span>
          </div>
        </div>


        {/* Right Side */}
        <div className="right-section">
          <span className="follow-text">Follow Us On:</span>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-x-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>

      {/* Navigation Section */}
     <div className="navigation_section">
  {/* Logo Section */}
  <Link to="/" className="logo">
    <div className="icon">
      <i class="fa-solid fa-hospital"></i>
    </div>
    <div className="hospital_name">HumanCare Hospital</div>
  </Link>

  {/* Navigation Menu */}
  {/* <div className="menu_links">
    <Link to="/" className="menu_item">Home</Link>
    <Link to="/about" className="menu_item">About Us</Link>
    <Link to="/Doctors" className="menu_item">Doctors</Link>
    <Link to="/contact" className="menu_item">Contact Us</Link>
  </div> */}

  {/* Right Section */}
  <div className="nav_links">
    <Link to="/registration" className="appointment_btn">
      MAKE APPOINTMENT  <i className="fa fa-arrow-right"></i>
    </Link>
    {/* <Link to="/registration" className="reg">Register</Link> */}
          <Link to="/login" className="reg">Login</Link>
  </div>
</div>



    </>
  );
};

export default Navigation;
