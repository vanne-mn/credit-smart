import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";

// Páginas
import Home from "./pages/Home.jsx";
import Simulador from "./pages/Simulador.jsx";
import Solicitar from "./pages/Solicitar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* En App.jsx está el Navbar */}
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="simulador" element={<Simulador />} />
          <Route path="solicitar" element={<Solicitar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
