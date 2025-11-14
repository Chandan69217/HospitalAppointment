import React from "react";
import "./Our.css";
import { FaHeartbeat, FaTeeth, FaBrain, FaFemale, FaEye, FaBone, FaStethoscope } from "react-icons/fa";
import { GiKidneys } from "react-icons/gi";

const services = [
  { icon: <FaStethoscope />, title: "Internal Medicine", doctors: "30+ Doctors" },
  { icon: <FaTeeth />, title: "Dental Care", doctors: "20+ Doctors" },
  { icon: <GiKidneys />, title: "Urology Care", doctors: "20+ Doctors" },
  { icon: <FaBrain />, title: "Neurology Care", doctors: "10+ Doctors" },
  { icon: <FaFemale />, title: "Gynecologists", doctors: "30+ Doctors" },
  { icon: <FaEye />, title: "Ophthalmology", doctors: "24+ Doctors" },
  { icon: <FaBone />, title: "Orthopedics", doctors: "26+ Doctors" },
  { icon: <FaHeartbeat />, title: "Cardiology", doctors: "20+ Doctors" },
];

const Our = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <div className="badge">
          <span className="icon">🩺</span>
          <span>OUR SERVICE</span>
        </div>
        <h2>Our HumanCare Service</h2>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.doctors}</p>
            <button>READ MORE</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Our;
