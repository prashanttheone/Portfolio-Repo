import React from 'react';
// import CV from '../../assets/cv_meri_gogichashvili.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={""} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;