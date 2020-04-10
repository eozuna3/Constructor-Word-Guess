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

  this.checkLetter = function (guessedLetter) {
    if(this.guessed = false && guessedLetter === this.letter){
      this.guessed = true;
    }
  };
}

module.exports = Letterofword;