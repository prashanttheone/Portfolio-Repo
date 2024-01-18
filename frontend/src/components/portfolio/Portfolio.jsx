import React from 'react';
import IMG1 from '../../assets/alc.png';
import IMG2 from '../../assets/todo.png';
import IMG3 from '../../assets/shelter.png';
import IMG4 from '../../assets/fake.png';
import IMG5 from '../../assets/news.png';
import IMG6 from '../../assets/math.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Adventist Learning Center',
      img: IMG1,
      description:
        'Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.',
      technologies: 'Ruby on Rails | SCSS',
      link: 'https://adventistlearningcenter-257375ab1970.herokuapp.com/',
      github: 'https://github.com/Meri-MG/school',
    },
    {
      id: 2,
      title: 'FakeStore',
      img: IMG4,
      description:
        'FakeStore app that provides information about available products and their details',
      technologies: 'React | Redux',
      link: 'https://fakestore-metrics.netlify.app/',
      github: 'https://github.com/Meri-MG/Fakestore---react',
    },
    {
      id: 3,
      title: 'To-Do App',
      img: IMG1,
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'JavaScript | Webpack',
      link: 'https://meri-mg.github.io/To-Do-List/dist/',
      github: 'https://github.com/Meri-MG/To-Do-List',
    },
   
   
    
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;