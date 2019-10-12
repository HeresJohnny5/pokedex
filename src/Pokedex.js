import React, { Component } from 'react';
import Pokecard from './Pokecard';

class Pokedex extends Component {
  render() {
    const cards = [
      {
        id: 4,
        name: 'Charmander',
        type: 'fire',
        base_experience: 62
      },
      {
        id: 7,
        name: 'Squirtle',
        type: 'water',
        base_experience: 63
      },
      {
        id: 11,
        name: 'Metapod',
        type: 'bug',
        base_experience: 72
      },
      {
        id: 12,
        name: 'Butterfree',
        type: 'flying',
        base_experience: 178
      },
      {
        id: 25,
        name: 'Pikachu',
        type: 'electric',
        base_experience: 112
      },
      {
        id: 39,
        name: 'Jigglypuff',
        type: 'normal',
        base_experience: 95
      },
      {
        id: 94,
        name: 'Gengar',
        type: 'poison',
        base_experience: 225
      },
      {
        id: 133,
        name: 'Eevee',
        type: 'normal',
        base_experience: 65
      }
    ];

    const imgSrc = (cards) => {
      return cards.map(card => {
        let idLength = card.id.toString().length;
        let newId;

        if (idLength === 1) {
          newId = `00${card.id}`;
        } else if (idLength === 2) {
          newId = `0${card.id}`;
        } else {
          newId = card.id;
        }

        card.img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${newId}.png`;
      });
    }

    imgSrc(cards);

    return (
      <div>
        <h1>Pokedex</h1>
        <Pokecard cards={cards} />
      </div>
    );
  }
}

export default Pokedex;