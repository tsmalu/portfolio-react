import React from "react";
import "../styles/ProjectStyles.css";


function ProjectTitle({ title, tags }) {
  return (
    <section className="project-title">
      <h2>{title}</h2>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </section>
  );
}

export default ProjectTitle;
