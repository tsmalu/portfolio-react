import React, { useState } from "react";

// Importando Estilos
import "../styles/ProjectStyles.css";
import "../styles/base.css";

const personasData = [
  {
    name: "👨‍💼 Edson",
    description: (
      <>
        Profissional de empresa de pequeno/médio porte e única pessoa responsável por sustentabilidade.
        <br /><br /><strong>Ações:</strong> Cumpre obrigações legais, possui pouco conhecimento em ESG e usa Excel.
        <br /><br /><strong>Desafios e Preocupações:</strong> Além da preocupação com a reputação da empresa, Edson está perdendo clientes por não se adequar ao ESG. Ele enfrenta a dificuldade de acesso limitado a informações da empresa e deseja expandir para novos mercados.
      </>
    ),
  },
  {
    name: "👩‍💼 Silvia",
    description: (
      <>
        Faz parte de um time ou comitê de ESG em uma empresa de grande porte com mais de 50 anos no mercado.
        <br /><br /><strong>Ações:</strong> Tem iniciativas e projetos de ESG, capta investimentos, é pressionada pelo mercado para cumprir práticas ESG e emite relatório de sustentabilidade.
        <br /><br /><strong>Desafios e Preocupações:</strong> Enfrenta dificuldades em monitorar fornecedores e engajar colaboradores. Busca certificações, mas enfrenta desafios na mensuração do impacto de suas ações.
      </>
    ),
  },
  {
    name: "👩‍🏫 Gabriela",
    description: (
      <>
        Consultora especialista em ESG, trabalha na área há mais de 10 anos.
        <br /><br /><strong>Ações:</strong> Atende empresas de pequeno e médio porte de diversos segmentos, se comunica com várias áreas dentro da empresa que atende, entrega relatórios e apresenta resultados de seus estudos.
        <br /><br /><strong>Desafios e Preocupações:</strong> Gabriela enfrenta dificuldades em mudar a cultura e o mindset da empresa. Ela lida com acesso limitado a informações internas e enfrenta o desafio de influenciar os tomadores de decisão para ir além do mínimo.
      </>
    ),
  },
];

function PersonasToggle() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index, event) => {
    event.preventDefault(); // Evita comportamento inesperado
    event.stopPropagation(); // Impede que o clique afete elementos externos

    const currentCard = document.getElementById(`persona-${index}`);
    
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
      // Mantém a rolagem na posição atual
      setTimeout(() => {
        currentCard?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 50);
    }
  };

  return (
    <section className="personas">
      <div className="personas-title">
        <h3>Personas</h3>
      </div>

      {personasData.map((persona, index) => (
        <div
          key={index}
          id={`persona-${index}`}
          className={`persona-card ${expandedIndex === index ? "expanded" : ""}`}
        >
          <div
            className="persona-header"
            onClick={(event) => toggleDescription(index, event)}
          >
            <span className="toggle-icon">
              {expandedIndex === index ? "▼" : "▶"}
            </span>
            <p><strong>{persona.name}</strong></p>
          </div>
          {expandedIndex === index && (
            <p className="persona-description">{persona.description}</p>
          )}
        </div>
      ))}
    </section>
  );
}

export default PersonasToggle;
