import React from "react";

const SectionIntroduction = ({ title, paragraphs }) => {
  return (
    <section className="section-introduction">
      <h3>{title}</h3>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>
          {paragraph}
        </p>
      ))}
    </section>
  );
};

export default SectionIntroduction;
