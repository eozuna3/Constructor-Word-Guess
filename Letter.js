var Letterofword = function (letter){
  this.letter = letter;
  this.guessed = false;
  
  this.beenGuessed  = function () {
    if(this.guessed === false){
      return "_";
    } else {
      return this.letter;
    }
  };

  this.checkLetter = function (usersGuess) {
    if(usersGuess === this.letter){
      this.guessed = true;
    }
  };
}

module.exports = Letterofword;