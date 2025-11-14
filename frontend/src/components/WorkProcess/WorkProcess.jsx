import React from "react";
import "./WorkProcess.css";

const steps = [
  {
    number: "01",
    title: "Make An Appointment",
    desc: "The first step in our process is to welcome our patients and ensure they have a great experience.",
    img: "/images/w1.jpg", // 👈 apna path
    color: "#d21f3c",
  },
  {
    number: "02",
    title: "Check-Ups",
    desc: "Once the patient is checked in, healthcare professionals conduct a thorough evaluation.",
    img: "/images/w2.jpg",
    color: "#0075c9",
  },
  {
    number: "03",
    title: "Get Report",
    desc: "Analyzing the result of diagnostic tests & incorporating them into the diagnosis.",
    img: "/images/w3.jpg",
    color: "#d21f3c",
  },
  {
    number: "04",
    title: "Patient Discharge",
    desc: "Our commitment to our patients extends beyond the initial visit. We ensure continuity of care.",
    img: "/images/w4.jpg",
    color: "#004d80",
  },
];

const WorkProcess = () => {
  return (
    <section className="work-process-section">
      <div className="work-header">
        <div className="badge">
          <span>🩺 WORK PROCESS</span>
        </div>
        <h2>
          Let’s See How We <span>Work Process</span>
        </h2>
      </div>

      <div className="work-steps">
        {steps.map((step, index) => (
          <div className="work-step" key={index}>
            <div
              className="work-img"
              style={{ borderColor: step.color }}
            >
              <img src={step.img} alt={step.title} />
              <div
                className="step-number"
                style={{ backgroundColor: step.color }}
              >
                {step.number}
              </div>
            </div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
