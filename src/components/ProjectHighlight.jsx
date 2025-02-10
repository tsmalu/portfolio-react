import React from "react";
import { Link } from "react-router-dom"; // Importando o Link do react-router-dom
import "../styles/projectHighlight.css";
import projectHighlightImg from "/src/assets/imgs/ESG/esg-project-destaque.png";

function ProjectHighlight() {
  return (
    <section className="project-highlight container">
      <div className="project-highlight-text">
        <h2>Plataforma ESG para empresas</h2>
        <p>O cliente buscava uma solução que ajudasse empresas com a implantação de ações ESG. 
          O projeto incluiu imersão, entrevistas com especialistas e colaboração na definição de escopo e funcionalidades.</p>
        
        {/* Link corrigido para navegar para a página de projeto ESG */}
        <Link to="/projeto-esg">
          <button>Ver projeto</button>
        </Link>
      </div>
      
      <div className="project-highlight-img">
        <Link to="/projeto-esg">
          <img src={projectHighlightImg} alt="Tela inicial da plataforma de ESG" />
        </Link>
      </div>
    </section>
  );
}

export default ProjectHighlight;
