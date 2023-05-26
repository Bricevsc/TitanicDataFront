import React, { useState } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const FormDashboard = () => {
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [pclass, setPclass] = useState("");
  const [passengerDead, setPassengerDead] = useState("1");
  const [passengerAlive, setPassengerAlive] = useState("1");

  const sendForm = async (e) => {
    console.log(sex, age, pclass);
    e.preventDefault();
    const token = localStorage.getItem("authToken");
    const response = await axios.post(
      "http://localhost:8000/dashboard",
      {
        data: { sex, age, pclass },
      },
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    console.log(response);
  };

  const data = {
    labels: ["Nombre de passagers mort", "Nombre de passagers en vie"],
    datasets: [
      {
        label: "Passengers",
        data: [passengerDead, passengerAlive],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const clearData = () => {
    setPassengerDead("");
    setPassengerAlive("");
  }

  return (
    <div id="formdashboard">
      <h2>Dashboard Data</h2>
      <form onSubmit={sendForm}>
        <div className="formdashboard">
          <select
            name="select"
            onChange={(e) => setSex(e.target.value)}
            autoComplete="off"
          >
            <option value="all" selected>
              Tous 
            </option>
            <option value="male">Homme</option>
            <option value="female">Femme</option>
          </select>
          <input
            type="text"
            placeholder="Age"
            name="age"
            maxlength="3"
            onChange={(e) => setAge(e.target.value)}
            autoComplete="off"
          />
          <select
            name="select"
            onChange={(e) => setPclass(e.target.value)}
            autoComplete="off"
          >
            <option value="1">C1</option>
            <option value="2">C2</option>
            <option value="3">C3</option>
          </select>
          <button className="sendbutton">📨</button>
        </div>
      </form>
      <button className="reset" onClick={clearData}>Reset</button>
      <div className="chartBox">
        <h3>Graphique</h3>
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default FormDashboard;
