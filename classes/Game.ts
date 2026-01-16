import type { Game } from "../src/interfaces.js";

class PlayGame implements Game {
  cards: string[];

  constructor(cards: string[]) {
    this.cards = cards;
  }

  shuffleCards(): string[] {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      [this.cards[i], this.cards[randomIndex]] = [
        this.cards[randomIndex]!,
        this.cards[i]!,
      ];
    }
    return this.cards;
  }

  dealCards(noOfCards: number, playingCards: string[]): string[] {
    let dealCards: string[] = [];
    for (let i = 0; i < noOfCards; i++) {
      let card = playingCards.pop();
      if (card !== undefined) {
        dealCards.push(card);
      }
    }
    return dealCards;
  }

  playRound(): void {
    console.log("Playing round...");
  }
}

export default PlayGame;
