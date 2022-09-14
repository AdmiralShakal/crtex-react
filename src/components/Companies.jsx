import React from 'react';

function Companies() {
  return (
    <section className="companies main__companies">
      <div className="container">
        <div className="companies__inner">
          <div className="companies__heading heading heading--text-center">
            <div className="heading__subtitle">best jobs for you</div>
            <div className="heading__title">Our students work here</div>
          </div>

          <ul className="companies__grid">
            <li className="companies__grid-item">
              <img
                src={require('../assets/png/logos/indepth.svg').default}
                alt=""
                className="companies__image"></img>
            </li>

            <li className="companies__grid-item">
              <img
                src={require('../assets/png/logos/higher.svg').default}
                alt=""
                className="companies__image"></img>
            </li>

            <li className="companies__grid-item">
              <img
                src={require('../assets/png/logos/sentinal-color.svg').default}
                alt=""
                className="companies__image"></img>
            </li>

            <li className="companies__grid-item">
              <img
                src={require('../assets/png/logos/happy.svg').default}
                alt=""
                className="companies__image"></img>
            </li>

            <li className="companies__grid-item">
              <img
                src={require('../assets/png/logos/forsale.svg').default}
                alt=""
                className="companies__image"></img>
            </li>

            <li className="companies__grid-item">
              <img
                src={require('../assets/png/logos/sunset-color.svg').default}
                alt=""
                className="companies__image"></img>
            </li>

            <li className="companies__grid-item">
              <img
                src={require('../assets/png/logos/atlantis.svg').default}
                alt=""
                className="companies__image"></img>
            </li>

            <li className="companies__grid-item">
              <img
                src={require('../assets/png/logos/delmar-color.svg').default}
                alt=""
                className="companies__image"></img>
            </li>

            <li className="companies__grid-item">
              <img
                src={require('../assets/png/logos/complete.svg').default}
                alt=""
                className="companies__image"></img>
            </li>

            <li className="companies__grid-item">
              <img
                src={require('../assets/png/logos/national-color.svg').default}
                alt=""
                className="companies__image"></img>
            </li>

            <li className="companies__grid-item">
              <img
                src={require('../assets/png/logos/ultimate.svg').default}
                alt=""
                className="companies__image"></img>
            </li>

            <li className="companies__grid-item">
              <img
                src={require('../assets/png/logos/united.svg').default}
                alt=""
                className="companies__image"></img>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Companies;
