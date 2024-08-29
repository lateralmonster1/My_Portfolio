// src/components/Project.jsx
import React from 'react';

function Project({ title, image, liveLink, repoLink }) {
  return (
    <div className="project">
      <img src="/Portfolio/proj1.png" alt={title} className="project-image" />  {/* Use an absolute path */}
      <h3 className="project-title">{title}</h3>
      <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Site</a>
      <a href={repoLink} target="_blank" rel="https://github.com/lateralmonster1/social-network-api.git">GitHub Repo</a>
    </div>
  );
}

export default Project;
