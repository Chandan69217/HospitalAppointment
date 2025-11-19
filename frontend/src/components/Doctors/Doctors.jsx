import React, { Component } from "react";
import Carousel from "../Carousel/Carousel";
import DoctorCard from "../DoctorCard/DoctorCard";
import "./Doctors.css";
import { FaStethoscope, FaEye } from "react-icons/fa";
import { Urls } from "../../utilitizes/Urls";
import axios from "axios";





class Doctors extends Component {

  constructor(props) {
    super(props);
    this.state = {
      doctors: []
    };
  }



  componentDidMount() {
    this.fetchDoctors();
  }

  fetchDoctors = async () => {
    try {
      const response = await axios.get(`${Urls.BaseUrl}${Urls.GetAllDoctors}`);
    

      if (response.status === 200) {
        console.log(response.data)
        this.setState({ doctors: response.data});
      }
    } catch (error) {
      console.log("API Error:", error);
      // alert("Failed to load doctors!");
    }
  };



  render() {
    return (
      <section className="doctors-section">
        <div className="doctors-header">
          <div className="badge">
            <div className="icon">
              <i class="fa-solid fa-user-doctor"></i>
            </div>
            <span>EXPERT DOCTORS</span>
          </div>
          <h2>Meet Our Professional Doctors</h2>
        </div>

        <Carousel>
          {this.state.doctors.map((doc, index) => (
            <DoctorCard key={index} {...doc} />
          ))}
        </Carousel>
      </section>
    );
  }
}

export default Doctors;

