//  Require the needed constructor files and modules
var Randomword = require("./Word.js");
var inquirer = require("inquirer");

//  Creation of array of names to guess
var characterNames = ["palpatine", "vader", "leia", "luke", "obi wan", "yoda", "han solo", "chewbacca", "boba fett", "jabba the hut"];
var newWord;
var guessesLeft = 10;
var guessArray = [];

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

//  Random Word Position Selector
function randomPosition() {
  var random = Math.floor(Math.random() * 10);
  return random;
}

console.log(randomPosition());

// Function to create New Word object from the constructor
function createWordObject(word) {
  var randomArray = word.split("");
  newWord = new Randomword(randomArray);
  newWord.createArrayObjects();
}

// Function to return a string for display in the CLI based on the values in the word array
function displayWordArray() {
  var displayString = "";
  for (let index = 0; index < newWord.wordArray.length; index++) {
    displayString += newWord.wordArray[index].beenGuessed() + " ";
  }
  return displayString;
}

// Function to Start and restart games
function beginNewGame() {
  newWord = {};
  createWordObject(characterNames[randomPosition()]);
  guessesLeft = 10;

  console.log("Start Star Wars Name Guess Game");
  console.log(displayWordArray() + "\n");
  playGame();
}

//  Function to Play the Game
function playGame() {
//   //  Use Inquirer module to obtain need guess from CLI
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         message: "Please guess a letter for selected name of a Star Wars character.",
//         name: "userGuess",
//         //  Validate function to make sure no blank response is given, no more than 1 character is entered, and to make sure the character entered is a letter.
//         validate: function validateUserGuess(userGuess) {
//           var letters = /^[A-Za-z]+$/;
//           if (userGuess !== "" && userGuess.length === 1 && userGuess.match(letters) !== null) {
//             return userGuess;
//           }
//         }
//       }
//     ])
//     .then(function (inquirerResponse) {
//       console.log(inquirerResponse.userGuess);
//       //var guess = inquirerResponse.userGuess.toLowerCase();
//       //  Call method to see if letter has been guessed
//       //if (alreadyGuessed(guess) === false) {
//         //console.log(guess)
//         // guessArray.push(guess);
//         // guessLeft--;
//         //newWord.checkArray(inquirerResponse.userGuess.toLowerCase());
//         //console.log(displayWordArray() + "\n\n");
//       //}

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
      
//     });
}

beginNewGame();