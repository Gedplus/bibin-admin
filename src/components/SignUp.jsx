import React, { useState } from "react"
import "./login.css"
import { Link, useNavigate } from "react-router-dom";
import { signup } from "state/api";
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import Alert from '@mui/material/Alert';
const Signup1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erreur, setErreur] = useState(false);
  const [passwordconf, setPasswordconf] = useState("");
  const [type, setType] = useState('password');
const [icon, setIcon] = useState(eyeOff);

  const navigate = useNavigate();
  const handleToggle = () => {
    if (type==='password'){
       setIcon(eye);
       setType('text')
    } else {
       setIcon(eyeOff)
       setType('password')
    }
 }
  const handleFormSubmit = async(values) => {
    if (password ==  passwordconf ) {
    const user ={
      name: name ,
      email:email, 
      password: password,
      role:"admin"

    };
    console.log(user)
 signup(user);
  await navigate("/")

}else {
  setErreur(true)
}
  }

  return (
    <>
      <section class="container1 forms">
        <div class="form signup">
            <div class="form-content">
                <header class="h">S'inscrire</header>
                <div>
                <div class="field input-field">
                        <input type="text" placeholder="Non et prénom" class="input" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div class="field input-field">
                        <input type="email" placeholder="Email" class="input" onChange={(e) => setEmail(e.target.value)} />
                    </div>
               
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
                    <div class="field input-field">
                    <input
                  type={type}
                  name="password"
                  placeholder="Confirme mot de passe"
     
                  onChange={(e) => setPasswordconf(e.target.value)}
                  autoComplete="current-password"
             />
             <span className="eye-icon" onClick={handleToggle}>
                  <Icon icon={icon} size={25}/>
              </span>
            {erreur==true ?(<Alert severity="error">La confirmation du mot de passe ne correspond pas</Alert>):(<></>)} 
                    </div>
                    <br/>
                    <br/>
                    <div class="field button-field">
                        <button onClick={handleFormSubmit}>S'inscrire</button>
                    </div>
                
                    <div class="form-link">
                        <span>Vous avez déjà un compte?<Link to="/" class="login-link">Connexion</Link></span>
                    </div>
                </div>
            </div>
           
            
        </div>
      </section>
    </>
  )
}

export default Signup1
