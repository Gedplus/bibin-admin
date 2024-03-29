import React, { Component, useState } from "react";
import "./login.css"
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import { loginAdmin } from "state/api";
import { Link } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState('password');
const [icon, setIcon] = useState(eyeOff);
const handleToggle = () => {
  if (type==='password'){
     setIcon(eye);
     setType('text')
  } else {
     setIcon(eyeOff)
     setType('password')
  }
}
  const handleFormSubmit = async() => {
    const user ={

      email:email, 
      password: password,
  

    };
    const response = await loginAdmin(user);
      console.log("dddd", response.data)
        if (response.status == "200") {
          alert("login successful");
          window.localStorage.setItem("token", response.data._id);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./dashboard";
        }
  
  }

  return (
    <section class="container1 forms">
    <div class="form login">
        <div class="form-content">
            <header class="h">Connexion</header>
        <div>
          <h3>Sign In</h3>

          <div class="field input-field">
            <input
              type="email"
              class="input" 
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
               </div>
                    <div class="field input-field">
      
                    <input
                  type={type}
                  name="password"
                  placeholder="Password"
     
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
             />
             <span className="eye-icon" onClick={handleToggle}>
                  <Icon icon={icon} size={25}/>
              </span>
                    
                    </div>
                    <div class="field button-field">
                        <button type="submit" onClick={handleFormSubmit}>Connexion</button>
                    </div>
         

                    <div class="form-link">
                        <Link to="/forget-password" class="forgot-pass">Mot de passe oublié</Link>
                    </div>
                    <div class="form-link">
                        <span>Vous avez déjà un compte? <a href="/signup" class="signup-link">s'inscrire</a></span>
                    </div>
        </div>
      </div>
    </div>
    </section>
  );
}