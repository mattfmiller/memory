var deck = [];
var board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function Card(type, image) {
  this.type = type;
}

var card1 = new Card('card1');
deck.push(card1);
var card2 = new Card('card2');
deck.push(card2);
var card3 = new Card('card3');
deck.push(card3);
var card4 = new Card('card4');
deck.push(card4);
var card5 = new Card('card5');
deck.push(card5);
var card6 = new Card('card1');
deck.push(card6);
var card7 = new Card('card2');
deck.push(card7);
var card8 = new Card('card3');
deck.push(card8);
var card9 = new Card('card4');
deck.push(card9);
var card10 = new Card('card5');
deck.push(card10);

function createDeck () {
  deck.push(card)
}

function drawBoard() {
  for (var i = 0; i < deck.length; i++) {
    var randomLocation1 = Math.floor(Math.random() *  10);
    if (typeof board[randomLocation1] === 'number') {
    board[randomLocation1] = deck[i];
    } else {
    deck.push(deck[i]);
    }
  }
}
