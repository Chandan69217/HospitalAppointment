import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DoctorDetails.css";
import Loader from "../../Loader/Loader";
import { Urls } from "../../../utilitizes/Urls";
import { useParams } from "react-router-dom";

const DoctorDetails = () => {
    const { doctorId } = useParams(); // get doctorId from route params
    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchDoctor = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${Urls.BaseUrl}${Urls.GetAllDoctors}${doctorId}`);
                setDoctor(response.data);
                setLoading(false);
            } catch (err) {
                const message = err.response?.data?.message || "Failed to fetch doctor data";
                setError(message);
                setLoading(false);
            }
        };

        if (doctorId) fetchDoctor();
    }, [doctorId]);

    if (loading) return <Loader />;
    if (error) return <div className="error">{error}</div>;
    if (!doctor) return null;

    return (
        <div className="doctor-profile">
            <div className="image">
                <img src={doctor.image} alt={doctor.name} />
            </div>

            <div className="doctor-info">
                <h2 className="doctor-name">{doctor.name}</h2>

                {doctor.degrees && (
                    <h3 className="doctor-degree">
                        {Array.isArray(doctor.degrees) ? doctor.degrees.join(", ") : doctor.degrees}
                    </h3>
                )}

                <p className="doctor-specialization">{doctor.specialization}</p>
                <p className="doctor-experience">Experience: {doctor.experience} years</p>
                <p className="doctor-contact">Contact: {doctor.contact}</p>
                <p className="doctor-email">Email: {doctor.email}</p>
                <p className="doctor-description">{doctor.description}</p>

                <div className="doctor-working-hours">
                    <h4>Working Hours</h4>

                    <div className="working-grid">
                        {Object.entries(doctor.workingHours).map(([day, hours]) => (
                            <div key={day} className="working-card">
                                <div className="working-day">{day}</div>
                                <div className="working-time">
                                    {hours.from} - {hours.to}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DoctorDetails;
