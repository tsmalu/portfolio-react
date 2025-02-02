import React from "react";
import "../styles/projectHighlight.css";

function ProjectHighlight() {
  return (
    <section className="project-highlight container">
      <div className="project-highlight-text">
        <h2>Plataforma ESG para empresas</h2>
        <p>O cliente buscava uma solução que ajudasse empresas com a implantação de ações ESG.</p>
        <a href="/pages/Projeto-esg.html" target="_blank">
          <button>Ver projeto</button>
        </a>
      </div>
      <div className="project-highlight-img">
        <img src="/imgs/ESG/esg-project-destaque.png" alt="Tela inicial da plataforma de ESG" />
      </div>
    </section>
  );
}

export default ProjectHighlight;
