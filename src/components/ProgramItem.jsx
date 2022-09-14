import React from 'react';

function ProgramItem({ lesson, title, text }) {
  return (
    <li className="program__acordeon-item">
      <div className="program_acordeon-link">
        <div className="program__acordeon-head">
          <span>{lesson}</span> {title}
        </div>
        <p className="program__acordeon-text">{text}</p>
      </div>
    </li>
  );
}

export default ProgramItem;
