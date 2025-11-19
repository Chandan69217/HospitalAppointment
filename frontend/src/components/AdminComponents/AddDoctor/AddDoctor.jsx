import React, { useRef, useState,useEffect } from "react";
import axios from "axios";
import { IoCloseCircleOutline } from "react-icons/io5";
import InputField from "../../Widgets/InputFields/InputField";
import SelectField from "../../Widgets/SelectFields/SelectFields";
import Button from "../../Widgets/Buttons/Button";
import { services } from "../../../utilitizes/Doctor'sSpecializations";
import './AddDoctor.css';



const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const AddDoctor = ({ onClose, onAddDoctor }) => {
  const popRef = useRef();

  const [formData, setFormData] = useState({
    Name: "",
    Contact: "",
    Email: "",
    Specialization: "",
    Experience: "",
    Password: "",
    Description: "",
    Degrees: [""],
    WorkingHours: daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: { from: "09:00", to: "17:00" } }), {}),
  });

  const [icon, setIcon] = useState(<i className="fa-solid fa-eye-slash"></i>);
  const [passwordType, setPasswordType] = useState("password");
  const toggleVisibility = () => {
    if (passwordType === "password") {
      setIcon(<i className="fa-solid fa-eye"></i>);
      setPasswordType("text");
    } else {
      setIcon(<i className="fa-solid fa-eye-slash"></i>);
      setPasswordType("password");
    }
  };

  const closePopup = (e) => {
    if (popRef.current === e.target) onClose();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, Img: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { Name, Contact, Email, Specialization, Experience, Password, Description,Img,Degrees,WorkingHours } = formData;

    // Basic validations
    // if (!name || !contact || !email || !specialization || !experience || !password || !description) {
    //   alert("All fields are required!"); return;
    // }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(Contact)) { alert("Invalid phone number"); return; }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(Email)) { alert("Invalid email"); return; }
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if (!passwordPattern.test(Password)) { alert("Weak password"); return; }

    try {
      console.log(formData)
      const response = await axios.post("http://localhost:8585/api/doctor", formData);
      if (response.status === 201) {
        alert("Doctor Added Successfully");
        setFormData({
          Name: "",
          Contact: "",
          Email: "",
          Specialization: "",
          Experience: "",
          Password: "",
          Description: "",
          Degrees: [""],
          WorkingHours: daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: { from: "", to: "" } }), {}),
          Image: ""
        });
        onAddDoctor(formData);
        onClose();
      }
    } catch (err) {
      console.error(err.message);
      alert("Failed to add doctor");
    }


  };

  return (
    <div className="add_doctor">

      <h2 className="form_title">Add New Doctor</h2>

      <form onSubmit={handleSubmit} className="doctor_form">

        {/* Image Upload */}
        {/* <InputField
          type="file"
          label="Upload Image"
          onChange={handleImageChange}
          required
        /> */}

        <InputField label="Image" value={formData.Image} onChange={handleChange} placeholder="Enter image URl" required />

        <div className="grid-from ">
          <InputField label="Name" value={formData.Name} onChange={handleChange} placeholder="Enter name" required />

          <InputField type='number' label="Contact" value={formData.Contact} onChange={handleChange} placeholder="10-digit number" required />

          <SelectField
            label="Specialization"
            options={services.map(s => s.title)}
            value={formData.Specialization}
            onChange={handleChange}
            required
          />

          <InputField label="Experience" type="number" value={formData.Experience} onChange={handleChange} placeholder="Years" required />

          <InputField label="Email" type="email" value={formData.Email} onChange={handleChange} placeholder="Email" required />

          <InputField
            label="Password"
            type={passwordType}
            value={formData.Password}
            onChange={handleChange}
            placeholder="Password"
            showToggle
            onToggle={toggleVisibility}
            icon={icon}
            required
          />
        </div>

        <InputField
          label="Description"
          isTextArea={true}
          rows={4}
          type="text"
          value={formData.Description}
          onChange={handleChange}
          placeholder="Doctor description"
          required
        />

        {/* Degrees */}
        <DegreesSection formData={formData} setFormData={setFormData} />

        {/* Working Hours */}
        <WorkingHoursSelector formData={formData} setFormData={setFormData} />

        <div className="add-btn">
          <Button label="Add Doctor" type="submit" />
        </div>

      </form>
    </div>
  );


  return (
    <div className="add_doctor" ref={popRef} onClick={closePopup}>
      <div className="add_doctor_card">
        <div className="close_popup">
          <h2 className="form_title">Add New Doctor</h2>
          <IoCloseCircleOutline onClick={onClose} />
        </div>
        <form onSubmit={handleSubmit} className="doctor_form">
          {/* Image Upload */}
          <InputField type="file" label="Upload Image" onChange={handleImageChange} required />
          <div className="grid-from">
            <InputField label="Name" value={formData.Name} onChange={handleChange} placeholder="Enter name" required />
            <InputField type= 'number' label="Contact"  value={formData.Contact} onChange={handleChange} placeholder="10-digit number" required />
            <SelectField label="Specialization"  options={services.map(s => s.title)} value={formData.Specialization} onChange={handleChange} required />
            <InputField label="Experience" type="number" value={formData.Experience} onChange={handleChange} placeholder="Enter experience (Years)" required />
            <InputField label="Email" type="email" value={formData.Email} onChange={handleChange} placeholder="Email" required />
            <InputField label="Password" type={passwordType} value={formData.Password} onChange={handleChange} placeholder="Password" showToggle onToggle={toggleVisibility} icon={icon} required />
          </div>

          <InputField label="Description" isTextArea={true} name="description" rows={4} type="text" value={formData.Description} onChange={handleChange} placeholder="Doctor description" required />
          {/* Degrees */}

          <DegreesSection formData={formData} setFormData={setFormData} />

          {/* Working Hours */}
          <WorkingHoursSelector formData={formData} setFormData={setFormData} />
          <div className="add-btn">
            <Button
              label="Add Doctor"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  )
};


const DegreesSection = ({ formData, setFormData }) => {

  const handleDegreeChange = (index, value) => {
    const updated = [...formData.Degrees];
    updated[index] = value;
    setFormData({ ...formData, Degrees: updated });
  };

  const addDegreeField = () => {
    setFormData({ ...formData, Degrees: [...formData.Degrees, ""] });
  };

  return (
    <div className="degrees-section">
      <div className="degrees-grid">
        {formData.Degrees.map((degree, index) => (
          <InputField
            key={index}
            label={`Degree ${index + 1}`}
            type="text"
            value={degree}
            onChange={(e) => handleDegreeChange(index, e.target.value)}
            placeholder="Enter degree"
          />
        ))}
      </div>

      <button type="button" className="btn" onClick={addDegreeField}>
        Add Another Degree
      </button>
    </div>
  );
};



const WorkingHoursSelector = ({ formData, setFormData }) => {
  const [selectedDay, setSelectedDay] = useState("");
  const [fromTime, setFromTime] = useState("09:00");
  const [toTime, setToTime] = useState("17:00");     


  const handleAddDay = () => {
    if (!selectedDay || !fromTime || !toTime)
      return alert("Select day & set times");

    // If user selected ALL DAYS
    if (selectedDay === "All") {
      const updatedHours = {};

      daysOfWeek.forEach(day => {
        updatedHours[day] = { from: fromTime, to: toTime };
      });

      setFormData({
        ...formData,
        WorkingHours: updatedHours
      });

    } else {
      // Normal single day update
      setFormData({
        ...formData,
        WorkingHours: {
          ...formData.WorkingHours,
          [selectedDay]: { from: fromTime, to: toTime }
        }
      });
    }

    setSelectedDay("");
  };


  return (
    <div className="working_hours_selector">
      <label>Set Working Hours</label>

      <div className="working_hours_grid">
        {Object.keys(formData.WorkingHours).map(day => (
          <div className="working_hours_card" key={day}>
            <h4>{day}</h4>
            <p>
              From: <strong>{formData.WorkingHours[day].from}</strong>
              &nbsp;to&nbsp;
              <strong>{formData.WorkingHours[day].to}</strong>
            </p>
          </div>
        ))}
      </div>

      <div className="working_hours_row">
        <SelectField
          label="Day"
          options={["All", ...daysOfWeek]}
          value={selectedDay}
          onChange={(e) => {
            const day = e.target.value;    // new selected day
            setSelectedDay(day);

            if (day !== "All" && formData.WorkingHours[day]) {
              setFromTime(formData.WorkingHours[day].from);
              setToTime(formData.WorkingHours[day].to);
            }
          }}
        />

        <InputField
          label="From"
          type="time"
          value={fromTime}
          onChange={(e) => setFromTime(e.target.value)}
        />

        <InputField
          label="To"
          type="time"
          value={toTime}
          onChange={(e) => setToTime(e.target.value)}
        />
      </div>

      <button className="btn" type="button" onClick={handleAddDay}>
        Add
      </button>
    </div>
  );
};


export default AddDoctor;

