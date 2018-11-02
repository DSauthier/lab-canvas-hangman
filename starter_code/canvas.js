class Hangman {
  constructor(words, secretWord, letters, guessedLetter, errorsLeft) {
    this.words = ["parrot", "zebra", "lion", "dog"];
    // let newArray = this.letters;
    
    this.secretWord ;
    this.letters = [];
    this.correctLetter = [];
    this.errorsLeft = 10;
    this.guessedLetters = []
   
  }
  getWord() {
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
     
    // console.log(randomWord);
  }
  checkIfLetter(pressedKey) {
    if (pressedKey.keyCode >= 65 && event.keyCode <= 90) {
      // console.log(pressedKey.key)
    } else if (event.keyCode >= 97 && event.keyCode <= 122) {
      // console.log(pressedKey.key)
    }
  }

  checkClickedLetters(pressedKey) {
    // console.log("FIRST TIME TESTING")
    this.letters.push(pressedKey.key);
    // console.log(this.secretWord);
    let secretArray = this.secretWord;
    // console.log('=-=-=-',secretArray)
    secretArray = secretArray.split('');
    console.log(secretArray);
    
    for (let i = 0; i < secretArray.length; i++) {

      //  if(pressedKey.key != secretArray[i]){
        if(secretArray.indexOf(pressedKey.key) == -1){
        //   console.log(secretArray.indexOf(pressedKey.key));
        //  console.log(pressedKey.key)
        //  console.log(secretArray[i]);
        //  console.log(this.errorsLeft)
         return this.errorsLeft--;
        } else {
          console.log(`you got the letter ${pressedKey.key} correct!`)
          this.guessedLetters.push(pressedKey.key);
          console.log("olaaaaaa"+this.guessedLetters)

          return 
        }
      }
      console.log("-----"+this.errorsLeft)
  }
    // console.log(array[i])
    // if (pressedKey.key === this.letters[i]) {
    //   console.log("this key is already in the array")
    //   // return false
    // } else  {
    //   console.log("this key is not in the array yet!")
    //   // return true
    // }
  
  
  checkGameOver(){
    
    if(this.errorsLeft === 0){
      alert("you lose!")
      return true
    } else{
      
    }
    
  }
  checkWinner(){
    console.log(this.guessedLetters);
    // let.guessedLetters = this.guessedLetters 
    //.guessedLetters.split("");
    // console.log.guessedLetters)
    console.log("----- pressed letters = "+this.letters)
    for (let i = 0; i < this.secretWord.length; i++) {
      // for (let j = 0; j < this.correctLetter.length; j++) {
      //   if(this.secretWord[i] === this.guessedLetters[j]){
      //     console.log("hello")
      //   }

        
        
      // }
      
    }


    // if(secretArray.indexOf(pressedKey.key) == -1)
    //   alert("you won!")
    // } else {
    //   continue
    // }
    // this.guessedLetters = this.guessedLetters.join()

  }
  // this.errorsLeft = this.errorsLeft- 1 ; 
  // console.log(this.errorsLeft)
  // checkWinner(){
  //   if (this.secretWord)

  // }

    // function containsObject(pressedKey,compareArray) {
    //   for (let j = 0; j < compareArray.length; j++) {
    //     if (pressedKey === this.letters[j]) {
    //       console.log("hello world");
    //     }
    //   }

    //   console.log("fail!");
    // }
    // if(e.key === this.letters)
    // console.log(this.letters);
}



// class Hangman {
//   constructor(words, secretWord, letters, guessedLetter, errorsLeft) {
//     this.words = ["parrot", "zebra", "lion", "dog"];
//     let newArray = this.words
//     // this.secretWord = this.words[i];
//     this.letters = [];
//     this.guessedLetter = "";
//     this.errorsLeft = 10;
//   }
//   getWord() {
//     let randomWord = this.words[Math.floor(Math.random() * this.words.length)];
//     console.log(randomWord);
//   }

//   checkIfLetter() {

//   }

//   checkClickedLetters() {
//     this.letters.push(pressedKey.key);
//     console.log(this.letter)
//     function containsObject(pressedKey, newArray) {
//       for (let j = 0; j < newArray.length; j++) {
//         if (newArray[j] === pressedKey) {
//           console.log("you pressed this key already")
//           return true;
//         }
//       }

//       return false;
//     }
//   }
// }

// if (keyUp.keyCode >= 65 && event.keyCode <= 90) {
//   console.log(keyup.keyCode)
// } else if (event.keyCode >= 97 && event.keyCode <= 122) {
//   console.log(keyup.keyCode)
// }
// function HangmanCanvas(secretWord) {
//   this.ctx = document.getElementById('hangman').getContext('2d');
// }

// HangmanCanvas.prototype.createBoard = function () {

// };

// HangmanCanvas.prototype.drawLines = function () {

// };

// HangmanCanvas.prototype.writeCorrectLetter = function (index) {

// };

// HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

// };

// HangmanCanvas.prototype.drawHangman = function (shape) {

// };

// HangmanCanvas.prototype.gameOver = function () {

// };

// HangmanCanvas.prototype.winner = function () {

// };
