// src/components/Project.jsx
function Project({ title, image, liveLink, repoLink }) {
    return (
      <div className="project">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Site</a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
    );
  }
  
  export default Project;
  