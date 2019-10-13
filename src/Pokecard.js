import React, { Component } from 'react';

// CUSTOM COMPONENTS

// COMPONENT STYLES
import './Pokecard.css';

class Pokecard extends Component {
  card = this.props.card;

  render() {
    return (
      <div className='Pokecard'>
        <div key={this.card.key}>
          <img src={this.card.img} alt={this.card.name} />
          <h2 className='Pokecard-title'>{this.card.name}</h2>
          <p className='Pokecard-data'>Type: {this.card.type}</p>
          <p className='Pokecard-data'>EXP: {this.card.base_experience}</p>
        </div>
      </div>
    );
  }
}

export default Pokecard;

