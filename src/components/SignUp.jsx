import React, { useState } from "react"
import "./login.css"
import { useNavigate } from "react-router-dom";

const Signup1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const role = "admin"
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

 
    fetch("https://api.bibintunisie.com/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        role,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
       
       
      });
      navigate('/login');

  }

  return (
    <>
      <section class="container1 forms">
        <div class="form signup">
            <div class="form-content">
                <header class="h">S'inscrire</header>
                <form onSubmit={handleSubmit}>
                <div class="field input-field">
                        <input type="text" placeholder="Non et prénom" class="input" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div class="field input-field">
                        <input type="email" placeholder="Email" class="input" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div class="field input-field">
                        <input type="password" placeholder="Mot de passe" class="password" onChange={(e) => setPassword(e.target.value)}  />
                       
                    
                    </div>
                    <div class="field input-field">
                        <input type="password" placeholder="Mot de passe" class="password"/>
                        <i class="fa fa-eye-slash eye-icon" aria-hidden="true"></i>
                    
                    </div>
                    
                    <div class="field button-field">
                        <button>S'inscrire</button>
                    </div>
                
                    <div class="form-link">
                        <span>Vous avez déjà un compte?<a href="/login" class="login-link">Connexion</a></span>
                    </div>
                </form>
            </div>
           
            
        </div>
      </section>
    </>
  )
}

export default Signup1
