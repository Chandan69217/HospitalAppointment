import React from "react";
import { FaStethoscope, FaEye } from "react-icons/fa";
import "./DoctorCard.css";



const DoctorCard = ({ name, specialty, desc, icon, img }) => {
    return (
        <div className="doctor-card">
            <div className="doctor-image">
                <img src={img} alt={name} />
                <div className="doctor-icon">{icon}</div>
            </div>

            <div className="doctor-info">
                <h4 className="doctor-name">{name}</h4>
                <h3 className="doctor-specialty">{specialty}</h3>
                <p className="doctor-desc">{desc}</p>
                <button className="read-btn">READ MORE</button>
            </div>
        </div>
    );
};

export default DoctorCard;
