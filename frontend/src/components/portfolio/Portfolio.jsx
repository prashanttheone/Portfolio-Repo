import React from 'react';
import IMG1 from '../../assets/fastays.png';
import IMG2 from '../../assets/aurali.png';
import IMG3 from '../../assets/edusparsh.png';
import IMG4 from '../../assets/cal.jpg';
import IMG5 from '../../assets/food delivery.jpg';
import IMG6 from '../../assets/todo.png';

import './portfolio.css';

const Portfolio = () => {
  const webProjects = [
    {
      id: 1,
      title: 'Aurali — AI Chat Platform',
      img: IMG2,
      description:
        'A sophisticated AI chat application where users and professionals interact via an LLM-driven engine (Gemini). The system understands core user needs to recommend the best-matched professionals for consultations. Includes appointment booking and secure payment gateway integration.',
      technologies: 'React, Node.js, Gemini AI, Firebase',
      link: 'http://staging.aurali.co/',
    },
    {
      id: 2,
      title: 'Edusparsh — School ERP',
      img: IMG3,
      description:
        'A comprehensive School ERP software managing CMS, student onboarding, teacher workflows, exam scheduling, and fee management. Features a robust dashboard for centralized school administration and real-time data tracking.',
      technologies: 'Next.js, PostgreSQL, Prisma, Node.js',
      link: 'https://www.edusparsh.com/',
    },
    {
      id: 3,
      title: 'Fasstays — Flight & Hotel Booking',
      img: IMG1,
      description:
        'A full-scale travel platform similar to MMT, facilitating seamless flight and hotel bookings along with curated tour packages. Features optimized search algorithms and dynamic API integrations for real-time travel management.',
      technologies: 'React, Redux, REST APIs, Tailwind CSS',
      link: 'https://prod.fastays.com/',
    },
  ];

  const androidProjects = [
    {
      id: 1,
      title: 'Fasstays — Flight & Hotel Booking',
       img: IMG1,
      description:
        'A high-performance Android application for the Fasstays travel platform. Features real-time flight and hotel search, secure booking flows, and integrated tour package management for a seamless native travel experience.',
      technologies: 'React Native, Redux, REST APIs, NativeWind',
      link: 'https://play.google.com/store/apps/details?id=com.fastays',
    },
    {
      id: 2,
      title: 'Edusparsh Mobile ERP',
      img: IMG3,
      description:
        'A high-performance Android application for the Edusparsh ecosystem. Provides students and teachers with instant access to attendance, academic records, and fee payments with offline caching and NativeWind UI.',
      technologies: 'React Native, NativeWind, PostgreSQL, REST APIs',
      link: 'https://play.google.com/store/apps/details?id=com.maitretech.eduSparsh'
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container">
        <h3 className="portfolio__category-title">Web Applications</h3>
        <div className="portfolio__container">
          {webProjects.map((pro) => (
            <article className="portfolio__item" key={pro.id}>
              <div className="portfolio__item-image">
                <img src={pro.img} alt={pro.title} />
              </div>
              <div className="portfolio__item-content">
                <h3>{pro.title}</h3>
                <p>{pro.description}</p>
                <p><strong>Tech:</strong> {pro.technologies}</p>
              </div>
              <div className="portfolio__item-cta">
                <a
                  href={pro.link}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>

        <h3 className="portfolio__category-title">Android Applications</h3>
        <div className="portfolio__container">
          {androidProjects.map((pro) => (
            <article className="portfolio__item" key={pro.id}>
              <div className="portfolio__item-image">
                <img src={pro.img} alt={pro.title} />
              </div>
              <div className="portfolio__item-content">
                <h3>{pro.title}</h3>
                <p>{pro.description}</p>
                <p><strong>Tech:</strong> {pro.technologies}</p>
              </div>
              <div className="portfolio__item-cta">
                <a
                  href={pro.link}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  VIEW ON PLAY STORE
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
