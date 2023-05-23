import React, { useState } from "react";
import axios from "axios";

const FormRegister = () => {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const sendForm = () => {
  //     axios({
  //       method: "post",
  //       url: `http://localhost:8000/titanic/users`,
  //       withCredentials: true,
  //       data: {
  //         lastname,
  //         firstname,
  //         email,
  //         password,
  //       },
  //     });
  //   };

  //   const clearForm = () => {
  //     setLastname(""), setFirstname(""), setEmail(""), setPassword("");
  //   };

  const submit = () => {
    if (!email || !password) {
      alert("veuillez renseigner email et message");
    } else {
      try {
        // sendForm();
        // clearForm();
        alert("le formulaire est envoyé");
      } catch (error) {
        alert(`le formulaire ne s'est pas envoyé.` + error);
      }
    }
  };

  return (
    <div id="formregister">
      <h2>Créer votre compte</h2>
      <form method="POST">
        <div class="formregister">
          <input
            type="text"
            placeholder="Nom"
            name="lastname"
            id="lastname"
            onChange={(e) => setLastname(e.target.value)}
            required
            autocomplete="off"
          />
          <input
            type="text"
            placeholder="Prénom"
            name="firstname"
            id="firstname"
            onChange={(e) => setFirstname(e.target.value)}
            required
            autocomplete="off"
          />
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
export default FormRegister;
