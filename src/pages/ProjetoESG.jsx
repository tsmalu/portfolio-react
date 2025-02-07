// Importando componentes 
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProjectTitle from "../components/ProjectTitle";
import AuthorInfo from "../components/AuthorInfo";
import PersonasToggle from "../components/PersonasToggle";

// Importando Imagens
import fotoMalu from "../assets/imgs/global/foto-malu.jpeg";
import matrizCSD from "../assets/imgs/ESG/esg-matriz-csd.jpeg";
import WorkshopImages from "../components/WorkshopImages"; 
import jornadaESG from "../assets/imgs/ESG/esg-jornada.png";
import revisaoESG from "../assets/imgs/ESG/esg-revisao.png";
import fluxoNavegacao from "../assets/imgs/ESG/esg-fluxo-navegacao.png";
import componentesUI from "../assets/imgs/ESG/ESG-Componentes-ui.png";
import coresESG from "../assets/imgs/ESG/Cores-esg.png";
import tipografiaESG from "../assets/imgs/ESG/Tipografia-esg.png";
import prototipacaoESG from "../assets/imgs/ESG/Prototipacao-esg.png";
import telasESG from "../assets/imgs/ESG/Telas-esg.png";


// Importando Estilos
import "../styles/ProjectStyles.css";
import "../styles/base.css";

function ProjetoESG() {

  return (
    <main className="project-content"> 

      {/* Breadcrumb */}
      <Breadcrumb projectName="Plataforma ESG" />

      {/* Título do Projeto */}
      <ProjectTitle
        title="Plataforma para gerenciar ações de ESG"
        tags={["UI e UX", "Pesquisa", "Consultoria"]}
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
        <h3>Visão geral</h3>
        <p>
          O cliente buscava uma solução para empresas e profissionais com a missão de implantar ações ESG na organização. 
          O projeto inclui imersão, entrevistas com especialistas e colaboração na definição de escopo e funcionalidades. 
          Resultado: Uma plataforma ESG para diagnóstico, definição de temas materiais e acompanhamento de metas e ações.
        </p>
      </section>

      {/* Desafio */}
      <section className="section-introduction">
        <h3>Desafio</h3>
        <p>O cliente é uma unidade de inovação que promove a inovação, 
            conecta ecossistemas e desenvolve projetos para o agronegócio e meio ambiente. 
            Neste ano enfrentava o desafio estratégico de fornecer suporte efetivo
            às empresas parceiras e clientes na gestão de boas práticas em ESG. 
            A necessidade de construir um produto ESG surgiu naturalmente devido 
            à crescente demanda e à experiência acumulada em projetos anteriores.
            Ao começar a explorar projetos ESG com empresas parceiras, surgiu uma 
            lacuna significativa. Muitas dessas empresas não tinham clareza sobre 
            suas próprias necessidades em ESG, exigindo um diagnóstico inicial. O 
            cliente espera conseguir novos projetos ao oferecer soluções de inovação 
            aberta abordando diretamente as preocupações de ESG.
        </p>
      </section>

      {/* Descoberta */}
      <section className="section-introduction">
        <h3>Descoberta</h3>
        <p>Iniciamos a etapa de descoberta compreendendo o tema ESG por meio 
          de um treinamento conduzido por Mariana Leite, consultora e gerente 
          de negócios especializada na área.

          Ao longo de duas semanas, realizamos entrevistas com consultores e profissionais que atuam 
          com ESG nas empresas onde trabalham. O processo de entrevistas mostrou detalhes sobre os desafios 
          que as empresas enfrentam ao adotar práticas ESG. Durante as entrevistas, identificamos diversas 
          barreiras como: engajamento cultural, ausência de ferramentas especializadas, dificuldades em tangibilizar 
          resultados e resistência a investimentos, evidenciando a complexidade do desafio.
                    
          Com as informações levantadas nas entrevistas foi possível validar 
          as suposições e responder a alguns dos questionamentos feitos durante 
          o Kick off utilizando a Matriz CSD. 
        </p>
      </section>

      {/* Matriz CSD */}
      <section className="project-images">
       <div className="project-image"> {/* 🔥 Usando <div> para manter a estrutura correta */}
      <img src={matrizCSD} alt="Matriz CSD: Ferramenta que mapeia as certezas, suposições e dúvidas sobre o projeto." />
          </div>
      </section>

      {/* Definição e Ideação */}
      <section className="section-introduction">
        <h3>Definição e Ideação</h3>
        <p>O workshop de Lean Inception representa um marco essencial na jornada do projeto, desdobrando-se ao longo de uma semana de imersão. 
        Ao longo dessa semana, a equipe guiou o cliente por um processo estruturado para a construção do produto ideal de maneira colaborativa. 
         As atividades desenharam <strong>personas</strong>, <strong>jornada do usuário</strong> e as <strong>funcionalidades</strong> essenciais do produto, oferecendo uma visão
        compartilhada e fundamentada para as próximas fases.
        </p>
      </section>

      <WorkshopImages /> 
      <PersonasToggle />
  
      {/* Jornada da pessoa usuária */}
      <section className="section-introduction">
        <h3>Jornada da pessoa usuária</h3>
        <p>Realizamos uma dinâmica com o cliente e desenhamos a jornada de experiência 
          que esperamos para o produto.
        </p>
        <section className="project-image">
          <img src={jornadaESG} alt="Jornada do usuário, com as etapas: descoberta, análise interna, estratégia e acompanhamento." />
          </section>
         </section>

      {/* Revisão técnica e sequenciador */}
      <section className="section-introduction">
        <h3>Revisão técnica e sequenciador</h3>
        <p>Classificamos o valor para o negócio, usuário e esforço de desenvolvimento. 
          Utilizamos o sequenciador para ordenar funcionalidades essenciais que precisam ser 
          entregues inicialmente no MVP. </p>

          <section className="project-image">
          <img src={revisaoESG} alt="Funcionalidades em uma matriz de priorização e as tarefas em um sequenciador." />
          </section>

         </section>

         <section className="section-introduction">
  <h3>Design</h3>
  <p>
    Após colaborar com o cliente no workshop, iniciamos a etapa de design que
    aborda o fluxo de navegação, guia de estilo, desenho da interface,
    prototipação em alta fidelidade e testes de usabilidade.
  </p>
</section>

<section className="section-introduction">
  <h4>Fluxo de navegação</h4>
  <p>
    O fluxo de navegação foi fundamental para representar as etapas que os
    usuários percorrerão ao interagir com a plataforma. Ao visualizar o fluxo de
    forma visual, garantimos que todos do time tinham a mesma visão da
    experiência do usuário desejada e dos objetivos do projeto.
  </p>
</section>
<section className="project-image">
  <img src={fluxoNavegacao} alt="Fluxo de navegação da plataforma" />
</section>

<section className="section-introduction">
  <h4>UI Design</h4>
  <p>
    Eu criei mais de 50 componentes para o projeto e um UI Kit completo que me
    ajudou a unificar e manter a consistência, simplificando o trabalho de
    prototipação.
  </p>
</section>
<section className="project-image">
  <img src={componentesUI} alt="Componentes da plataforma" />
</section>

<section className="project-image">
  <img src={coresESG} alt="Cores da plataforma" />
</section>

<section className="project-image">
  <img src={tipografiaESG} alt="Tipografia Montserrat utilizada na plataforma" />
</section>

<section className="project-image">
  <img src={prototipacaoESG} alt="Telas organizadas no Figma para prototipação" />
</section>

<section className="project-image">
  <img src={telasESG} alt="Telas finais da plataforma ESG" />
</section>



    </main> 
  );
}

export default ProjetoESG; 
