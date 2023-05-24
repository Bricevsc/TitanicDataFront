import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FormRegister = () => {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendForm = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8000/register", {
      lastname,
      firstname,
      email,
      password,
    });
    setLastname("");
    setFirstname("");
    setEmail("");
    setPassword("");
  };

  return (
    <div id="formregister">
      <h2>Créer votre compte</h2>
      <form onSubmit={sendForm}>
        <div className="formregister">
          <input
            type="text"
            placeholder="Nom"
            name="lastname"
            id="lastname"
            onChange={(e) => setLastname(e.target.value)}
            required
            autoComplete="off"
          />
          <input
            type="text"
            placeholder="Prénom"
            name="firstname"
            id="firstname"
            onChange={(e) => setFirstname(e.target.value)}
            required
            autoComplete="off"
          />
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
      <Link to={'/'}>Vous avez un compte ?</Link>
    </div>
  );
};
export default FormRegister;
