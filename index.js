//  Require the needed constructor files and modules
var Randomword = require("./Word.js");
var inquirer = require("inquirer");

//  Creation of array of names to guess
var characterNames = ["palpatine", "vader", "leia", "luke", "obi wan", "yoda", "han solo", "chewbacca", "boba fett", "jabba the hut"];
var newWordObject;
var guessesLeft = 10;
var guessArray = [];
var newWordString;

/*  -------------------  Functions to use for the game -----------------------------------*/

// Function for checking to see if selected letter was already used
function alreadyGuessed(letter) {
  for (y = 0; y < guessArray.length; y++) {
    if (letter === guessArray[y]) {
      return true;
    }
  }
  return false;
}

//  Function for when user guesses letter
function guessedLetter(letter){
  guessArray.push(letter);
  console.log(guessArray);
  if(newWordObject.checkArray(letter)){
    console.log("\nCORRECT !!!\n");
  } else {
    console.log("\nINCORRECT !!!\n");
    guessesLeft--;
    console.log("You have " + guessesLeft + " guesses left.\n");
  }

  console.log(displayWordArray() + "\n\n");
}

//  Random Word Position Selector
function randomPosition() {
  var random = Math.floor(Math.random() * 10);
  return random;
}

// Function to create New Word object from the constructor
function createWordObject(word) {
  console.log(word);
  var randomArray = word.split("");
  newWordObject = new Randomword(randomArray);
  newWordObject.createArrayObjects();
}

// Function to return a string for display in the CLI based on the values in the word array
function displayWordArray() {
  var displayString = "";
  for (let index = 0; index < newWordObject.wordArray.length; index++) {
    displayString += newWordObject.wordArray[index].beenGuessed() + " ";
  }
  return displayString;
}

//  Function to ask if user wishes to continue the game

//  Function to Start and restart games
function beginNewGame() {
  newWordObject = {};
  newWordString = characterNames[randomPosition()];
  console.log(newWordString);
  createWordObject(newWordString);
  guessesLeft = 10;
  console.log("Start New Star Wars Name Guess Game");
  console.log(displayWordArray() + "\n");
  playGame();
}

//  Function to Play the Game
function playGame() {
//   //  Use Inquirer module to obtain need guess from CLI
   inquirer
     .prompt([
       {
         type: "input",
         message: "Please guess a letter for the selected name of a Star Wars character.",
         name: "userGuess",
         //  Validate function to make sure no blank response is given, no more than 1 character is entered, and to make sure the character entered is a letter.
         validate: function validateUserGuess(userGuess) {
            var letters = /^[A-Za-z]+$/;
            if (userGuess !== "" && userGuess.length === 1 && userGuess.match(letters) !== null) {
            return true;
            }
          }
       },
     ]).then(function (inquirerResponse) {
       var guess = inquirerResponse.userGuess.toLowerCase();
       //  Call method to see if letter has been guessed
       if (alreadyGuessed(guess) === false) {
         guessedLetter(guess);
         //  Tests to see if name was correctly completed
         if(newWordObject.returnString() === newWordString){
          console.log("\nYou Guessed the name.  CONGRADULATIONS!!!");
          newGame();
         } else{
           playGame();
         }
         playGame();
        } else{
          playGame();
//       // inquirer
//       //   .prompt([
//       //     {
//       //       type: "checkbox",
//       //       message: "Do you wish to continue?",
//       //       name: "confirm",
//       //       default: true
//       //     }
//       //   ]).then(function (inquirerResponse2){
//       //     if(confirm){
//       //       playGame();
//       //     } else{
//       //       break;
//       //     }
//       //   });
        }
     });
}

beginNewGame();