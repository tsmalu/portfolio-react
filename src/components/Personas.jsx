import React, { useState } from "react";
import "../styles/projects.css"; // Certifique-se de que esse arquivo contém os estilos necessários

const personasData = [
  {
    name: "👨‍💼 Edson",
    description: `Profissional de empresa de pequeno/médio porte e única pessoa responsável por sustentabilidade.
    
    **Ações:** Cumpre obrigações legais, possui pouco conhecimento em ESG e usa Excel.
    
    **Desafios e Preocupações:** Além da preocupação com a reputação da empresa, Edson está perdendo clientes por não se adequar ao ESG. Ele enfrenta a dificuldade de acesso limitado a informações da empresa e deseja expandir para novos mercados.`,
  },
  {
    name: "👩‍💼 Silvia",
    description: `Faz parte de um time ou comitê de ESG em uma empresa de grande porte com mais de 50 anos no mercado.
    
    **Ações:** Tem iniciativas e projetos de ESG, capta investimentos, é pressionada pelo mercado para cumprir práticas ESG e emite relatório de sustentabilidade.
    
    **Desafios e Preocupações:** Enfrenta dificuldades em monitorar fornecedores e engajar colaboradores. Busca certificações, mas enfrenta desafios na mensuração do impacto de suas ações.`,
  },
  {
    name: "👩‍🏫 Gabriela",
    description: `Consultora especialista em ESG, trabalha na área há mais de 10 anos.
    
    **Ações:** Atende empresas de pequeno e médio porte de diversos segmentos, se comunica com várias áreas dentro da empresa que atende, entrega relatórios e apresenta resultados de seus estudos.
    
    **Desafios e Preocupações:** Gabriela enfrenta dificuldades em mudar a cultura e o mindset da empresa. Ela lida com acesso limitado a informações internas e enfrenta o desafio de influenciar os tomadores de decisão para ir além do mínimo.`,
  },
];

const Personas = () => {
  const [allExpanded, setAllExpanded] = useState(false);

  const toggleAll = () => {
    setAllExpanded(!allExpanded);
  };

  return (
    <section className="personas">
      <div className="personas-title">
        <h3>Personas</h3>
      </div>

      {personasData.map((persona, index) => (
        <div
          key={index}
          className={`persona-card ${allExpanded ? "expanded" : ""}`}
          onClick={toggleAll} // Quando clicar, todos abrirão/fecharão
        >
          <div className="persona-header">
            <span className="toggle-icon">{allExpanded ? "▼" : "▶"}</span>
            <p><strong>{persona.name}</strong></p>
          </div>
          {allExpanded && (
  <p className="persona-description">
    {persona.description.split("\n").map((line, i) => (
      <React.Fragment key={i}>
        {line.split(/(\*\*.*?\*\*)/g).map((part, index) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={index}>{part.slice(2, -2)}</strong>
          ) : (
            part
          )
        )}
        <br />
      </React.Fragment>
    ))}
  </p>
)}

        </div>
      ))}
    </section>
  );
};

export default Personas;
