import React, { useState } from "react";
import axios from "axios";
import { Link, redirect } from "react-router-dom";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendForm = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8000/", {
        email,
        password,
      })
      .then(function (response) {
        if (response.data.auth === true) redirect("/dashboard");
      });
    setEmail("");
    setPassword("");
  };

  return (
    <div id="formlogin">
      <h2>Connexion</h2>
      <form onSubmit={sendForm}>
        <div className="formlogin">
          <input
            type="email"
            placeholder="Adresse e-mail"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="off"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="off"
          />
          <button className="sendbutton">📨</button>
        </div>
      </form>
      <Link to={'/register'}>Vous n'avez pas de compte ?</Link>
    </div>
  );
};

export default FormLogin;
