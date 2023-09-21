import React, { Component, useState } from "react";
import "./login.css"
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://api.bibintunisie.com/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
      
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data._id);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./";
        }
      });
  }

  return (
    <section class="container1 forms">
    <div class="form login">
        <div class="form-content">
            <header class="h">Connexion</header>
        <form onSubmit={handleSubmit}>
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
              type="password"
              class="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
        <i class="fa fa-eye-slash eye-icon" aria-hidden="true"></i>
                    
                    </div>
                    <div class="field button-field">
                        <button type="submit">Connexion</button>
                    </div>
         

                    <div class="form-link">
                        <a href="#" class="forgot-pass">Mot de passe oublié</a>
                    </div>
                    <div class="form-link">
                        <span>Vous avez déjà un compte? <a href="/signup" class="signup-link">s'inscrire</a></span>
                    </div>
        </form>
      </div>
    </div>
    </section>
  );
}