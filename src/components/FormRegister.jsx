import React, { useState } from "react";
import axios from "axios";

const FormRegister = () => {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendForm = async (e) => {
    e.preventDefault();
    // axios({
    //   method: "post",
    //   url: `http://localhost:8000/register`,
    //   withCredentials: true,
    //   data: {
    // lastname,
    //   firstname,
    //   email,
    //   password,
    //   },
    // });
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
    </div>
  );
};
export default FormRegister;
