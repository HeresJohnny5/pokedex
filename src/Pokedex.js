import React, { Component } from 'react';

// CUSTOM COMPONENTS
import Pokecard from './Pokecard';

// COMPONENT STYLES
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    const { cards, total, isWinner } = this.props;

    return (
      <div className='Pokedex'>
        <h2 className={isWinner ? 'Pokedex-winner' : 'Pokedex-loser'}>{isWinner ? 'Winner' : 'Loser'}</h2>
        <p className='Pokedex-total'>Total Experience: {total}</p>
        <div className='Pokedex-cards'>
          {cards.map((card, key) => (
            <Pokecard key={key} card={card} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;