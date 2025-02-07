import React from "react";
import "../styles/ProjectStyles.css"; // Importando os estilos corretos

// Importando imagens corretamente
import workshopImg1 from "../assets/imgs/ESG/esg-workshop-esg-1.webp";
import workshopImg2 from "../assets/imgs/ESG/esg-workshop-esg-2.webp";

function WorkshopImages() {
  return (
    <section className="project-workshop-images">
      <img src={workshopImg1} alt="Primeira imagem do time de design e stakeholders do cliente durante a etapa de definir a visão do produto." />
      <img src={workshopImg2} alt="Segunda imagem da reunião do time com cliente" />
    </section>
  );
}

export default WorkshopImages;
