import {Board} from './board.js';
import './styles.css';

function assignValues(obj) {
  for (var i = 0; i < obj.slots.length; i++) {
    $('#' + (i + 1)).attr('name', obj.slots[i].type);
    console.log('td #' + (i + 1).toString());
  }
}

function assignImgs(obj) {
  for (var i = 0; i < obj.slots.length; i++) {
    $('#' + (i + 1)).append('<img src="' + obj.slots[i].type + '.png">');
  }
}

$(function (){
  var gameBoard = new Board();
  gameBoard.createDeck();
  gameBoard.drawBoard();
  console.log(gameBoard);
  assignValues(gameBoard);
  assignImgs(gameBoard);

  $('.face-card').click(function(){
    var clickedCard = $(this).attr('name');
    console.log(clickedCard);
  });

});
