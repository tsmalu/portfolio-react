import React from "react";
import ProjectHeader from "../components/ProjectHeader";
import SectionIntroduction from "../components/SectionIntroduction";
import "../styles/projects.css";

// Imagens
import jornadaFretadao from "../assets/imgs/fretadão redesign/jornada-fretadao1.webp";
import guiaFretadao1 from "../assets/imgs/fretadão redesign/guia-fretadao-1.webp";
import guiaFretadao2 from "../assets/imgs/fretadão redesign/guia-fretadao-2.webp";
import guiaFretadao3 from "../assets/imgs/fretadão redesign/guia-fretadao-3.webp";
import homeFretadao from "../assets/imgs/fretadão redesign/home-fretadao-1.webp";
import homeB2B from "../assets/imgs/fretadão redesign/home-b2b-fretadao.webp";
import behanceFretadao from "../assets/imgs/fretadão redesign/behancelink-id-fretadao.png";

const ProjetoRedesignFretadao = () => {
  const introParagraphs = [
    <>
      <a href="https://www.fretadao.com.br" target="_blank" rel="noopener noreferrer">Fretadão</a> 
      é uma empresa de <strong>tecnologia</strong> voltada para a área de fretamento. Ela oferece o serviço de planejamento, implantação e gestão da operação de fretado para empresas de médio e grande porte.
    </>,
    "Como designer do projeto, minha função era reformular visualmente a marca e criar um protótipo navegável baseado nas discussões e feitas pelo time.",
    "O cliente precisava de ajuda com a usabilidade e arquitetura de informação do site para torná-lo mais fácil de usar e comunicar as soluções que a empresa entrega.",
    
    <h3>Planejamento</h3>,
    "O projeto tinha um time enxuto de 3 pessoas: CTO da empresa, analista de marketing e eu. Os principais pontos discutidos foram:",
    
    <ul>
      <li>Como a marca queria ser vista pelo usuário.</li>
      <li>Quais serviços seriam apresentados e quais teriam mais destaque.</li>
      <li>Como devemos nos comunicar com a audiência.</li>
      <li>Redesenhar o site com uma interface amigável e interativa.</li>
      <li>Fornecer mais informações sobre fretamento e serviços oferecidos.</li>
      <li>Simplificar a navegação separando o conteúdo para clientes B2B e B2C.</li>
    </ul>,
    
    <h3>Arquitetura da informação</h3>,
    "O Fretadão oferece diversos serviços tanto para clientes individuais (B2C) quanto para empresas (B2B). Criamos um fluxo de usuário para representar a estrutura do site e as etapas que o usuário pode seguir.",
    
    <section className="project-image">
      <img src={jornadaFretadao} alt="Fluxograma da jornada do usuário." />
    </section>,

    <h3>Direção de design de interface</h3>,
    "O primeiro passo foi a criação da nova identidade visual da marca e a construção do manual de identidade visual.",
    "Nesta fase, também documentamos os componentes essenciais da UI para manter a consistência visual do projeto.",

    <div className="link-card">
      <a href="https://www.behance.net/gallery/140124405/Identidade-visual-Fretadao" target="_blank" rel="noopener noreferrer">
        <div className="card-content">
          <img src={behanceFretadao} alt="Logo do Behance" className="card-image" />
          <div className="card-text">
            <h3>Identidade visual | Fretadão</h3>
            <a
  href="https://www.behance.net/gallery/140124405/Identidade-visual-Fretadao"
  target="_blank"
  rel="noopener noreferrer"
  className="link-button"
>
  Veja o projeto no Behance <i className="fa-solid fa-up-right-from-square"></i>
</a>

          </div>
        </div>
      </a>
    </div>,

    <section className="project-image">
      <img src={guiaFretadao1} alt="Guia de identidade visual com tipografia, grid e cores da marca." />
    </section>,
    <section className="project-image">
      <img src={guiaFretadao2} alt="Guia de identidade visual do Fretadão." />
    </section>,
    <section className="project-image">
      <img src={guiaFretadao3} alt="Guia com elementos gráficos da marca." />
    </section>,

    <h3>Resultado</h3>,
    "A home foi dividida em seções estratégicas: Carrossel de serviço, Como funciona, Clientes, Vantagens, Benefícios para colaboradores, Blog e outros serviços.",
    
    <section className="project-image">
      <img src={homeFretadao} alt="Nova home do site Fretadão." />
    </section>,

    <h3>Página B2B</h3>,
    <section className="project-image">
      <img src={homeB2B} alt="Página voltada para clientes B2B do Fretadão." />
    </section>,
  ];

  return (
    <div className="project-content">
      {/* Novo cabeçalho dinâmico */}
     <ProjectHeader
      title="Redesign de Marca e Site | Fretadão"
      tags={["UI e UX", "Identidade Visual", "Web Design"]}
      author="Malu Sousa"
      role="Designer"
      details="Projeto feito para Fretadão • 2019"
    />

      {/* Conteúdo do projeto */}
      <SectionIntroduction title="Visão geral" paragraphs={introParagraphs} />
    </div>
  );
};

export default ProjetoRedesignFretadao;
