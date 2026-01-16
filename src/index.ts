import DeckCreator from "../classes/Deck.js";
import PlayGame from "../classes/Game.js";
import type { Suit, CardValue } from "../src/interfaces.js";

// Create Deck of Cards

const suits: Suit[] = ["♥️", "♠️", "♦️", "♣️"];

const cardValues: CardValue[] = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const myDeck = new DeckCreator(suits, cardValues);

let playingCards = myDeck.cards;

console.log(playingCards);

const firstRound = new PlayGame(playingCards);

let shuffledCards = firstRound.shuffleCards();

console.log(shuffledCards);

let dealCards = firstRound.dealCards(5, shuffledCards);

console.log(`Your Card is ${dealCards}`);

