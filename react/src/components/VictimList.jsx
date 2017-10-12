import React from 'react';

import style from './VictimList.css';

const VictimList = ({ victims, deleteVictim }) => {
  return (
    <ul className="victim-list">
      {
        victims.map(victim =>
          <li className="victim" key={ victim.id }>
            { victim.name }
            <button className="victim-delete" onClick={() => deleteVictim(victim.id) }>✕</button>
          </li>
        )
      }
    </ul>
  );
};

export default VictimList;