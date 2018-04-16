import {Card} from './card.js';

export function Board () {
   this.slots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   this.deck = [];
 }

Board.prototype.createDeck = function () {
  var card1 = new Card('card1');
  this.deck.push(card1, card1);
  var card2 = new Card('card2');
  this.deck.push(card2, card2);
  var card3 = new Card('card3');
  this.deck.push(card3, card3);
  var card4 = new Card('card4');
  this.deck.push(card4, card4);
  var card5 = new Card('card5');
  this.deck.push(card5, card5);

  return this.deck;
};

Board.prototype.drawBoard = function () {
  for (var i = 0; i < this.deck.length; i++) {
    var randomLocation1 = Math.floor(Math.random() *  10);
    if (typeof this.slots[randomLocation1] === 'number') {
    this.slots[randomLocation1] = this.deck[i];
    } else {
    this.deck.push(this.deck[i]);
    }
  }
  return this.slots;
};
