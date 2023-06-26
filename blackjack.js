let playerHand = [];
let dealerHand = [];
let dealerhandSum = 0;
let playerhandSum = 0;
let hide;
let winner;
let deck = [];
let playerAce = 0;
let dealerAce = 0;

window.onload = function () {
  createDeck();
  shuffleDeck();
  initGame();
  document.getElementById("playerhand").innerText = "Player -" + playerhandSum;
};

function createDeck() {
  values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  types = ["C", "H", "D", "S"];
  deck = [];

  for (let i = 0; i < types.length; i++) {
    for (let j = 0; j < values.length; j++) {
      deck.push(values[j] + "-" + types[i]);
    }
  }
  console.log(deck);
}

function shuffleDeck() {
  //fischer yates method
  for (let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * deck.length);
    //swap elements
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  // console.log(deck);
}

function initGame() {
  hide = deck.pop();
  dealerhandSum += getValue(hide);
  dealerAce += getHandValue(hide);

  while (dealerhandSum < 17) {
    let card = deck.pop();
    let cardImg = document.createElement("img");
    cardImg.src = "./blackjack-cards/" + card + ".png";
    dealerhandSum += getValue(card);
    dealerAce += getHandValue(card);
    document.getElementById("dealer-card").append(cardImg);
  }

  console.log(hide);
  console.log("Dealer:", dealerhandSum);

  for (let i = 0; i < 2; i++) {
    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./blackjack-cards/" + card + ".png";
    playerHand.push(card);
    playerhandSum += getValue(card);
    playerAce += getHandValue(card);
    document.getElementById("player-card").append(cardImg);
  }
  console.log("Player:", playerhandSum);
}

function getValue(card) {
  const cardValue = card.split("-")[0];
  const cardValues = {
    A: 11,
    K: 10,
    Q: 10,
    J: 10,
  };
  return cardValues[cardValue] || parseInt(cardValue);
}

function getHandValue(hand) {
  let value = 0;
  let aceCount = 0;

  for (let i = 0; i < hand.length; i++) {
    const card = hand[i].split("-")[0];
    if ((card, card[0] === "A")) {
      aceCount++;
    } else {
      value += getValue(card);
    }
  }
  while (aceCount > 0) {
    if (value + 11 > 21) {
      value += 1;
    } else {
      value += 11;
    }
    aceCount--;
  }
  return value;
}
// try later
//

const hit = document.getElementById("hit");
const stay = document.getElementById("stay");

hit.addEventListener("click", canHit);
stay.addEventListener("click", canStay);

function canStay() {
  showDealerCard();
  let message = "";
  let sumMsg = "";
  while (dealerhandSum < 17) {
    const card = deck.pop();
    dealerHand.push(card);
    dealerhandSum += getValue(card);
    dealerAce += getHandValue(dealerHand);
  }
  if (playerhandSum > 21) {
    message = "Player Bust!, Dealer Wins!";
    console.log("Player Bust!, Dealer Wins!");
  } else if (playerhandSum > dealerhandSum || dealerhandSum > 21) {
    message = "Player Wins!";
    console.log("Player Wins!");
  } else if (playerhandSum > 21 && dealerhandSum <= 21) {
    message = "Dealer Wins!";
    console.log("Dealer Wins!");
  } else if (playerhandSum > 21 && dealerhandSum > 21) {
    message = "No Winner!";
    console.log("No Winner!");
  } else if (playerhandSum < dealerhandSum) {
    console.log("Dealer Wins!");
    message = "Dealer Wins!";
  } else if ((playerhandSum === dealerhandSum)) {
    message = "House Rules, Dealer Wins!";
  } else {
    message = "Dealer Wins!";
  }
  document.getElementById("dealerhand").innerHTML = "Dealer -" + dealerhandSum;
  document.getElementById("winmsg").innerText = message;
  document.querySelector("playerhand").innerText = sumMsg;
  return;
}

function showDealerCard() {
  document.getElementById("dealercardimg").src =
    "./blackjack-cards/" + hide + ".png";
}

function canHit() {
  if (playerhandSum > 21) {
    return;
  }
  let sumMsg = "";
  const card = deck.pop();
  playerHand.push(card);
  playerhandSum += getValue(card);
  playerAce += getHandValue(playerHand);
  if (playerhandSum > 21) {
    console.log("Player Bust!, Dealer Wins!");
    showDealerCard();
  } else {
    console.log("Player drew a card: ", card);
    console.log("Player hand sum:", playerhandSum);
    console.log("Player ace count", playerAce);
  }
  let cardImg = document.createElement("img");
  cardImg.src = "./blackjack-cards/" + card + ".png";
  document.getElementById("player-card").append(cardImg);
  document.getElementById("playerhand").innerText = "Player -" + playerhandSum;
  document.getElementById("dealerhand").innerHTML = "Dealer -" + dealerhandSum;
}
