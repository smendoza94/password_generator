// Assignment code here using a function "generatePassword"
function generatePassword() {
  // ask the user for a password length, if the number isnt whole or within 8 and 128, ask again
  var passLength = window.prompt('Select a password length between 8 and 128:');
  if (passLength < 8 || passLength > 128 || passLength % 1 !== 0) {
    return; 
  };

  // init password character libary
  var passLib = [""];
  var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var number = ["0","1","2","3","4","5","6","7","8","9"];
  var special = ["!","@","#","$","%","^","&","*","*"];

  // ask the user if they would like LOWER case letters in their password.
  // if true, include LOWER case letter arry in character library
  var lowerCase = window.confirm('Include LOWER case letters in password?');
  if (lowerCase) {
    var passLib = passLib.concat(lower);
  };
  console.log(passLib);

  // ask the user if they would like UPPER case letters in their password.
  // if true, include UPPER case letter arry in character library
  var upperCase = window.confirm('Include UPPER case letters in password?');
  if (upperCase) {
    var passLib = passLib.concat(upper);
  };
  console.log(passLib);

  // ask the user if they would like NUMBER case letters in their password.
  // if true, include NUMBER case letter arry in character library
  var numberCase = window.confirm('Include NUMBERS in password?');
  if (numberCase) {
    var passLib = passLib.concat(number);
  };
  console.log(passLib);
  
  // ask the user if they would like NUMBER case letters in their password.
  // if true, include NUMBER case letter arry in character library
  var specialCase = window.confirm('Include SPECIAL characters in password?');
  if (specialCase) {
    var passLib = passLib.concat(special);
  };
  console.log(passLib);

  // function that creates a random number to select from the password character libary index[]
  var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
  };

  // using libPass, the character library, to pull random characters and add it to a concatinated password
  var concatPass = "";
  for (var i = 0; i < passLength; i++) {
    var concatPass = concatPass + passLib[randomNumber(0,passLib.length)];
    console.log(concatPass);
  };
  return concatPass;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
