import { Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Certificate from "./pages/Certificate";
import Service from "./pages/Service";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/Certificate" element={<Certificate />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
