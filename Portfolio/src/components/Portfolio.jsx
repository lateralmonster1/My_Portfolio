// src/components/Portfolio.jsx
import Project from './Project';

function Portfolio() {
  const projects = [
    {
      title: 'Favorite Project',
      image: '/images/proj1.png',
      liveLink: 'https://breannacamacho.github.io/Nomad/',
      repoLink: 'https://github.com/lateralmonster1/Nomad.git',
    },
    // add 5 more projects here
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
