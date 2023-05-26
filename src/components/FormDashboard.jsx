import React, { useState } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const FormDashboard = () => {
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [classe, setClasse] = useState("");
  const [passengerDead] = useState("1");
  const [passengerAlive] = useState("2");

  const data = {
    labels: ["Nombre de passagers mort", "Nombre de passagers en vie"],
    datasets: [
      {
        label: "# of Votes",
        data: [passengerDead, passengerAlive],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const sendForm = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:8000/", {
      sex,
      age,
      classe,
    });
    setSex("");
    setAge("");
    setClasse("");
  };
  console.log(sex, age, classe);
  return (
    <div id="formdashboard">
      <h2>Dashboard Data</h2>
      <form onSubmit={sendForm}>
        <div className="formdashboard">
          <select
            name="select"
            onchange={(e) => setSex(e.target.value)}
            required
            autoComplete="off"
          >
            <option value="all" selected>
              Tous
            </option>
            <option value="male">Homme</option>
            <option value="female">Femme</option>
          </select>
          <input
            type="number"
            placeholder="Age"
            name="age"
            maxlength="3"
            onChange={(e) => setAge(e.target.value)}
            required
            autoComplete="off"
          />
          <select
            name="select"
            onchange={(e) => setClasse(e.target.value)}
            required
            autoComplete="off"
          >
            <option value="class1">C1</option>
            <option value="class2">C2</option>
            <option value="class3">C3</option>
            <option value="class4">C4</option>
          </select>
          <button className="sendbutton">📨</button>
        </div>
      </form>
      <div className="chartBox">
        <h3>Graphique</h3>
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default FormDashboard;
