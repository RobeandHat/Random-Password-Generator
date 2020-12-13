// Assignment Code
var generateBtn = document.querySelector("#generate");

//DOM 
var passwordEl = document.getElementById("password");
var generateEl = document.getElementById("generate");
var lengthEl = document.getElementById("length");
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numbersEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");

 // Combined character generation object function

var randomChars = {
  lowerChar: getRandomLower,
  upperChar: getRandomUpper,
  numberChar: getRandomNumber,
  specialChar: getRandomSpecial
}
generateEl.addEventListener("click", function()  {
  var length = +lengthEl.value;
  
})














  //Character generation functions

  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() *26) +97);
  }
  
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() *26) +65);
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  function getRandomSpecial () {
  return special[Math.floor(Math.random() * special.length)];   
  }
  
 
  generateBtn.addEventListener("click", writePassword);
  


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button


