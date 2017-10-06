import React from 'react';

const VictimList = ({ victims }) =>
  <ul>
    {
      victims.map(victim => <li>{ victim.name }</li>)
    }
  </ul>

export default VictimList;