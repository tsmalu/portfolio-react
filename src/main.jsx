import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Importando TODOS os estilos globais corretamente
import "./styles/base.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/heroSection.css";
import "./styles/projectHighlight.css";
import "./styles/projectCard.css";
import "./styles/contactForm.css";
import "./styles/projects.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
