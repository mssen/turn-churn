import React from 'react';

const VictimList = ({ victims }) =>
  <ul>
    {
      victims.map(victim => <li key={ victim.id }>{ victim.name }</li>)
    }
  </ul>

export default VictimList;