import React  from "react";
import '../styles/Login.css'
import { Link } from "react-router-dom";
import Bgfood from "../assets/food.jpg";
import { useEffect, useState } from 'react';
function Login(){
  const initialValues = { username: "", email: "", password: "" };
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
    <div className="log-container" style={{ backgroundImage: `url(${Bgfood})` }}>
    <div className="containerlog">
      <form onSubmit={handleSubmit} className="formlog">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="messagesuccess">Login Successful!</div>
      ) : (
        <pre>1</pre>
      )}
        <h1>Login Form</h1>
          <div className="field">
            <label className="textlabellog">Username</label>
            <input
            className="inputlog"
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p className="plog">{formErrors.username}</p>
          <div className="field">
            <label className="textlabellog">Email</label>
            <input
            className="inputlog"
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p className="plog">{formErrors.email}</p>
          <div className="field">
            <label className="textlabellog">Password</label>
            <input
            className="inputlog"
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p className="plog">{formErrors.password}</p>
          <button className="btnlog">Login</button>
          <br/>
          <Link to="/forgot" className="forgotlink"> Forget Password?</Link>
          <Link to="/signup" className="signuplink"> Don't have an account?</Link>
      </form>
    </div>
    </div>
  );
}
export default Login;
