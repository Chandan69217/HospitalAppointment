import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import "./AllSpecializedDoctors.css";
import { Urls } from "../../utilitizes/Urls";
import Loader from "../Loader/Loader";

const AllSpecializedDoctors = () => {
    const { specialization } = useParams(); // Neurology Care
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                setLoading(true);

                const response = await axios.get(
                    `${Urls.BaseUrl}${Urls.GetDoctorCategories}${specialization}`
                );

                setDoctors(response.data);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setError("Failed to load doctors. Try again later.");
            }
        };

        fetchDoctors();
    }, [specialization]);

    if (loading) return <Loader/>;

    if (error)
        return <div className="error-message">{error}</div>;

    if (doctors.length === 0)
        return <div className="no-data">No doctors found for this category.</div>;

    return (
        <div className="specialized-page">

            <div className="special-header-box">
                <h2 className="special-header">{specialization} Specialists</h2>
                <p className="special-sub">
                    Expert doctors providing trusted & advanced healthcare.
                </p>
            </div>

            <div className="doctor-grid">
                {doctors.map((doc) => (
                    <DoctorCard
                        key={doc._id}
                        _id={doc._id}
                        name={doc.name}
                        degrees={doc.degrees}
                        specialization={doc.specialization}
                        description={doc.description}
                        image={doc.image}
                        experience={doc.experience}
                    />
                ))}
            </div>
        </div>
    );

    return (
        <div className="specialized-page">
            <h2 className="special-header">{specialization} Specialists</h2>

            <div className="doctor-grid">
                {doctors.map((doc) => (
                    <DoctorCard
                        key={doc._id}
                        _id={doc._id}
                        name={doc.name}
                        degrees={doc.degrees}
                        specialization={doc.specialization}
                        description={doc.description}
                        image={doc.image}
                        experience={doc.experience}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllSpecializedDoctors;
