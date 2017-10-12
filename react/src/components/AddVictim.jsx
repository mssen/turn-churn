import React from 'react';

import style from './AddVictim.css';

export default class AddVictim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      victim: ''
    };

    this.handleUpdateVictim = this.handleUpdateVictim.bind(this);
    this.handleAddVictim = this.handleAddVictim.bind(this);
  }

  handleUpdateVictim(event) {
    this.setState({
      victim: event.target.value
    });
  }

  handleAddVictim(event) {
    if (event.type === 'click' || event.key === 'Enter') {
      this.props.addVictim(this.state.victim);
      this.setState({
        victim: ''
      });
    }
  }

  render() {
    return (
      <div className="add-container">
        <input
          className="victim-input"
          type="text"
          placeholder="The next victim..."
          value={ this.state.victim }
          onChange={ this.handleUpdateVictim }
          onKeyUp={ this.handleAddVictim }
          autoFocus />
        <button className="add-button" onClick={ this.handleAddVictim } >+ Add</button>
      </div>
    )
  }
}