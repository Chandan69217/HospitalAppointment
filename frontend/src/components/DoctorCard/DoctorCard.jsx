import React from "react";
import { FaStethoscope, FaEye } from "react-icons/fa";
import "./DoctorCard.css";
import { useNavigate } from "react-router-dom";
import { serviceIconsMap } from "../../utilitizes/Doctor'sSpecializations";



const DoctorCard = ({ _id,name, degrees, specialization, description, image, experience }) => {

    const navigate = useNavigate();
    
    const goToDetails = () => {
        navigate(`/doctor-details/${_id}`);
    };


    const Icon = serviceIconsMap[specialization];
    return (
        <div className="doctor-card">
            <div className="doctor-image">
                <img src={image} alt={name} />
                <div className="doctor-icon">{Icon ? <Icon /> : "❓"}</div>
                <div className="doctor-specialty" >
                    <div className= "doctor-specialty-icon">
                        {Icon ? <Icon /> : "❓"}
                    </div>
                    <h3>{specialization}</h3>
                </div>
            </div>

            <div className="doctor-info">
                <div className="name-experience">
                    <h4 className="doctor-name">{name}</h4>
                    <p>{experience}  {"Years"}</p>
                </div>
                {degrees && (
                    <h3 className="doctor-degree">
                        {Array.isArray(degrees) ? degrees.join(", ") : degrees}
                    </h3>
                )}
                <p className="doctor-desc">{description}</p>
                <button className="read-btn" onClick={goToDetails}>READ MORE</button>
            </div>
        </div>
    );
};

export default DoctorCard;





