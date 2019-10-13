import React, { Component } from 'react';

// CUSTOM COMPONENTS
import Pokecard from './Pokecard';

// COMPONENT STYLES
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    const { cards, total, isWinner } = this.props;
    let title;

    if (isWinner) {
      title = <h2 className='Pokedex-winner'>Winning Hand</h2>
    } else {
      title = <h2 className='Pokedex-loser'>Losing Hand</h2>
    }

    return (
      <div className='Pokedex'>
        {title}
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