var Letterofword = require("./Letter.js");

// var Randomword = function (word){
//   this.wordArray = []
// }

var newLetter = new Letterofword("a");

console.log(newLetter);

var test = newLetter.beenGuessed();

console.log(test);

newLetter.checkLetter("");

test = newLetter.guessed;

console.log(test);

console.log(newLetter.beenGuessed());

newLetter.checkLetter("p");

test = newLetter.guessed;

console.log(test);

console.log(newLetter.beenGuessed());

newLetter.checkLetter("a");

test = newLetter.guessed;

console.log(test);

console.log(newLetter.beenGuessed());