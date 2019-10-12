import React, { Component } from 'react';

class Pokecard extends Component {
  render() {
    const { cards } = this.props;

    return (
      <div>
        {cards.map((card, key) =>
          <div key={key}>
            <img src={card.img} />
            <h2>{card.name}</h2>
            <p>Type: {card.type}</p>
            <p>EXP: {card.base_experience}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Pokecard;