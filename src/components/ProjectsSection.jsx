import React from "react";
import { Link } from "react-router-dom"; // Importa Link para navegação interna
import capaUiGame from "/src/assets/imgs/game-ui/capa-uigame.webp";
import fretadaoRedesignCard1 from "/src/assets/imgs/fretadão redesign/projects-card-1.png";
import enjoeiCover from "/src/assets/imgs/enjoei/enjoei-cover.png";

import "../styles/projectCard.css";
import "../styles/projectsSection.css";

function ProjectsSection() {
  console.log("ProjectsSection renderizado");

  return (
    <section className="projects-section container projects-page">
      {/* Card 1 */}
      <Link to="/projeto-ui-game" className="project-card">
        <div className="imagem">
          <img src={capaUiGame} alt="Tela inicial do jogo" />
        </div>
        <div className="conteudo">
          <h3>Interface para jogo de xadrez</h3>
          <div className="tags">
            <span className="tag">UI e UX</span>
            <span className="tag">Identidade Visual</span>
            <span className="tag">Interface para jogo</span>
          </div>
          <p>
            Criação de componentes para a interface de um jogo de xadrez. Inclui telas como menu principal, seleção de
            modos de jogo, área social, loja, tutoriais e interface para partidas multiplayer.
          </p>
        </div>
      </Link>

      {/* Card 2 */}
      <Link to="/projeto-redesign-fretadao" className="project-card">
        <div className="imagem">
          <img src={fretadaoRedesignCard1} alt="Tela inicial do site Fretadão" />
        </div>
        <div className="conteudo">
          <h3>Redesign de Marca e Site | 2019</h3>
          <div className="tags">
            <span className="tag">UI e UX</span>
            <span className="tag">Identidade Visual</span>
            <span className="tag">Web Design</span>
          </div>
          <p>
            Reformulação visual da marca e criação de site para startup de transporte, projeto otimiza layout para
            comunicar nova marca.
          </p>
        </div>
      </Link>

      {/* Card 3 */}
      <Link to="/projeto-enjoei" className="project-card">
  <div className="imagem">
    <img src={enjoeiCover} alt="Imagem do projeto Enjoei" />
  </div>
  <div className="conteudo">
    <h3>Comunicação | enjoei.com.br | 2016-2019</h3>
    <div className="tags">
      <span className="tag">Design Gráfico</span>
      <span className="tag">Ilustração</span>
    </div>
    <p>Criação de materiais para campanhas de marketing para engajamento com o público.</p>
  </div>
</Link>
    </section>
  );
}

export default ProjectsSection;
