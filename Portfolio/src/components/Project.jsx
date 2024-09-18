// src/components/Project.jsx
import React from 'react';

function Project({ title, image, liveLink, repoLink }) {
  return (
    <div className="project">
      <img src="/images/Screenshot 2024-09-18 132630.png" alt={title}  className="project-image"  />  
      <h3 className="project-title">{title}</h3>
      <a href={liveLink} target="_blank" rel="https://breannacamacho.github.io/Nomad/">Live Site</a>
      <a href={repoLink} target="_blank" rel="https://github.com/lateralmonster1/Nomad.git">GitHub Repo</a>
    </div>
  );
}

export default Project;
