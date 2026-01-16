import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/me.jpg";
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed Projects</small>
            </article>
          </div>
          <p>
            Hello, I'm Prashant Kumar, a dedicated Full-Stack and React Native Developer with over 2 years of professional experience in building high-performance web and mobile applications. 
            I specialize in creating complex ecosystems like **Aurali**, an AI-driven conversational platform that connects users with professionals, and **Edusparsh**, a comprehensive School ERP system managing academic and administrative workflows.
          </p>
          <p>
            My portfolio also includes **Fasstays**, a robust flight and hotel booking platform designed for seamless travel management. With a strong foundation in the MERN stack, Next.js, and PostgreSQL, I focus on delivering scalable, user-centric solutions. 
            Whether it's developing AI-powered chat interfaces or transaction-safe ERP modules, I am passionate about turning innovative ideas into reality through clean and maintainable code.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
