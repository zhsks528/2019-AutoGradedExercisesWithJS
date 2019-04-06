// Write a function called "countCharacter".

// Given a string input and a character, "countCharacter" returns the number of occurences of a given character in the given string.

// var output = countCharacter('I am a hacker', 'a');
// console.log(output); // --> 3

function countCharacter(str, char) {
  var count = 0;

  for (var i in str) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

var output = countCharacter("I am a hacker", "a");
console.log(output);
