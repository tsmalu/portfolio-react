import React from "react";
import fotoMalu from "../assets/imgs/global/foto-malu.jpeg";

const ProjectHeader = ({ title, tags, author, role, details }) => {
  return (
    <div className="project-title">
      <h2>{title}</h2>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <div className="author-info">
        <img
          src={fotoMalu}
          alt={`Foto de ${author}`}
          className="author-avatar"
        />
        <div className="author-details">
          <div className="author-name">
            {author} <span className="follow">• {role}</span>
          </div>
          <div className="publication-details">
            {details}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
