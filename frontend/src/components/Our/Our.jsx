// import React from "react";
// import "./Our.css";
// import { FaHeartbeat, FaTeeth, FaBrain, FaFemale, FaEye, FaBone, FaStethoscope } from "react-icons/fa";
// import { GiKidneys } from "react-icons/gi";

// const services = [
//   { icon: <FaStethoscope />, title: "Internal Medicine", doctors: "30+ Doctors" },
//   { icon: <FaTeeth />, title: "Dental Care", doctors: "20+ Doctors" },
//   { icon: <GiKidneys />, title: "Urology Care", doctors: "20+ Doctors" },
//   { icon: <FaBrain />, title: "Neurology Care", doctors: "10+ Doctors" },
//   { icon: <FaFemale />, title: "Gynecologists", doctors: "30+ Doctors" },
//   { icon: <FaEye />, title: "Ophthalmology", doctors: "24+ Doctors" },
//   { icon: <FaBone />, title: "Orthopedics", doctors: "26+ Doctors" },
//   { icon: <FaHeartbeat />, title: "Cardiology", doctors: "20+ Doctors" },
// ];

// const Our = () => {
//   return (
//     <section className="services-section">
//       <div className="services-header">
//         <div className="badge">
//           <span className="icon">🩺</span>
//           <span>OUR SERVICE</span>
//         </div>
//         <h2>Our HumanCare Service</h2>
//       </div>

//       <div className="services-grid">
//         {services.map((service, index) => (
//           <div className="service-card" key={index}>
//             <div className="service-icon">{service.icon}</div>
//             <h3>{service.title}</h3>
//             <p>{service.doctors}</p>
//             <button>READ MORE</button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Our;



import React, { useEffect, useState } from "react";
import "./Our.css";
import { Urls } from "../../utilitizes/Urls";
import axios from "axios";
import { serviceIconsMap } from "../../utilitizes/Doctor'sSpecializations";




const Our = () => {
  const [doctorCounts, setDoctorCounts] = useState({});

  const fetchSpecializationData = async () => {
    try {
      const response = await axios.get(`${Urls.BaseUrl}${Urls.GetAllSpecializedDoctors}`);
      const data = response.data;

      if (response.status == 200) {
        setDoctorCounts(data['data'])
      }
    } catch (err) {
      // alert("API Error:", err);
      console.log("API Error:", err);
    }
  };


  useEffect(() => {
    fetchSpecializationData();
  }, []);

  return (
    <section className="services-section">
      <div className="services-header">
        <div className="badge">
          <span className="icon">🩺</span>
          <span>OUR SERVICE</span>
        </div>
        <h2>Our HumanCare Service</h2>
      </div>

      {doctorCounts && (
        <div className="services-grid">
          {Object.entries(doctorCounts).map(([key, value], index) => {

            const count = value?.length || 0;
            const Icon = serviceIconsMap[key];
            return (
              <div className="service-card" key={index}>
                <div className="service-icon">
                  {Icon ? <Icon /> : "❓"}
                </div>

                <h3>{key}</h3>
                <p>{count} Doctors</p>

                <button>READ MORE</button>
              </div>
            );
          })}
        </div>
      )}


      {/* <div className="services-grid">
        {
        services.map((service, index) => {
          const apiKey = service.title;
          const count = doctorCounts[apiKey]?.length || 0;

          const Icon = service.icon; // grab the component

          return (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <Icon/>
              </div>
              <h3>{service.title}</h3>
              <p>{count} Doctors</p>
              <button>READ MORE</button>
            </div>
          );
        })}
      </div> */}

    </section>
  );
};

export default Our;
