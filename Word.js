var Letterofword = require("./Letter.js");

var Randomword = function (randomArray){
  this.wordArray = randomArray;

  this.returnString = function () {
    var wordString = "";
    for (let index = 0; index < this.wordArray.length; index++) { 
      wordString += this.wordArray[index].beenGuessed();  
    }
     return wordString;
  }

  //  Function that runs through each letter object of the array to see if the guessed letter is the same as one of the letters in the word array and if so update the object "guessed" value
  this.checkArray = function(guessedLetter) {
    var correctlyGuessed = 0;
    for (let index = 0; index < this.wordArray.length; index++) {
      if(this.wordArray[index].checkLetter(guessedLetter)){
        correctlyGuessed++;
      };
    }
    if(correctlyGuessed > 0){
      return true;
    } else {
      return false;
    }
  }

  //  Function to create the array of letter objects based on the random word choosen 
  this.createArrayObjects = function(){
    for (let index = 0; index < this.wordArray.length; index++) {
      this.wordArray[index] = new Letterofword(this.wordArray[index]); 
    }
  }
}

module.exports = Randomword;