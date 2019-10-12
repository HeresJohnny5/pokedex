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
          <h2>{card.name}</h2>
          <p>Type: {card.type}</p>
          <p>EXP: {card.base_experience}</p>
        </div>
      </div>
    );
  }
}

export default Pokecard;

