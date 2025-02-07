import React from "react";
import { Link } from "react-router-dom"; // ✅ Adicionando import correto do React Router
import projectHighlightImg from "/src/assets/imgs/ESG/esg-project-destaque.png";
import "../styles/projectHighlight.css";

function ProjectHighlight() {
  return (
    <section className="project-highlight container">
      <div className="project-highlight-text">
        <h2>Plataforma ESG para empresas</h2>
        <p>O cliente buscava uma solução que ajudasse empresas com a implantação de ações ESG.</p>
        <Link to="/projetos/esg">
          <button>Ver projeto</button>
        </Link>
      </div>
      <div className="project-highlight-img">
        <Link to="/projetos/esg">
          <img src={projectHighlightImg} alt="Tela inicial da plataforma de ESG" />
        </Link>
      </div>
    </section>
  );
}

export default ProjectHighlight;
