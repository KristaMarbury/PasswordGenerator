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

let characterList = [];

//  if (passwordLength < 8) {
//   window.alert("Your password must be at least 8 characters");
//   passwordLength = " ";
//   passwordLength = window.prompt(
//     "You password should be (8 minimum - 128 maximum)"
//   );
//   window.alert(`Your password is ${passwordLength} characters long`);
// } else if (passwordLength > 128) {
//   window.alert("Your password needs the be 128 characters or less");
//   passwordLength = " ";
//   passwordLength = window.prompt(
//     "You password should be (8 minimum - 128 maximum)"
//   );
//   window.alert(`Your password is ${passwordLength} characters long.`);
// } else {
//   window.alert(`Your password is ${passwordLength} characters long.`);
// }

//list of confirms for the user to check in creating the password
let specialCharactersConfirm = confirm(`Do you want special characters?`);
let numberCharactersConfirm = confirm(`Do you want numbers?`);
let uppercaseCharactersConfirm = confirm(`Do you want uppercase letters?`);
let lowercaseCharactersConfirm = confirm(`Do you want lowercase letters?`);

//if statments for each character type
if (specialCharactersConfirm === true) {
  password.push(specialCharacters[0]);
  characterList.concat(specialCharacters);
}

if (numberCharactersConfirm === true) {
  password.push(numberCharacters[0]);
  characterList.concat(numberCharacters);
}

if (uppercaseCharactersConfirm === true) {
  password.push(uppercaseCharacters[0]);
  characterList.concat(uppercaseCharacters);
}

if (lowercaseCharactersConfirm === true) {
  password.push(lowercaseCharacters[0]);
  characterList.concat(lowercaseCharacters);
}

//move this code here to a random function generator
for (let i = 0; i < characterList.length; i++) {
  Math.floor(Math.random() * 10);
}

// return password.join(" ");

// Assignment Code
let generateBtn = document.querySelector("#generate");

//
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
