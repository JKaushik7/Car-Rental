import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../dist/styles.css';

const SignIn = () => {
  // modal infos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  // taking value of modal inputs
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZip = (e) => {
    setZipCode(e.target.value);
  };

  return (
  <div className="container-signin">
    <div>
      {/* personal info */}
      <div className="booking-modal__person-info">
        <h4>PERSONAL INFORMATION</h4>
        <form className="info-form">
          <div className="info-form__2col">
            <span>
              <label>Name <b>*</b>
              </label>
              <input
                value={name}
                onChange={handleName}
                type="text"
                placeholder="Full Name (As Per Driving License)">
              </input>
              <p className="error-modal">This field is required.</p>
            </span>
          
            <span>
              <label>
                Driving License <b>*</b>
              </label>
              <input
                value={lastName}
                onChange={handleLastName}
                type="text"
                placeholder="Your License Number"> 
              </input>
              <p className="error-modal ">This field is required.</p>
            </span>

            <span>
              <label>
                Phone Number <b>*</b>
              </label>
              <input
                value={phone}
                onChange={handlePhone}
                type="tel"
                placeholder="Enter your phone number"
              ></input>
              <p className="error-modal">This field is required.</p>
            </span>

            <span>
              <label>
                Age <b>*</b>
              </label>
              <input
                value={age}
                onChange={handleAge}
                type="number"
                placeholder="18">
              </input>
              <p className="error-modal ">This field is required.</p>
            </span>
          </div>

          <div className="info-form__1col">
            <span>
              <label>
                Email <b>*</b>
              </label>
              <input
                value={email}
                onChange={handleEmail}
                type="email"
                placeholder="Enter your email address">
              </input>
              <p className="error-modal">This field is required.</p>
            </span>
          </div>

          <span className="info-form__checkbox">
            <input type="checkbox"></input>
            <p>Please send me latest news and updates</p>
          </span>

          <Link className="signin" to="/">
              Registar / Login
            </Link>
        
        </form> 
      </div>
    </div>
  </div>
  );
};

export default SignIn;