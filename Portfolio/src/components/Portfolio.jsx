// src/components/Portfolio.jsx
import Project from './Project';

function Portfolio() {
  const projects = [
    {
      title: 'Favorite Project',
      image: 'Screenshot 2024-08-29 142835.png',
      repoLink: 'https://github.com/lateralmonster1/social-network-api.git',
    },
    // Add more projects here, ensuring you have six in total
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
