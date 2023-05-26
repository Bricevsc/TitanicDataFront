import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { RegisterPage } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import Navbar from "./components/navbar";
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
