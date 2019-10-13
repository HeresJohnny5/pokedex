import React, { Component } from 'react';

// CUSTOM COMPONENTS
import Pokecard from './Pokecard';

// COMPONENT STYLES
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    const { cards, p1Total, p2Total } = this.props;

    return (
      <div className='Pokedex'>
        {p1Total > p2Total ? <h2>Winning Hand</h2> : <h2>Losing Hand</h2>}
        <p className='Pokedex-total'>Total Experience: {p1Total || p2Total}</p>
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