import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  const handleChange = (e) => {
    // Update the form data when input fields change
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request with Axios to your backend API
      const response = await axios.post("http://localhost:3005/api/v1/user/create-user", formData); // Replace with your actual API endpoint
      console.log("Server Response:", response.data);

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
        name: "",
        email: "",
        password: "",
        location: "",
      });
  }

  return (
    <div className="container text-white">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control shadow-none"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

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

        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control shadow-none"
            name="location"
            value={formData.location}
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
            Submit
          </button>
          <Link to="/login" className="btn btn-small btn-danger">
            Already User
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
