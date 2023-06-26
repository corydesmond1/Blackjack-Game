# Blackjack Game
This is a simple implementation of the popular casino card game Blackjack. The game is played between a player and a dealer, and the goal is to get a hand value as close to 21 as possible without exceeding it. The player with a hand value closest to 21 without busting wins the game.


### Game Preview 

![image](https://github.com/corydesmond1/Blackjack-Game/assets/134815231/bb7ce1e8-98d1-459f-bf4d-f0931d37b570)
### MVP
-Hit and Stay button working with click events to show cards
- Randomly select a card from the deck array to show on screen
- Click event to shuffle the deck (onload)
- Game logic for handling a winner

### Features
Deck creation: The deck of cards is created at the beginning of the game when the window loads.
Deck shuffling: The deck is shuffled using the Fisher-Yates algorithm to ensure randomness.
Initial hand: The player is dealt 2 cards and the dealers hand has already been played and awaiting your turn to end.
Hit: The player can request an additional card (hit) to increase their hand value.
Stay: The player can choose to end their turn and result the hands of both player and dealer.
Dealer's turn: The dealer, on load, has already drawn cards until their hand value reaches 17 or more.
Ace card handling: The value of the Ace card dynamically changes between 1 and 11 based on the hand's total.
Win determination: The game determines the winner based on the hand values of the player and the dealer.
User interface: The game provides a simple user interface with card images and messages indicating the game's progress and outcome.
### Technologies Used
HTML: Markup language for the game's user interface.
CSS: Styling language for the game's user interface.
JavaScript: Programming language used to implement the game's logic and functionality.

### How to Play
When the game loads, you will see the initial state of the game with the dealer's face-down card and the player's two cards.
Your current hand value is displayed on the screen. You can also see the value of the dealer's face-up card.
Click the "Hit" button to draw an additional card from the deck.
Keep hitting until you are satisfied with your hand or until you bust (hand value exceeds 21).
Click the "Stay" button to end your turn and let the game end.
The dealer will draw cards until their hand value reaches 17 or more.
The game will determine the winner based on the hand values of the player and the dealer.
The outcome of the game will be displayed on the screen.

### Next Steps 

I would like to get my Aces to return either 1 or 11 respectively and incorperate betting functionality.

### Play Here!
https://corydesmond1.github.io/Blackjack-Game/
