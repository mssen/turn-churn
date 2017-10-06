import React from 'react';

import VictimList from './components/VictimList';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <VictimList victims={ [{ name: 'One'} , { name: 'Two'} ] }></VictimList>
      </div>
    )
  }
}