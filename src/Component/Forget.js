import React from 'react'
import '../styles/Forget.css'
import { Link } from "react-router-dom";
import Bgfood from "../assets/food.jpg";
function Forget() {
  return (
    <div style={{ backgroundImage: `url(${Bgfood})` }}>
    <div className="containerfor" >
  
  <form className='formfor'>
  <h1>Forget Your Password?</h1>
    <div className="inputget">
      <div className='emi'>
      <label className="textlabelget" htmlFor="email">
        Email-Id
      </label>
      <input type="email" id="email" className="inputget" placeholder='Email'/>
      </div>
      <div className='otp'>
      <label className="textlabelget" htmlFor="number" >
        Phone Number
      </label>
      <input type="email" id="email" className="inputget" placeholder='Phone no'/>
      </div>
      <button className="btnget">Send Otp</button>
      <div className='pas'>
      <label className="textlabelget" htmlFor="pwd">
        Enter Otp
      </label>
      <input type="password" id="pwd" placeholder='Enter Your Otp'/>
      </div>
      <div>
      <label className="textlabelget" htmlFor="pwd">
        Confirm Password
      </label>
      <input type="password" id="pwd" placeholder='Confirm Password'/>
      </div>
      <Link to="/login"> <button className="btnget">Confirm</button> </Link>
    </div>
  </form>
</div>
</div>
  )
}

export default Forget