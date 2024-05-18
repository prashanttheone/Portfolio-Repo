import React from 'react';
import IMG1 from '../../assets/movix.jpg';
import IMG4 from '../../assets/cal.jpg';
import IMG5 from '../../assets/todo.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Movix',
      img: IMG1,
      description:
        'Frontend Development: Led the development of the frontend using React and Redux, ensuring a responsive and user-friendly interface for seamless navigation.\n\nAPI Integration: Successfully integrated the TMBD API, allowing Movix to dynamically fetch and display up-to-date movie information, including details and trailers.',
      technologies: 'React, API | SCSS',
      link: 'https://movix-chi-three.vercel.app/',
      github: 'https://github.com/prashanttheone/MOVIX',
    },
    {
      id: 2,
      title: 'Calculator',
      img: IMG4,
      description:
        'Developed a dynamic calculator using JavaScript, providing users with a seamless and efficient tool for basic arithmetic operations. The calculator features a clean and intuitive user interface, allowing for easy input and displaying accurate results in real-time. This project showcases my proficiency in JavaScript for creating interactive and functional web applications.',
      technologies: 'JavaScript | HTML CSS',
      link: 'https://a75fddf0-787e-4675-8d9b-efbdb192d51a-00-3avh3tg442zkl.kirk.replit.dev/',
      github: '#',
    },
    {
      id: 3,
      title: 'Food Order App',
      img: IMG5,
      description: 'Foodie Order App is a user-friendly platform for ordering meals, designed with modern technology to ensure a seamless experience. It uses Firebase Authentication for secure user sign-in and a reliable payment gateway for easy transactions. Redux efficiently manages the app's state for smooth performance. With Foodie Order App, ordering your favorite food is simple, secure, and convenient.',
      technologies: 'React, Firebase,Redux',
      link: 'https://zomato-vert.vercel.app/',
      github: 'https://github.com/prashanttheone/zomato',
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
