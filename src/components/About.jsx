import React from 'react';

import illustration from '../assets/png/svgillustr/illustration-aboutus.svg';
import laptop from '../assets/png/themes/laptop.png';

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__createx">
            <div className="about__createx-content">
              <div className="about__heading heading">
                <p className="heading__subtitle">About us</p>
                <h2 className="heading__title">Createx Online School</h2>
              </div>
              <div className="about__text">
                <p className="about__paragraph about__paragraph--accent">
                  Createx Online School is a leader in online studying. We have lots of courses and
                  programs from the main market experts.
                </p>
                <p className="about__paragraph">
                  We provide relevant approaches to online learning, internships and employment in
                  the largest companies in the country. Our educational programs help you get a new
                  specialty from scratch. During your studies, we will help you find a job. Check
                  the courses and online events that we organise.
                </p>
              </div>
              <div className="about__btn-box">
                <a href="#" className="about__btn button button--empty">
                  Explore events
                </a>
                <a href="#" className="about__btn button">
                  Browse courses
                </a>
              </div>
            </div>
            <img src={illustration} alt="" className="about__img"></img>
          </div>

          <div className="about__values">
            <div className="about__image-box">
              <img src={laptop} alt=""></img>
            </div>
            <ul className="about__numbers">
              <li className="about__number">
                <span>1200</span> studend drooped out
              </li>
              <li className="about__number">
                <span>84</span>failed courses
              </li>
              <li className="about__number">
                <span>16</span> unqualified tutors
              </li>
              <li className="about__number">
                <span>5</span> hours of experience
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
