import React from "react";
import Carousel from "../Carousel/Carousel";
import DoctorCard from "../DoctorCard/DoctorCard";
import "./Doctors.css";

import { FaStethoscope, FaEye } from "react-icons/fa";

const doctors = [
  {
    name: "Dr. Mahir Kumar Verma",
    specialty: "Corneal Procedures",
    desc: "Replacement of a damaged cornea with a healthy donor cornea...",
    icon: <FaStethoscope />,
    img: "/images/doctor_03.webp",
  },
  {
    name: "Dr. Manish Jain",
    specialty: "Contact Lenses",
    desc: "Thin lenses placed directly on the eye to correct vision...",
    icon: <FaEye />,
    img: "/images/d1.webp",
  },
  {
    name: "Dr. Shilpa Kumari",
    specialty: "Refractive Surgery",
    desc: "Laser used to reshape the cornea and fix refractive errors.",
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

      <Carousel>
        {doctors.map((doc, i) => (
          <DoctorCard key={i} {...doc} />
        ))}
      </Carousel>
    </section>
  );
};

export default Doctors;
