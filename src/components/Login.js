
import React, { useState } from "react";
import ReactDOM from "react-dom";
import bg from "../assets/images/bravoLogin.png"
import PropTypes from 'prop-types';
import {BASE_URL} from '../constants/urls';




async function loginUser(credentials) {

  console.log(JSON.stringify(credentials))
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }


function Login({ setToken }) {
  // React States
  const [errorMessages, setErrorMessages] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);


  const [username, setUserName] = useState();
  const [password, setPassword] = useState();


  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email:username,
      password
    });
    token.message  ? setErrorMessages(token.message) : setToken(token);
  }



  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>

        {errorMessages && <div className="error">{errorMessages}</div>}
        <div className="input-container">
          <label>User Email </label>
          <input type="text" name="uname" required  onChange={e => setUserName(e.target.value)}/>
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required  onChange={e => setPassword(e.target.value)}/>
          {/* {renderErrorMessage("pass")} */}
        </div>
        <div className="button-container">
          <button type="submit" >Log in</button>
        </div>
      </form>
    </div>
  );

  return (
    
    <div className="app" style={{backgroundImage: `url(${bg})`, backrgroundSize: 'cover', backgroundRepeat:'repeat', backgroundPosition: 'center'}}>
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
      
  
      </div>
    
  );
}
export default Login

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}