import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios"; // Import Axios

const Login = () => {

  let navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // Update the form data when input fields change
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request with Axios to your backend API
      const response = await axios.post("http://localhost:3005/api/v1/user/login", formData); // Replace with your actual API endpoint
      
      console.log("Server Response:", response.data);

      if(response.data.message === "success"){
        navigate('/')
      }

      clearAllInput();
      // Handle success or redirect the user
      // Example: history.push("/login");
    } catch (error) {
      // Handle error (e.g., show error message to the user)
      console.error("Error:", error);
    }
  };

  const clearAllInput = ()=>{
    setFormData({
        email: "",
        password: "",
      });
  }

  return (
    <div className="container text-white">
      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control shadow-none"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control shadow-none"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <button type="submit" className="btn btn-small btn-success">
            Login
          </button>
          <Link to="/sign-up" className="btn btn-small btn-danger">
            I'm a new User
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
