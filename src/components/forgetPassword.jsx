import React, { Component, useState } from "react";
import "./login.css"

import { forgetPassword, loginAdmin } from "state/api";
export default function Forget() {
  const [email, setEmail] = useState("");


  const handleFormSubmit = async() => {
    const emailF ={

      email: email, 

    };
    const response = await forgetPassword(emailF);
      console.log("dddd", response.data)
   
      if (response.status == "200") {
        alert("vérifiez votre e-mail pour le lien de réinitialisation"); }
  }

  return (
    <section class="container1 forms">
    <div class="form login">
        <div class="form-content">
        <header class="h">Mot de passe oublié ?</header>
        <div>
          <p>Veuillez saisir voter email de Connexion afin de recevoir le lien de réinilisation  de votre mot de passe.</p>

          <div class="field input-field">
            <input
              type="email"
              class="input" 
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
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