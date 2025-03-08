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
  const introContent = [
    { type: "paragraph", text: <><a href="https://www.fretadao.com.br" target="_blank" rel="noopener noreferrer">Fretadão</a> é uma empresa de <strong>tecnologia</strong> voltada para a área de fretamento. Ela oferece o serviço de planejamento, implantação e gestão da operação de fretado para empresas de médio e grande porte.</> },
    { type: "paragraph", text: "Como designer do projeto, minha função era reformular visualmente a marca e criar um protótipo navegável baseado nas discussões feitas pelo time." },
    { type: "paragraph", text: "O cliente precisava de ajuda com a usabilidade e arquitetura de informação do site para torná-lo mais fácil de usar e comunicar as soluções que a empresa entrega." },

    { type: "title", text: "Planejamento" },

    { 
      type: "paragraph", 
      text: (
        <>
          O projeto tinha um time enxuto de 3 pessoas, formado pelo CTO da empresa, a analista de marketing e eu. Os principais pontos de definição discutidos foram:
          <ul>
            <li>Como a marca queria ser vista pelo usuário;</li>
            <li>Quais serviços seriam apresentados e quais teriam mais destaque;</li>
            <li>O que e como devemos nos comunicar com a audiência;</li>
            <li>Redesenhar o site com uma interface amigável e interativa;</li>
            <li>Fornecer mais informações sobre fretamento e serviços oferecidos;</li>
            <li>Simplificar a navegação separando o conteúdo para clientes B2B e B2C.</li>
          </ul>
        </>
      )
    },

    { type: "title", text: "Arquitetura da informação" },

    { type: "paragraph", text: "O Fretadão oferece diversos serviços tanto para clientes individuais (B2C) quanto para empresas (B2B). Criamos um fluxo de usuário para representar a estrutura do site e as etapas que o usuário pode seguir." },

    { type: "image", src: jornadaFretadao, alt: "Fluxograma da jornada do usuário." },

    { type: "title", text: "Direção de design de interface" },

    { type: "paragraph", text: "O primeiro passo foi a criação da nova identidade visual da marca e a construção do manual de identidade visual." },

    { type: "paragraph", text: "Nesta fase, também documentamos os componentes essenciais da UI para manter a consistência visual do projeto." },

    { type: "component", component: (
      <div className="link-card">
        <div className="card-content">
          <img src={behanceFretadao} alt="Logo do Behance" className="card-image" />
          <div className="card-text">
            <h3>Identidade visual | Fretadão</h3>
            <a
              href="https://www.behance.net/gallery/140124405/Identidade-visual-Fretadão"
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              Veja o projeto no Behance <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>
      </div>
    ) },

    { type: "image", src: guiaFretadao1, alt: "Guia de identidade visual com tipografia, grid e cores da marca." },
    { type: "image", src: guiaFretadao2, alt: "Guia de identidade visual do Fretadão." },
    { type: "image", src: guiaFretadao3, alt: "Guia com elementos gráficos da marca." },

    { type: "title", text: "Resultado" },

    { type: "paragraph", text: "A home foi dividida em seções estratégicas: Carrossel de serviço, Como funciona, Clientes, Vantagens, Benefícios para colaboradores, Blog e outros serviços." },

    { type: "image", src: homeFretadao, alt: "Nova home do site Fretadão." },

    { type: "title", text: "Página B2B" },

    { type: "image", src: homeB2B, alt: "Página voltada para clientes B2B do Fretadão." }
  ];

  return (
    <div className="project-content">
      <ProjectHeader
        title="Redesign de Marca e Site | Fretadão"
        tags={["UI e UX", "Identidade Visual", "Web Design"]}
        author="Malu Sousa"
        role="Designer"
        details="Projeto feito para Fretadão • 2019"
      />

      <SectionIntroduction title="Visão geral" content={introContent} />
    </div>
  );
};

export default ProjetoRedesignFretadao;
