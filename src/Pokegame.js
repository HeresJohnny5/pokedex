import React, { Component } from 'react';

// CUSTOM COMPONENTS
import Pokedex from './Pokedex';

// COMPONENT STYLES
import './Pokegame.css';

class Pokegame extends Component {
  cards = [
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

  p1Total = 0;
  p2Total = 0;

  imgSrc = (cards) => {
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

      return card.img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${newId}.png`;
    });
  }

  shuffle = (cards) => {
    return cards.sort(() => Math.random() - 0.5);
  }

  render() {
    this.imgSrc(this.cards);

    this.shuffle(this.cards);

    let p1Cards = this.cards.slice(0, 4);
    let p2Cards = this.cards.slice(4);

    p1Cards.forEach(card => {
      this.p1Total += card.base_experience;
    });

    p2Cards.forEach(card => {
      this.p2Total += card.base_experience;
    });

    return (
      <div className='Pokegame'>
        <h1 id='Pokegame-title'>Pokegame</h1>
        <Pokedex cards={p1Cards} total={this.p1Total} isWinner={this.p1Total > this.p2Total} />
        <Pokedex cards={p2Cards} total={this.p2Total} isWinner={this.p2Total > this.p1Total} />
      </div>
    );
  }
}

export default Pokegame;