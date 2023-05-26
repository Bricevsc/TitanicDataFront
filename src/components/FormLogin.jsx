import React, { useState } from "react";
import axios from "axios";
import { Link, redirect } from "react-router-dom";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [connected, setConnected] = useState(true);

  const sendForm = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:8000/", {
      email,
      password,
    });
    setEmail("");
    setPassword("");
    if (response.headers["x-auth-token"]) {
      localStorage.setItem("authToken", response.headers["x-auth-token"]);
      redirect("/dashboard");
      return;
    } else {
      setConnected(false);
    }
  };

  return (
    <div id="formlogin">
      <h2>Connexion</h2>
      {Boolean(!connected) && (
        <p className="warning">Une erreur s'est produite.</p>
      )}
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
      <Link to={"/register"}>Vous n'avez pas de compte ?</Link>
    </div>
  );
};

export default FormLogin;
