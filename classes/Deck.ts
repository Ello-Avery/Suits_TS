import type { Suit, CardValue, Deck } from "../src/interfaces.js";

class DeckCreator implements Deck {
  suits: Suit[];
  cardValues: CardValue[];
  cards: string[];

  constructor(suits: Suit[], CardValues: CardValue[]) {
    this.suits = suits;
    this.cardValues = CardValues;
    this.cards = [];
    this.createDeck();
  }
  createDeck(): string[] {
    for (let suit of this.suits) {
      for (let card of this.cardValues) {
        this.cards.push(`${card}${suit}`);
      }
    }
    return this.cards;
  }
}

export default DeckCreator;
