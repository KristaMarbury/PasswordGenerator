//list of the declared variables for the password
let specialCharacters = [
  "~",
  "`",
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
  "{",
  "}",
  "[",
  "]",
  "|",
  "/",
  ":",
  ";",
  "<",
  ">",
  ",",
  ".",
  "?",
];

let numberCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

let lowercaseCharacters = [
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
  "x",
  "y",
  "z",
];

let uppercaseCharacters = [
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
  "X",
  "Y",
  "Z",
];

//password generation function
function generatePassword() {
  let characterList = [];

  //list of confirms for the user to check in creating the password
  let passwordLength = prompt(`How long is the password boss?`);
  let specialCharactersConfirm = confirm(`Do you want special characters?`);
  let numberCharactersConfirm = confirm(`Do you want numbers?`);
  let uppercaseCharactersConfirm = confirm(`Do you want uppercase letters?`);
  let lowercaseCharactersConfirm = confirm(`Do you want lowercase letters?`);
  let password = [];
  //if statments for each character type
  if (specialCharactersConfirm === true) {
    // characterList.join();
    password.push(getRandom(specialCharacters));
    characterList = characterList.concat(specialCharacters);
  }

  if (numberCharactersConfirm === true) {
    password.push(getRandom(numberCharacters));
    characterList = characterList.concat(numberCharacters);
  }

  if (uppercaseCharactersConfirm === true) {
    password.push(getRandom(uppercaseCharacters));
    characterList = characterList.concat(uppercaseCharacters);
  }

  if (lowercaseCharactersConfirm === true) {
    password.push(getRandom(lowercaseCharacters));
    characterList = characterList.concat(lowercaseCharacters);
  }
  let remainingPasswordLength = passwordLength - password.length;
  for (let i = 0; i < remainingPasswordLength; i++) {
    password.push(getRandom(characterList));
  }

  return password.join("");
}

function getRandom(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// button to generate password code
let generateBtn = document.querySelector("#generate");

//
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
