import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProjectTitle from "../components/ProjectTitle";
import AuthorInfo from "../components/AuthorInfo";

// ✅ Importando todas as imagens corretamente
import fotoMalu from "../assets/imgs/global/foto-malu.jpeg";
import capaUiGame from "../assets/imgs/Game-UI/capa-uigame.webp";
import coresUiGame from "../assets/imgs/Game-UI/cores-uigame.png";
import tipografiaUiGame from "../assets/imgs/Game-UI/tipografia-uigame.png";
import componentesUiGame from "../assets/imgs/Game-UI/componentes-uigame.png";
import telas1UiGame from "../assets/imgs/Game-UI/telas1-uigame.png";
import telas2UiGame from "../assets/imgs/Game-UI/telas2-uigame.png";
import telas3UiGame from "../assets/imgs/Game-UI/telas3-uigame.png";

import "../styles/ProjectStyles.css";

function ProjetoUIGame() {
  console.log("🚀 ProjetoUIGame renderizado!");

  return (
    <main className="project-content"> 

      {/* Breadcrumb */}
      <Breadcrumb projectName="Interface para jogo de xadrez" />

      {/* Título do Projeto */}
      <ProjectTitle
        title="Interface para jogo de xadrez"
        tags={["UI e UX", "Identidade visual", "Interface para jogo"]}
      />

      {/* Informações do Autor */}
      <AuthorInfo
        name="Malu Sousa"
        role="Designer"
        image={fotoMalu}
        details="Projeto feito para Performa_IT Consultoria • 2023"
      />

      {/* Introdução */}
      <section className="section-introduction">
        <h3>Intro</h3>
        <p>
          Inside the eChess game you will explore some great features like learning how to play with the tutorials, 
          getting new and exciting themes in the shop, and easily connecting and playing with your friends. 
          Have fun playing with the built-in video chat with special effects and more.
        </p>
      </section>

{/* Imagens do Projeto */}
<section className="project-images">
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
    <img src={componentesUiGame} alt="Telas da plataforma" />
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
</section>


    </main>
  );
}

export default ProjetoUIGame;
