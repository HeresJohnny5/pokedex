import React, { Component } from 'react';

// CUSTOM COMPONENTS

// COMPONENT STYLES
import './Pokecard.css';

class Pokecard extends Component {
  render() {
    const card = this.props.card;

    return (
      <div className='Pokecard'>
        <div key={card.key}>
          <img src={card.img} alt={card.name} />
          <h2 className='Pokecard-title'>{card.name}</h2>
          <p className='Pokecard-data'>Type: {card.type}</p>
          <p className='Pokecard-data'>EXP: {card.base_experience}</p>
        </div>
      </div>
    );
  }
}

export default Pokecard;

