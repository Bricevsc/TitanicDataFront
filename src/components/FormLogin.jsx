import React, { useState } from "react";
import axios from "axios";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const sendForm = () => {
  //     axios({
  //       method: "post",
  //       url: `http://localhost:8000/titanic/users`,
  //       withCredentials: true,
  //       data: {
  //         email,
  //         password,
  //       },
  //     });
  //   };

  //   const clearForm = () => {
  //   setEmail(""), setPassword("");
  //   };
  const submit = () => {
    if (!email || !password) {
      alert("veuillez renseigner email et message");
    } else {
      try {
        // sendForm();
        // clearForm();
        alert("vous êtes connecté");
      } catch (error) {
        alert(`le formulaire ne s'est pas envoyé.` + error);
      }
    }
  };
  return (
    <div id="formlogin">
        <h2>Connexion</h2>
      <form method="POST">
        <div class="formlogin">
          <input
            type="email"
            placeholder="Adresse e-mail"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            autocomplete="off"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autocomplete="off"
          />
          <button className="sendbutton">📨</button>
          {/* onClick={submit} */}
        </div>
      </form>
    </div>
  );
};
export default FormLogin;
