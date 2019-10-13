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
          <h2 className='Pokecard-title'>{this.card.name}</h2>
          <div className='Pokecard-image'>
            <img src={this.card.img} alt={this.card.name} />
          </div>
          <h3 className='Pokecard-data'>Type: {this.card.type}</h3>
          <h3 className='Pokecard-data'>EXP: {this.card.base_experience}</h3>
        </div>
      </div>
    );
  }
}

export default Pokecard;

