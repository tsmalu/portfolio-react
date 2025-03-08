import React from "react";
import ProjectHeader from "../components/ProjectHeader";
import SectionIntroduction from "../components/SectionIntroduction";
import "../styles/projects.css";

// Importando imagens
import capaUiGame from "../assets/imgs/Game-UI/capa-uigame.webp";
import coresUiGame from "../assets/imgs/Game-UI/cores-uigame.png";
import tipografiaUiGame from "../assets/imgs/Game-UI/tipografia-uigame.png";
import componentesUiGame from "../assets/imgs/Game-UI/componentes-uigame.png";
import telas1UiGame from "../assets/imgs/Game-UI/telas1-uigame.png";
import telas2UiGame from "../assets/imgs/Game-UI/telas2-uigame.png";
import telas3UiGame from "../assets/imgs/Game-UI/telas3-uigame.png";

const ProjetoUIGame = () => {
  const introContent = [
    { type: "paragraph", text: "Desenvolvimento de interface para um jogo de xadrez. O projeto envolveu a criação de componentes visuais para telas como menu principal, seleção de modos de jogo, área social, loja, tutoriais e interface para partidas multiplayer." },

    { type: "title", text: "Introdução" },

    { type: "paragraph", text: "Dentro do eChess, você poderá explorar recursos incríveis, como aprender a jogar com os tutoriais, adquirir novos e empolgantes temas na loja e se conectar facilmente para jogar com seus amigos. Divirta-se com o chat de vídeo integrado, que conta com efeitos especiais e muito mais." },
  ];

  return (
    <div className="project-content">
      {/* Novo cabeçalho dinâmico */}
      <ProjectHeader
        title="Interface para jogo de xadrez"
        tags={["UI e UX", "Identidade Visual", "Interface para jogo"]}
        author="Malu Sousa"
        role="Designer"
        details="Projeto feito para Wondernaut Studio • 2023"
      />

      {/* Conteúdo do projeto */}
      <SectionIntroduction title="Visão geral" content={introContent} />

      {/* Imagens do projeto */}
      <section className="project-image">
        <img src={capaUiGame} alt="Tela inicial do jogo" />
      </section>

      <section className="project-image">
        <img src={coresUiGame} alt="Cores utilizadas: Degradês das cores ouro, prata e bronze, azul, vermelho, preto e cinza." />
      </section>

      <section className="project-image">
        <img src={tipografiaUiGame} alt="Fontes: TX Manifesto e Asap" />
      </section>

      <section className="project-image">
        <img src={componentesUiGame} alt="Componentes da plataforma" />
      </section>

      <section className="project-image">
        <img src={telas1UiGame} alt="Telas da plataforma" />
      </section>

      <section className="project-image">
        <img src={telas2UiGame} alt="Telas da plataforma" />
      </section>

      <section className="project-image">
        <img src={telas3UiGame} alt="Telas da plataforma" />
      </section>
    </div>
  );
};

export default ProjetoUIGame;
