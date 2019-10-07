import React, { Component } from 'react';
import Pokecard from './Pokecard';

class Pokedex extends Component {
  render() {
    const { cards } = this.props;

    return (
      <Pokecard cards={cards} />
    );
  }
}

export default Pokedex;