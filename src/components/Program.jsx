import React from 'react';
import programs from '../json/programs.json';
import ProgramItem from './ProgramItem';
import { useState } from 'react';

function Program() {
  const [chosedItem, setChosedItem] = useState(0);
  const [items, setItems] = useState(programs);
  return (
    <section className="program program__main">
      <div className="container">
        <div className="program__inner">
          <div className="program__heading heading">
            <div className="heading__subtitle">Course program</div>
            <div className="heading__title">What will you learn</div>
          </div>

          <div className="program__info">
            <ul className="program__acordeon">
              {items.map((item, id) => {
                return (
                  <li
                    key={id}
                    className={
                      id === chosedItem
                        ? 'program__acordeon-item program__acordeon-item--active'
                        : 'program__acordeon-item'
                    }
                    onClick={() => setChosedItem(id)}>
                    <div className="program_acordeon-link">
                      <div className="program__acordeon-head">
                        <span>{item.lesson}</span> {item.title}
                      </div>
                      <p className="program__acordeon-text">{item.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="program__illustration">
              <img
                src={require('../assets/png/svgillustr/illustration-learn.svg').default}
                alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Program;
