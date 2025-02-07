import React from "react";
import "../styles/ProjectStyles.css";


function AuthorInfo({ name, role, image, details }) {
  return (
    <div className="author-info">
      <img src={image} alt={`Foto de ${name}`} className="author-avatar" />
      <div className="author-details">
        <div className="author-name">
          {name} <span className="follow">• {role}</span>
        </div>
        <div className="publication-details">{details}</div>
      </div>
    </div>
  );
}

export default AuthorInfo;
