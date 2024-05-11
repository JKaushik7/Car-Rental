import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";
import '../dist/styles.css';


import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import {app} from '../firebase'


// intializing auth // 
// also app id // 
const auth = getAuth(app)

const SignUp = () => {
  // modal infos
  const [name, setName] = useState("");
  const [LicenseNumber, setLicenseNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

  // using Navigate to /login after signup // 
  const Page_Jumper = useNavigate();

  // function to create user // 

  const CreateUser =  () => {

    // required before filling // 

    if(!name || !LicenseNumber || !email || !password){
      alert("please fill out the fields")
      return
    }
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      alert("sign up successfull")
      Page_Jumper('/SignIn')();
  
    })
    .catch((error) => {
      // Handle errors during registration
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Registration error:', errorCode, errorMessage);

      if (errorCode === 'auth/email-already-in-use') {
        alert('Email is already registered. Please use a different email.');
      } else {
        console.error('Registration error:', errorCode, errorMessage);
        // alert('Error during registration. Please try again.');
      }
      
    });
  }


  // taking value of modal inputs //

  // removed modal inputs // 


  // -- SakAmit -- ditched because interfering with input of lincense in and firebase // 

 

  return (
  <div className="container-signin">
    <div>
      {/* personal info */}
      <div className="booking-modal__person-info">
        <h4>PERSONAL INFORMATION</h4>
        <form className="info-form">
          <div className="info-form__2col">
            <span>
              <label>
                Name <b>*</b>
              </label>
              <input
                type="text"
                placeholder="Full Name (As Per Driving License)"
                onChange={(e) => setName(e.target.value)}
                value={name}
              ></input>
              <p className="error-modal">This field is required.</p>
            </span>
          
            <span>
              <label>
                Driving License <b>*</b>
              </label>
              <input
                onChange={(e) => setLicenseNumber(e.target.value)}
                value={LicenseNumber}
                type="text" 
                placeholder="Your License Number"
              ></input>
              <p className="error-modal ">This field is required.</p>
            </span>

          </div>

          <div className="info-form__1col">
            <span>
              <label>
                Email <b>*</b>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Enter your email address">  
              </input>
              <p className="error-modal">This field is required.</p>
            </span>

            <span>
              <label>
                PassWord <b>*</b>
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Enter Password">
              </input>
              <p className="error-modal">This field is required.</p>
            </span>

          </div>

          <span className="info-form__checkbox">
            <input type="checkbox"></input>
            <p>Please send me latest news and updates</p>
          </span>

            <button onClick={CreateUser} className="signin">SignUp</button>

            <Link className="user" to="/SignIn">
                <h4>Already a user? SignIn</h4>
            </Link>

        </form> 
      </div>
      <Footer />
    </div>
    
  </div>
  
  );
}
export default SignUp


