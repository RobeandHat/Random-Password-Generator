
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

// This function pulls the values of user options

generate.addEventListener("click", function() {
  var length = +lengthEl.value;
  var lowerChecked = lowercaseEl.checked;
  var upperChecked = uppercaseEl.checked;
  var numbersChecked = numbersEl.checked;
  var symbolsChecked = symbolsEl.checked;
  //Prints text to result screen
  passwordEl.innerText = generatePassword(length, lowerChecked, upperChecked, numbersChecked, symbolsChecked);
});

  // This function adds the results of the character generation functions
function generatePassword(length, lowerChar, upperChar, numberChar, specialChar){
  var generatedPassword  = "";
  var typesof = lowerChar + upperChar + numberChar + specialChar;
  var typesfilter = [{lowerChar},  {upperChar},  {numberChar},  {specialChar}].filter(item => Object.values(item)[0]);
  //If no choices are made
  if(typesof === 0) {
    alert("Please select character options!")
    return finalPassword = "";
  }
  // Loops for each selected type
  for (var i = 0; i < length; i+=typesof) {
    typesfilter.forEach(type => {
      var funcName = Object.keys(type)[0];
      generatedPassword += randomChars[funcName]();
    }); 
  }
  //returns the final password
  var finalPassword = generatedPassword;
  return finalPassword;
  }

  //Character generation functions (uses html char codes)

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
  
 

