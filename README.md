# Blackjack Game
This is a simple implementation of the popular casino card game Blackjack. The game is played between a player and a dealer, and the goal is to get a hand value as close to 21 as possible without exceeding it. The player with a hand value closest to 21 without busting wins the game.

### Features
Deck creation: The deck of cards is created at the beginning of the game.
Deck shuffling: The deck is shuffled using the Fisher-Yates algorithm to ensure randomness.
Initial hand: The player and the dealer are each dealt two cards to start the game.
Hit: The player can request an additional card (hit) to increase their hand value.
Stay: The player can choose to end their turn and let the dealer play.
Dealer's turn: The dealer will continue to draw cards until their hand value reaches 17 or more.
Ace card handling: The value of the Ace card dynamically changes between 1 and 11 based on the hand's total.
Win determination: The game determines the winner based on the hand values of the player and the dealer.
User interface: The game provides a simple user interface with card images and messages indicating the game's progress and outcome.
### Technologies Used
HTML: Markup language for the game's user interface.
CSS: Styling language for the game's user interface.
JavaScript: Programming language used to implement the game's logic and functionality.
### Getting Started
To run the game locally, follow these steps:

Clone the repository: git clone https://github.com/your-username/blackjack-game.git
Navigate to the project directory: cd blackjack-game
Open the index.html file in a web browser.
Start playing Blackjack!
### How to Play
When the game loads, you will see the initial state of the game with the dealer's face-down card and the player's two cards.
Your current hand value is displayed on the screen. You can also see the value of the dealer's face-up card.
Click the "Hit" button to draw an additional card from the deck.
Keep hitting until you are satisfied with your hand or until you bust (hand value exceeds 21).
Click the "Stay" button to end your turn and let the dealer play.
The dealer will draw cards until their hand value reaches 17 or more.
The game will determine the winner based on the hand values of the player and the dealer.
The outcome of the game will be displayed on the screen.
You can click the "Restart" button to start a new game.
### License
This project is licensed under the MIT License. You are free to modify and use the code as per the license terms.

### Acknowledgements
The card images used in the game are from https://example.com.
The shuffle algorithm used is based on the Fisher-Yates algorithm.
Feel free to customize this README file based on your specific project, adding more details or sections as needed.