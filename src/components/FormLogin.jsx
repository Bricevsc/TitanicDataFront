import React, { useState } from "react";
import axios from "axios";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendForm = () => {
    axios({
      method: "post",
      url: `http://localhost:8000/`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    });
  };

  const submit = () => {
    if (!email || !password) {
      alert("veuillez renseigner email et message");
    } else {
      try {
        sendForm();
        clearForm();
        alert("vous êtes connecté");
      } catch (error) {
        alert(`le formulaire ne s'est pas envoyé.` + error);
      }
    }
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <div id="formlogin">
      <h2>Connexion</h2>
      <form method="POST">
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
          <button className="sendbutton" onClick={submit}>
            📨
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
