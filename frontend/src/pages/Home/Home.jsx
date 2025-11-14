import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import Our from "../../components/Our/Our"; // ✅ Correct path
import Doctors from "../../components/Doctors/Doctors";
import WorkProcess from "../../components/WorkProcess/WorkProcess";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <About />
      <Our />{/* ✅ Section added here */}
      <Doctors />  
       <WorkProcess />
          <Testimonials />
          <Footer/>
    </div>
  );
};

export default Home;
