# Suits_TS

A TypeScript-based card game framework that provides the core functionality for creating, shuffling, and dealing playing cards with an extensible architecture for implementing various card games.

## Project Planning

![Project Planning](./media/Suits%20Game.drawio.png)

## Features

- **Deck Creation**: Automatically generates a standard 52-card deck with four suits (Hearts ♥️, Spades ♠️, Diamonds ♦️, Clubs ♣️)
- **Card Management**: Type-safe card handling using TypeScript interfaces
- **Game Operations**:
  - Shuffle cards with Fisher-Yates algorithm
  - Deal specified number of cards
  - Round-based gameplay structure
- **Player System**: Player management with name and bank roll (in development)
- **Extensible Architecture**: Easy to extend for specific card games

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- TypeScript

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Ello-Avery/Suits_TS.git
cd Suits_TS
```

2. Install dependencies:

```bash
npm install
```

3. Compile TypeScript:

```bash
npx tsc
```

## Project Structure

```
Suits_TS/
├── classes/
│   ├── Deck.ts          # Deck creation and management
│   └── Game.ts          # Game logic and card operations
├── src/
│   ├── index.ts         # Main entry point
│   └── interfaces.ts    # TypeScript type definitions
├── node_modules/
├── package.json
├── package-lock.json
└── tsconfig.json
```

## Usage

### Basic Example

```typescript
import DeckCreator from "./classes/Deck.js";
import PlayGame from "./classes/Game.js";

// Define suits and card values
const suits = ["♥️", "♠️", "♦️", "♣️"];
const cardValues = [
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

// Create a new deck
const myDeck = new DeckCreator(suits, cardValues);
let playingCards = myDeck.cards;

// Initialize game
const game = new PlayGame(playingCards);

// Shuffle the deck
let shuffledCards = game.shuffleCards();

// Deal 5 cards
let dealtCards = game.dealCards(5, shuffledCards);
console.log(`Your cards: ${dealtCards}`);
```

## TypeScript Interfaces

### Suit Type

```typescript
type Suit = "♥️" | "♦️" | "♠️" | "♣️";
```

### CardValue Type

```typescript
type CardValue =
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
```

### Deck Interface

```typescript
interface Deck {
  suits: Suit[];
  cardValues: CardValue[];
  cards: string[];
  createDeck: () => string[];
}
```

### Game Interface

```typescript
interface Game {
  shuffleCards: () => string[];
  dealCards: (noOfCards: number, cards: string[]) => string[];
  playRound: () => void;
}
```

## Classes

### DeckCreator

Creates and manages a deck of playing cards.

**Constructor:**

- `suits`: Array of Suit types
- `cardValues`: Array of CardValue types

**Methods:**

- `createDeck()`: Generates all 52 cards by combining suits and values

### PlayGame

Handles game operations and card manipulation.

**Constructor:**

- `cards`: Array of card strings

**Methods:**

- `shuffleCards()`: Randomly shuffles the deck using Fisher-Yates algorithm
- `dealCards(noOfCards, playingCards)`: Deals specified number of cards from the deck
- `playRound()`: Placeholder for round-based game logic

## Roadmap

- [ ] Implement Player class with betting system
- [ ] Add `takeBet()` method to handle player bets
- [ ] Add `addWinnings()` method to manage player winnings
- [ ] Implement `playRound()` game logic
- [ ] Add support for multiple players
- [ ] Create specific card game implementations (Poker, Blackjack, etc.)
- [ ] Add game state management
- [ ] Implement card comparison logic
- [ ] Add unit tests

## Development

### Compiling TypeScript

```bash
npx tsc
```

### Running the Application

```bash
node dist/index.js
```

Or if using ts-node:

```bash
npx ts-node src/index.ts
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Ello-Avery

## Acknowledgments

- Built with TypeScript for type safety
- Implements standard playing card conventions
- Uses Fisher-Yates shuffle algorithm for true randomization
