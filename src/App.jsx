import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import IMC from "./pages/IMC";
import Age from "./pages/Age";
import Clock from "./pages/Clock";

function App() {
  return (
    <div className="w-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imc-calculator" element={<IMC />} />
        <Route path="/age-calculator" element={<Age />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
