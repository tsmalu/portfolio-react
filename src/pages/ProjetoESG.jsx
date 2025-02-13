import React from "react";

// Componentes
import Breadcrumb from "../components/Breadcrumb";
import SectionIntroduction from "../components/SectionIntroduction";
import Personas from "../components/Personas";

// Estilos 
import "../styles/projects.css";

// Imagens
import esgMatrizCSD from "../assets/imgs/ESG/esg-matriz-csd.jpeg";
import esgWorkshop1 from "../assets/imgs/ESG/esg-workshop-esg-1.webp";
import esgWorkshop2 from "../assets/imgs/ESG/esg-workshop-esg-2.webp";
import esgJornada from "../assets/imgs/ESG/esg-jornada.png";
import esgRevisao from "../assets/imgs/ESG/esg-revisão.png";
import esgFluxo from "../assets/imgs/ESG/esg-fluxo-navegacao.png";
import esgUI from "../assets/imgs/ESG/ESG-Componentes-ui.png";
import esgCores from "../assets/imgs/ESG/Cores-esg.png";
import esgTipografia from "../assets/imgs/ESG/Tipografia-esg.png";
import esgPrototipacao from "../assets/imgs/ESG/Prototipação-esg.png";
import esgTelas from "../assets/imgs/ESG/Telas-esg.png";

const ProjetoESG = () => {
  const introParagraphs = [
    "O cliente buscava uma solução para empresas e profissionais com a missão de implantar ações ESG na organização. O projeto inclui imersão, entrevistas com especialistas e colaboração na definição de escopo e funcionalidades. Resultado: Uma plataforma ESG para diagnóstico, definição de temas materiais e acompanhamento de metas e ações.",
    "O cliente é uma unidade de inovação que promove a inovação, conecta ecossistemas e desenvolve projetos para o agronegócio e meio ambiente.",
    <h3>Desafio</h3>,
    "O cliente enfrentava o desafio estratégico de fornecer suporte efetivo às empresas parceiras e clientes na gestão de boas práticas em ESG. A necessidade de construir um produto ESG surgiu naturalmente devido à crescente demanda e à experiência acumulada em projetos anteriores.",
    "Muitas dessas empresas não tinham clareza sobre suas próprias necessidades em ESG, exigindo um diagnóstico inicial. O cliente espera conseguir novos projetos ao oferecer soluções de inovação aberta abordando diretamente as preocupações de ESG.",
    
    <h3>Descoberta</h3>,
    "Iniciamos a etapa de descoberta compreendendo o tema ESG por meio de um treinamento conduzido por Mariana Leite, consultora e gerente de negócios especializada na área.",
    "Realizamos entrevistas com consultores e profissionais que atuam com ESG nas empresas onde trabalham. O processo de entrevistas mostrou detalhes sobre os desafios que as empresas enfrentam ao adotar práticas ESG.",
    "Com as informações levantadas nas entrevistas foi possível validar as suposições e responder a alguns dos questionamentos feitos durante o Kick off utilizando a Matriz CSD.",
    
    <section className="project-image">
      <img src={esgMatrizCSD} alt="Matriz CSD: Ferramenta que mapeia as certezas, suposições e dúvidas sobre o projeto." />
    </section>,

    <h3>Definição e Ideação</h3>,
    "O workshop de Lean Inception representa um marco essencial na jornada do projeto, desdobrando-se ao longo de uma semana de imersão.",
    "As atividades desenharam personas, jornada do usuário e funcionalidades essenciais do produto, oferecendo uma visão compartilhada para as próximas fases.",

    <section className="project-workshop-images">
      <img src={esgWorkshop1} alt="Primeira imagem do time de design e stakeholders do cliente durante a etapa de definir a visão do produto." />
      <img src={esgWorkshop2} alt="Segunda imagem da reunião do time com cliente." />
    </section>,

    <Personas />,

    <h3>Jornada da pessoa usuária</h3>,
    "Realizamos uma dinâmica com o cliente e desenhamos a jornada de experiência que esperamos para o produto.",

    <section className="project-image">
      <img src={esgJornada} alt="Jornada do usuário, com as etapas: descoberta, análise interna, estratégia e acompanhamento." />
    </section>,

    <h3>Revisão técnica e sequenciador</h3>,
    "Classificamos o valor para o negócio, usuário e esforço de desenvolvimento. Utilizamos o sequenciador para ordenar funcionalidades essenciais que precisam ser entregues inicialmente no MVP.",

    <section className="project-image">
      <img src={esgRevisao} alt="Funcionalidades em uma matriz de priorização e as tarefas em um sequenciador." />
    </section>,

    <h3>Design</h3>,
    "Após colaborar com o cliente no workshop, iniciamos a etapa de design que aborda o fluxo de navegação, guia de estilo, desenho da interface, prototipação em alta fidelidade e testes de usabilidade.",

    <h4>Fluxo de navegação</h4>,
    "O fluxo de navegação foi fundamental para representar as etapas que os usuários percorrerão ao interagir com a plataforma. Ao visualizar o fluxo de forma visual, garantimos que todos do time tinham a mesma visão da experiência do usuário desejada e dos objetivos do projeto.",

    <section className="project-image">
      <img src={esgFluxo} alt="Fluxo de navegação da plataforma." />
    </section>,

    <h4>UI Design</h4>,
    "Eu criei mais de 50 componentes para o projeto e um UI Kit completo que me ajudou a unificar e manter a consistência, simplificando o trabalho de prototipação.",

    <section className="project-image">
      <img src={esgUI} alt="Componentes da plataforma." />
    </section>,

    <section className="project-image">
      <img src={esgCores} alt="Cores da plataforma." />
    </section>,

    <section className="project-image">
      <img src={esgTipografia} alt="Tipografia Montserrat." />
    </section>,

    <section className="project-image">
      <img src={esgPrototipacao} alt="Telas organizadas no Figma." />
    </section>,

    <section className="project-image">
      <img src={esgTelas} alt="Telas da plataforma." />
    </section>
  ];

  return (
    <div className="project-content">
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Conteúdo principal */}
      <SectionIntroduction title="Visão geral" paragraphs={introParagraphs} />
    </div>
  );
};

export default ProjetoESG;
