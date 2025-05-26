import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Certificate from "./pages/Certificate";
import Service from "./pages/Service";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Certificate" element={<Certificate />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
