// var hangman;

// function Hangman() {

// }

// Hangman.prototype.getWord = function () {

// };

// Hangman.prototype.checkIfLetter = function (keyCode) {

// };

// Hangman.prototype.checkClickedLetters = function (key) {

// };

// Hangman.prototype.addCorrectLetter = function (i) {

// };

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };
let theGame;

document.getElementById('start-game-button').onclick = function () {
 theGame = new Hangman();
 theGame.getWord();
//  document.onkeyup

document.onkeyup = function (pressedKey) {
  theGame.checkIfLetter(pressedKey);

  theGame.checkClickedLetters(pressedKey);

  theGame.checkGameOver();
  theGame.checkWinner();
};

};
