// src/components/Portfolio.jsx
import Project from './Project';

function Portfolio() {
  const projects = [
    {
      title: 'Favorite Project',
      image: '/path/to/project1.jpg',
      liveLink: 'https://example.com/project1',
      repoLink: 'https://github.com/username/project1',
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
