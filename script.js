var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", "<", ">", ":", ";", "/", "?", ".", ","];

var generateBtn = document.querySelector("#generate");

//make a getRandom function
function getRandom(possibleCharacters) {
  var index = (Math.floor(Math.random() * possibleCharacters.length));
  return (possibleCharacters[index]);
}

function generatePassword(){
  var password = "";
  var possibleCharacters = [];
  var length = prompt("How many characters should your password be? Select between 8-128.");
  if(length < 8 || length > 128) {
    alert("You chose " + length + "!");
  }
  var hasLowercase = confirm("Would you like to include lowercases?");
  var hasUppercase = confirm("Would you like to include uppercases?");
  var hasNumeric = confirm("Would you like to include numbers?");
  var hasSymbols = confirm("Would you like include symbols?");
  if(hasLowercase === false && hasUppercase === false && hasNumeric === false && hasSymbols === false) {
    alert("Must choose at least one option!");
  }
  if(hasLowercase === true) {
    possibleCharacters = possibleCharacters.concat(lowercase);
  }
  if(hasUppercase === true) {
    possibleCharacters = possibleCharacters.concat(uppercase);
  }
  if(hasNumeric === true) {
    possibleCharacters = possibleCharacters.concat(numeric);
  }
  if(hasSymbols === true) {
    possibleCharacters = possibleCharacters.concat(symbols);
  }
  
  //finish if conditions
  
  for (var i = 0; i < length; i++) {
    password += getRandom(possibleCharacters);
  }
  //use random function to get random chars out of possible array for your password
return(password);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 