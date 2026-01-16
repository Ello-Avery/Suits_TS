export type Suit = "♥️" | "♦️" | "♠️" | "♣️";
export type CardValue =
  | "A"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K";

export interface Deck {
  suits: Suit[];
  cardValues: CardValue[];
  cards: string[];
  createDeck: () => string[];
}

export interface Game {
  shuffleCards: () => string[];
  dealCards: (noOfCards: number, cards: string[]) => string[];
  playRound: () => void;
}
