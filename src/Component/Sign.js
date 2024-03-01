import React  from "react";
import '../styles/Sign.css'
import { Link } from "react-router-dom";
import Bgfood from "../assets/food.jpg";
import { useEffect, useState } from 'react';
function Sign(){
  const initialValues = { username: "", email: "", password: "" ,number: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.number) {
        errors.number = "Phone Number is required!";
      }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="sign-container" style={{ backgroundImage: `url(${Bgfood})` }}>
    <div className="containersign">
      <form onSubmit={handleSubmit} className="formsign">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="messagesuccess">Register successful</div>
      ) : (
        <pre>1</pre>
      )}
        <h1>Sign Up</h1>
        
          <div className="field">
            <label className="textlabelsign">Username</label>
            <input
            className="inputsign"
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p className="plog">{formErrors.username}</p>
          <div className="field">
            <label className="textlabelsign">Email</label>
            <input
            className="inputsign"
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p className="plog">{formErrors.email}</p>
          <div className="field">
            <label className="textlabelsign">Password</label>
            <input
            className="inputsign"
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p className="plog">{formErrors.password}</p>
          <div className="field">
            <label className="textlabelsign">Phone Number</label>
            <input className="inputsign" type="number" name="number" placeholder="Phone no" 
             value={formValues.number}
             onChange={handleChange}/>
          </div>
          <p className="plog">{formErrors.number}</p>
   
      <input type="checkbox" className="check"/>
      <label className="check1">I agree to terms and conditions</label> 
    
          <button className="btnsign">Sign Up</button>
      </form>
    </div>
    </div>
  );
}
export default Sign;
