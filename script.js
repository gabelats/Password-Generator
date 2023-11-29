// Assignment Code
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "r",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "R",
  "X",
  "Y",
  "Z",
];

var specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "]",
  "[",
  "{",
  "}",
  ";",
  "'",
  '"',
  ":",
  ",",
  ".",
  "/",
  "?",
  "<",
  ">",
  "`",
  "~",
];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var passwordLength = (8, 128);

function generatePassword() {
  var outputArray = [];
  outputArray.concat(lowerCase);
  var passwordLengthInt = parseInt(
    prompt(
      "How many characters do you want your passwored to be between 8 and 128 characters"
    )
  );

  if (passwordLengthInt < 8 || passwordLengthInt > 128) {
    alert("your password isn't between 8 and 128 characters.");
    return null;
  }
  var lowerCaseStr = confirm(
    "would you like lowercase letters in your password"
  );
  var upperCaseStr = confirm(
    "would you like uppercase letters in your password"
  );
  var numberBoolean = confirm("would you like to use numbers in your password");
  var specialCharactersBool = confirm(
    "would you like special characters in your password"
  );
  var passwordOptionsObj = {
    pwdLength: passwordLengthInt,
    lower: lowerCaseStr,
    upper: upperCaseStr,
    specialChar: specialCharactersBool,
    num: numberBoolean,
  };
  var result = [];
  var possibleCharacters = [];
  var garenteedCharaters = [];

  if (passwordOptionsObj.lower) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    garenteedCharaters.push(getRandomChar(lowerCase));
  }
  if (passwordOptionsObj.upper) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    garenteedCharaters.push(getRandomChar(upperCase));
  }
  if (passwordOptionsObj.specialChar) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    garenteedCharaters.push(getRandomChar(specialCharacters));
  }
  if (passwordOptionsObj.num) {
    possibleCharacters = possibleCharacters.concat(numbers);
    garenteedCharaters.push(getRandomChar(numbers));
  }
  for (var i = 0; i < passwordOptionsObj.pwdLength; i++) {
    var possibleChar = getRandomChar(possibleCharacters);
    result.push(possibleChar);
  }
  for (var i = 0; i < garenteedCharaters.length; i++) {
    result[i] = garenteedCharaters[i];
  }
  console.log(result);
  console.log(passwordOptionsObj);
  // var randomChar = getRandomChar(outputArray);
  console.log("you clicked the button");
  return result.join("");
}
function getRandomChar(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomChar = array[randomIndex];
  return randomChar;
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//pseudo code
//1. prompt the user for password criteria.
//validate input
//display password on page.
