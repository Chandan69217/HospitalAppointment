import React from "react";
import "./Doctors.css";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaEye, FaStethoscope } from "react-icons/fa";


const doctors = [
  {
    name: "Dr. Mahir Kumar Verma",
    specialty: "Corneal Procedures",
    desc: "Replacement of a damaged cornea with a healthy most of the donor...",
    icon: <FaStethoscope />,
    img: "/images/doctor_03.webp", // 👈 tu apni image path yahan de
  },
  {
    name: "Dr. Manish Jain",
    specialty: "Contact Lenses",
    desc: "Thin, clear lenses placed directly on the eye to correct vision, available.",
    icon: <FaEye />,
    img: "/images/d1.webp",
  },
  {
    name: "Dr. Shilpa Kumari",
    specialty: "Refractive Surgery",
    desc: "A laser is used to reshape the cornea to correct refractive errors.",
    icon: <FaEye />,
    img: "/images/doctor_02.webp",
  },
  
];

const Doctors = () => {
  return (
    <section className="doctors-section">
      <div className="doctors-header">
        <div className="badge">
          <span className="icon">🩺</span>
          <span>EXPERT DOCTORS</span>
        </div>
        <h2>Meet Our Professional Doctors</h2>
      </div>

      <div className="doctors-carousel">
        

        <div className="doctor-cards">
          {doctors.map((doc, index) => (
            <div className="doctor-card" key={index}>
              <div className="doctor-image">
                <img src={doc.img} alt={doc.name} />
                <div className="doctor-icon">{doc.icon}</div>
              </div>

              <div className="doctor-info">
                <h4 className="doctor-name">{doc.name}</h4>
                <h3 className="doctor-specialty">{doc.specialty}</h3>
                <p className="doctor-desc">{doc.desc}</p>
                <button className="read-btn">READ MORE</button>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Doctors;
