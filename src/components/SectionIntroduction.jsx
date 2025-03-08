import React from "react";
import ProjectHeader from "../components/ProjectHeader";
import SectionIntroduction from "../components/SectionIntroduction";
import "../styles/projects.css";

// Imagens
import enjoeiBanner from "../assets/imgs/enjoei/enjoei-cover.png";
import enjoeiImg1 from "../assets/imgs/enjoei/enjoei-imgs-01.gif";
import enjoeiImg2 from "../assets/imgs/enjoei/enjoei-imgs-02.gif";
import enjoeiImg3 from "../assets/imgs/enjoei/enjoei-imgs-03.png";
import enjoeiImg4 from "../assets/imgs/enjoei/enjoei-imgs-04.gif";
import enjoeiImg5 from "../assets/imgs/enjoei/enjoei-imgs-05.png";
import enjoeiImg6 from "../assets/imgs/enjoei/enjoei-imgs-06.gif";
import enjoeiImg7 from "../assets/imgs/enjoei/enjoei-imgs-07.gif";
import enjoeiImg8 from "../assets/imgs/enjoei/enjoei-imgs-08.gif";
import enjoeiImg9 from "../assets/imgs/enjoei/enjoei-imgs-09.gif";
import enjoeiImg10 from "../assets/imgs/enjoei/enjoei-imgs-10.png";
import enjoeiImg11 from "../assets/imgs/enjoei/enjoei-imgs-11.gif";
import enjoeiImg12 from "../assets/imgs/enjoei/enjoei-imgs-12.gif";
import enjoeiImg13 from "../assets/imgs/enjoei/enjoei-imgs-13.gif";
import enjoeiImg14 from "../assets/imgs/enjoei/enjoei-imgs-14.gif";
import enjoeiImg15 from "../assets/imgs/enjoei/enjoei-imgs-15.gif";
import enjoeiImg16 from "../assets/imgs/enjoei/enjoei-imgs-16.png";
import enjoeiImg17 from "../assets/imgs/enjoei/enjoei-imgs-17.png";
import enjoeiImg18 from "../assets/imgs/enjoei/enjoei-imgs-18.png";
import enjoeiImg19 from "../assets/imgs/enjoei/enjoei-imgs-19.png";
import enjoeiImg20 from "../assets/imgs/enjoei/enjoei-imgs-20.gif";
import enjoeiImg21 from "../assets/imgs/enjoei/enjoei-imgs-21.png";
import enjoeiImg22 from "../assets/imgs/enjoei/enjoei-imgs-22.gif";
import enjoeiImg23 from "../assets/imgs/enjoei/enjoei-imgs-23.gif";
import enjoeiImg24 from "../assets/imgs/enjoei/enjoei-imgs-24.png";
import enjoeiImg25 from "../assets/imgs/enjoei/enjoei-imgs-25.png";
import enjoeiImg26 from "../assets/imgs/enjoei/enjoei-imgs-26.png";
import enjoeiImg27 from "../assets/imgs/enjoei/enjoei-imgs-27.png";
import enjoeiImg28 from "../assets/imgs/enjoei/enjoei-imgs-28.gif";
import enjoeiImg29 from "../assets/imgs/enjoei/enjoei-imgs-29.png";
import enjoeiImg31 from "../assets/imgs/enjoei/enjoei-imgs-31.png";
import enjoeiImg32 from "../assets/imgs/enjoei/enjoei-imgs-32.gif";
import enjoeiImg33 from "../assets/imgs/enjoei/enjoei-imgs-33.gif";
import enjoeiImg34 from "../assets/imgs/enjoei/enjoei-imgs-34.png";
import enjoeiImg35 from "../assets/imgs/enjoei/enjoei-imgs-35.png";
import enjoeiImg36 from "../assets/imgs/enjoei/enjoei-imgs-36.gif";
import enjoeiImg37 from "../assets/imgs/enjoei/enjoei-imgs-37.gif";
import enjoeiImg38 from "../assets/imgs/enjoei/enjoei-imgs-38.png";
import enjoeiImg39 from "../assets/imgs/enjoei/enjoei-imgs-39.gif";
import enjoeiImg40 from "../assets/imgs/enjoei/enjoei-imgs-40.png";
import enjoeiImg41 from "../assets/imgs/enjoei/enjoei-imgs-41.png";
import enjoeiImg42 from "../assets/imgs/enjoei/enjoei-imgs-42.png";

const ProjetoEnjoei = () => {
  const introParagraphs = [
    "Criação de materiais para campanhas de marketing e newsletters, garantindo engajamento com o público. As peças ajudaram a destacar as ofertas do e-commerce, transmitindo a identidade descontraída e irreverente da marca de forma atraente e eficiente.",
  ];

  const imageContent = [
    { type: "image", src: enjoeiImg1, alt: "Campanha Enjoei 01" },
    { type: "image", src: enjoeiImg2, alt: "Campanha Enjoei 02" },
    { type: "image", src: enjoeiImg3, alt: "Campanha Enjoei 03" },
    { type: "image", src: enjoeiImg4, alt: "Campanha Enjoei 04" },
    { type: "image", src: enjoeiImg5, alt: "Campanha Enjoei 05" },
    { type: "image", src: enjoeiImg6, alt: "Campanha Enjoei 06" },
    { type: "image", src: enjoeiImg7, alt: "Campanha Enjoei 07" },
    { type: "image", src: enjoeiImg8, alt: "Campanha Enjoei 08" },
    { type: "image", src: enjoeiImg9, alt: "Campanha Enjoei 09" },
    { type: "image", src: enjoeiImg10, alt: "Campanha Enjoei 10" },
    { type: "image", src: enjoeiImg11, alt: "Campanha Enjoei 11" },
    { type: "image", src: enjoeiImg12, alt: "Campanha Enjoei 12" },
    { type: "image", src: enjoeiImg13, alt: "Campanha Enjoei 13" },
    { type: "image", src: enjoeiImg14, alt: "Campanha Enjoei 14" },
    { type: "image", src: enjoeiImg15, alt: "Campanha Enjoei 15" },
    { type: "image", src: enjoeiImg16, alt: "Campanha Enjoei 16" },
    { type: "image", src: enjoeiImg17, alt: "Campanha Enjoei 17" },
    { type: "image", src: enjoeiImg18, alt: "Campanha Enjoei 18" },
    { type: "image", src: enjoeiImg19, alt: "Campanha Enjoei 19" },
    { type: "image", src: enjoeiImg20, alt: "Campanha Enjoei 20" },
    { type: "image", src: enjoeiImg21, alt: "Campanha Enjoei 21" },
    { type: "image", src: enjoeiImg22, alt: "Campanha Enjoei 22" },
    { type: "image", src: enjoeiImg23, alt: "Campanha Enjoei 23" },
    { type: "image", src: enjoeiImg24, alt: "Campanha Enjoei 24" },
    { type: "image", src: enjoeiImg25, alt: "Campanha Enjoei 25" },
    { type: "image", src: enjoeiImg26, alt: "Campanha Enjoei 26" },
    { type: "image", src: enjoeiImg27, alt: "Campanha Enjoei 27" },
    { type: "image", src: enjoeiImg28, alt: "Campanha Enjoei 28" },
    { type: "image", src: enjoeiImg29, alt: "Campanha Enjoei 29" },
    { type: "image", src: enjoeiImg31, alt: "Campanha Enjoei 31" },
    { type: "image", src: enjoeiImg32, alt: "Campanha Enjoei 32" },
    { type: "image", src: enjoeiImg33, alt: "Campanha Enjoei 33" },
    { type: "image", src: enjoeiImg34, alt: "Campanha Enjoei 34" },
    { type: "image", src: enjoeiImg35, alt: "Campanha Enjoei 35" },
    { type: "image", src: enjoeiImg36, alt: "Campanha Enjoei 36" },
    { type: "image", src: enjoeiImg37, alt: "Campanha Enjoei 37" },
    { type: "image", src: enjoeiImg38, alt: "Campanha Enjoei 38" },
    { type: "image", src: enjoeiImg39, alt: "Campanha Enjoei 39" },
    { type: "image", src: enjoeiImg40, alt: "Campanha Enjoei 40" },
    { type: "image", src: enjoeiImg41, alt: "Campanha Enjoei 41" },
    { type: "image", src: enjoeiImg42, alt: "Campanha Enjoei 42" },
  ];

  return (
    <div className="project-content">
      <ProjectHeader
        title="Comunicação | enjoei.com.br | 2016-2019"
        tags={["Design Gráfico", "Ilustração"]}
        author="Malu Sousa"
        role="Designer"
        details="Projeto feito para enjoei.com.br • 2016-2019"
      />

      <SectionIntroduction title="Visão geral" paragraphs={introParagraphs} />

      {/* Imagens do projeto */}
      {imageContent.map((image, index) => (
        <section className="project-image" key={index}>
          <img src={image.src} alt={image.alt} />
        </section>
      ))}
    </div>
  );
};

export default ProjetoEnjoei;
