import { Link } from "react-router-dom";
import capaUiGame from "/src/assets/imgs/game-ui/capa-uigame.webp";
import fretadaoRedesignCard1 from "/src/assets/imgs/fretadão redesign/projects-card-1.png";
import enjoeiCover from "/src/assets/imgs/enjoei/enjoei-cover.png";

import React from "react";
import "../styles/projectCard.css";
import "../styles/projectsSection.css";

function ProjectsSection() {
  console.log("ProjectsSection renderizado");
  return (
    <section className="projects-section container projects-page">
      {/* Card 1 - Interface para jogo de xadrez */}
      <Link to="/projetos/uigame" className="project-card">
        <div className="imagem">
          <img src={capaUiGame} alt="Tela inicial do jogo" />
        </div>
        <div className="conteudo">
          <h3>Interface para jogo de xadrez</h3>
          <div className="tags">
            <span className="tag">UI e UX</span>
            <span className="tag">identidade visual</span>
            <span className="tag">Interface para jogo</span>
          </div>
          <p id="truncated-text">
            Criação de componentes para a interface de um jogo de xadrez. Inclui telas como menu principal, seleção de
            modos de jogo, área social, loja, tutoriais e interface para partidas multiplayer.
          </p>
        </div>
      </Link>

      {/* Card 2 - Redesign de Marca e Site */}
      <a href="pages/Projeto-Redesign-fretadao.html" className="project-card" target="_blank" rel="noopener noreferrer">
        <div className="imagem">
          <img src={fretadaoRedesignCard1} alt="Tela inicial do site fretadao" />
        </div>
        <div className="conteudo">
          <h3>Redesign de Marca e Site | 2019</h3>
          <div className="tags">
            <span className="tag">UI e UX</span>
            <span className="tag">identidade visual</span>
            <span className="tag">web design</span>
          </div>
          <p>
            Reformulação visual da marca e criação de site para startup de transporte, projeto otimiza layout para
            comunicar nova marca.
          </p>
        </div>
      </a>

      {/* Card 3 - Comunicação Enjoei */}
      <a
        href="https://tsmalu.notion.site/Banners-enjoei-com-br-10fa3d1da95080a4b98bcaa8440d2d33"
        className="project-card"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="imagem">
          <img src={enjoeiCover} alt="Imagem do projeto" />
        </div>
        <div className="conteudo">
          <h3>Comunicação | enjoei.com.br | 2016-2019</h3>
          <div className="tags">
            <span className="tag">design gráfico</span>
            <span className="tag">ilustração</span>
          </div>
          <p>Criação de materiais para campanhas de marketing para engajamento com o público.</p>
        </div>
      </a>
    </section>
  );
}

export default ProjectsSection;
