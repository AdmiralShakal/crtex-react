import { useState, useEffect } from 'react';
import data from '../json/directions.json';
import React from 'react';

function Directions() {
  const filtres = ['All', 'Marketing', 'HR', 'Managment', 'Design', 'Development'];
  const [chosedFilter, setChosedFilter] = useState('All');
  const [directions, setDirections] = useState(data);

  useEffect(() => {
    if (chosedFilter === 'All') {
      setDirections(data);
    } else {
      setDirections(data.filter((item) => item.category === chosedFilter));
    }
  }, [chosedFilter]);
  return (
    <section className="directions">
      <div className="container">
        <div className="directions__inner">
          <div className="directions__programms">
            <div className="directions__subtopic heading__subtitle">our main directions</div>
            <h1 className="directions__topic heading__title">What do we teach</h1>
            <ul className="directions__filtres">
              {filtres.map((filter) => {
                return (
                  <li
                    className={
                      filter === chosedFilter
                        ? 'directions__filtre directions__filtre--active'
                        : 'directions__filtre'
                    }>
                    <button
                      onClick={() => setChosedFilter(filter)}
                      className="directions__filtre-btn"
                      type="button">
                      {filter}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="directions__programs-list">
              {directions.map((item, id) => {
                if (item.category) {
                  return (
                    <div className=" directions__programs-item">
                      <img
                        src={require(`../assets/png/themes/image${item.image}.jpg`)}
                        alt=""
                        className="directions__picture"></img>
                      <div className="directions__text-block">
                        <span className={item.categegoryclass}>Marketing</span>
                        <div className="direction__text">{item.text}</div>
                        <div className="directions__button">Check Courses</div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div class="directions__coming">
                      <div class="directions__coming-text">New studying program coming soon...</div>
                    </div>
                  );
                }
              })}
            </div>
          </div>

          <div className="directions__sertificate">
            <div className="directions__sertificate-text">
              <div className="heading__subtitle">Createx Certificate</div>
              <div className="heading__title">Your expertise will be confirmed</div>
              <div className="directions__sertificate-paragraph">
                We are accredited by international professional organizations and institutes:
              </div>
              <div className="directions__companies">
                <img
                  src={require('../assets/png/logos/delmar-color.svg').default}
                  alt=""
                  className="directions__companie"></img>
                <img
                  src={require('../assets/png/logos/sentinal-color.svg').default}
                  alt=""
                  className="directions__companie"></img>
                <img
                  src={require('../assets/png/logos/national-color.svg').default}
                  alt=""
                  className="directions__companie"></img>
              </div>
            </div>
            <img
              className="directions__sertificate-img"
              src={require('../assets/png/diploma.jpg')}
              alt="diploma"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Directions;
