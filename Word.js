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

  this.checkArray = function(guessedLetter) {
    for (let index = 0; index < this.wordArray.length; index++) {
      this.wordArray[index].checkLetter(guessedLetter);      
    }
  }

  this.createArrayObjects = function(){
    for (let index = 0; index < this.wordArray.length; index++) {
      this.wordArray[index] = new Letterofword(this.wordArray[index]); 
    }
  }
}

module.exports = Randomword;