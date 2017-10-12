import React from 'react';

const VictimList = ({ victims, deleteVictim }) => {
  return (
    <ul>
      {
        victims.map(victim =>
          <li key={ victim.id }>
            { victim.name }
            <button onClick={() => deleteVictim(victim.id) }>✕</button>
          </li>
        )
      }
    </ul>
  );
};

export default VictimList;