import React from 'react';

import AddVictim from './components/AddVictim';
import VictimList from './components/VictimList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      victims: []
    };

    this.nextId = 1;

    this.addVictim = this.addVictim.bind(this);
  }

  addVictim(newVictimName) {
    this.setState((prevState) => ({
      victims: prevState.victims.concat({
        id: this.nextId++,
        name: newVictimName
      })
    }));
  }

  render() {
    return (
      <div>
        <h1>
          Turn<em>Churn</em>
        </h1>

        <AddVictim addVictim={ this.addVictim } />
        
        <VictimList victims={ this.state.victims } />
      </div>
    )
  }
}