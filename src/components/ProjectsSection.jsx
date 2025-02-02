import React from "react";
import "../styles/projectCard.css";

function ProjectsSection() {
  return (
    <section className="projects-section container projects-page">
      <a href="/pages/Projeto-uigame.html" className="project-card" target="_blank">
        <div className="imagem">
          <img src="/imgs/Game-UI/capa-uigame.webp" alt="Tela inicial do jogo" />
        </div>
        <div className="conteudo">
          <h3>Interface para jogo de xadrez</h3>
          <div className="tags">
            <span className="tag">UI e UX</span>
            <span className="tag">identidade visual</span>
            <span className="tag">Interface para jogo</span>
          </div>
          <p>Criação de componentes para a interface de um jogo de xadrez.</p>
        </div>
      </a>
    </section>
  );
}

export default ProjectsSection;

