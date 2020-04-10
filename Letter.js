var Letterofword = function (letter) {
  this.letter = letter;
  this.guessed = false;

  this.beenGuessed = function () {
    if (letter !== " ") {
      if (this.guessed === false) {
        return "_";
      } else {
        return this.letter;
      }
    } else {
      return this.letter;
    }
  };

  this.checkLetter = function (guessedLetter) {
    if (guessedLetter === this.letter) {
      this.guessed = true;
    }
  };
}

module.exports = Letterofword;