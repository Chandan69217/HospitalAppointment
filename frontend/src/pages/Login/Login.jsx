import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Styles/Login.css";
import axios from "axios";
import InputField from "../../components/Widgets/InputFields/InputField";
import Button from "../../components/Widgets/Buttons/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [passwordType, setPasswordType] = useState("password");
  const [icon, setIcon] = useState(<i class="fa-solid fa-eye-slash"></i>);

  const toggleVisibility = () => {
    if (passwordType === "password") {
      setIcon(<i class="fa-solid fa-eye"></i>);
      setPasswordType("text");
    } else {
      setIcon(<i class="fa-solid fa-eye-slash"></i>);
      setPasswordType("password");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8585/api/login", { email, password });

      if (response.status >= 200 && response.status < 300) {
        const { token, role, user } = response.data;

        localStorage.setItem("authToken", token);
        localStorage.setItem("role", role);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", true);

        if (role === "admin") navigate("/admin");
        else if (role === "patient") navigate("/patient");
        else if (role === "doctor") navigate("/doctor");
        else console.log("Invalid Role");
      } else {
        alert("Invalid login credentials!");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-left">
          <img
            src="\images\illustration\login-illustration.jpg"
            alt="Hospital Illustration"
          />
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <h2>Welcome Back</h2>
          <p className="subtitle">Login with your details to continue</p>


          <InputField 
          label="Enter your email"
          value={email}
          placeholder="Enter your email"
          onChange={(e)=> setEmail(e.target.value)}
          required = {true}
          />

          <InputField 
          label={"Enter your password"}
          value={password}
          type={passwordType}
          onChange={(e) => setPassword(e.target.value)}
          required={true}
          onToggle={toggleVisibility}
          showToggle={true}
          placeholder={"Enter your password"}
          icon={icon}
          />
        

          <Button
          label={"Login"}
          type="submit"
          />
         

          <p className="signup-text">
            Don’t have an account? <Link to="/registration">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
