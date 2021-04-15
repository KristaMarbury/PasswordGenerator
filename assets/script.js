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

let numberCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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

let passwordLength = prompt(`How long is the password?`);

let characterList = [];

//Repeat this line for each part of the password builder
let specialCharactersConfirm = confirm(`Do you want special characters?`);
let numberCharactersConfirm = confirm(`Do you want numbers?`);
let uppercaseCharactersConfirm = confirm(`Do you want uppercase letters?`);
let lowercaseCharactersConfirm = confirm(`Do you want lowercase letters?`);
if (specialCharactersConfirm === true) {
  characterList.push(specialCharacters);
}

//use a method to make it refresh..
if (passwordLength < 8) {
  alert(`Sorry, try again!`);
}

for (let i = 0; i < characterList.length; i++) {
  Math.floor(Math.random() * 10);
}
//if statments for each character type
console.log(specialCharactersConfirm);
console.log(characterList);
console.log(passwordLength);
// Assignment Code
let generateBtn = document.querySelector("#generate");

// 1) generate a password... 2)use arrays and make sure to combine them all so that they can all be used when things are not checked
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
