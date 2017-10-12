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
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addVictim(newVictimName) {
    this.setState((prevState) => ({
      victims: prevState.victims.concat({
        id: this.nextId++,
        name: newVictimName
      })
    }));
  }

  handleClear() {
    this.setState({
      victims: []
    });
  }

  handleSubmit(event) {
    const ids = Object.keys(this.state.victims);
    const randomId = ids[Math.floor(Math.random() * ids.length)];
    const theChosen = this.state.victims[randomId];
    alert(`It's ${theChosen.name}'s turn!`);
    this.handleClear();
  }

  render() {
    return (
      <div>
        <h1>
          Turn<em>Churn</em>
        </h1>

        <AddVictim addVictim={ this.addVictim } />
        <VictimList victims={ this.state.victims } />

        {
          this.state.victims.length > 0
            && <div>
                  <button onClick={ this.handleClear }>Clear it!</button>
                  <button onClick={ this.handleSubmit }>Churn it!</button>
               </div>
        }
      </div>
    )
  }
}