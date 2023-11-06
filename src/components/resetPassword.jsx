import React, { Component, useState } from "react";
import "./login.css"
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import { ResetPassword, loginAdmin } from "state/api";
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
export default function Reset() {

  const [password, setPassword] = useState("");
  const [type, setType] = useState('password');
const [icon, setIcon] = useState(eyeOff);
const {token} = useParams();
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

      password: password,
  

    };
    const response = await ResetPassword(user ,token  );
      
    window.location.href = "/";
  }

  return (
    <section class="container1 forms">
    <div class="form login">
        <div class="form-content">
        <header class="h">Réinitialisez votre mot de passe</header>
        <div>
      

                    <div class="field input-field">
      
                    <input
                  type={type}
                  name="password"
                  placeholder="Mot de passe"
     
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
         

              
        </div>
      </div>
    </div>
    </section>
  );
}