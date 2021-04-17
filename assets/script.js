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

let characterList = [];

//password generation function
// function generatePassword()

//   while (paswordLength < 8 || passwordLength > 128) {
//     paswordLegnth = prompt(`Gotta be between 8-128`);
//     passwordLength = [0];
//   }

//list of confirms for the user to check in creating the password
let passwordLength = prompt(`How long is the password boss?`);
let specialCharactersConfirm = confirm(`Do you want special characters?`);
let numberCharactersConfirm = confirm(`Do you want numbers?`);
let uppercaseCharactersConfirm = confirm(`Do you want uppercase letters?`);
let lowercaseCharactersConfirm = confirm(`Do you want lowercase letters?`);

//if statments for each character type
if (specialCharactersConfirm === true) {
  // characterList.join();
  characterList = characterList.concat(specialCharacters);
}

if (numberCharactersConfirm === true) {
  // characterList.join();
  characterList = characterList.concat(numberCharacters);
}

if (uppercaseCharactersConfirm === true) {
  // characterList.join();
  characterList = characterList.concat(uppercaseCharacters);
}

if (lowercaseCharactersConfirm === true) {
  // characterList.join();
  characterList = characterList.concat(lowercaseCharacters);
}
characterList.join();
console.log(characterList);

for (let i = 0; i < passwordLength; i++) {
  let randomPassword;
  let randomIndex = Math.floor(Math.random() * characterList.length);
  let randomCharacter = characterList[randomIndex];
  randomPassword = randomPassword + randomCharacter;
  console.log(randomPassword);
}

//   return password.join("");
// }

// button to generate password code
let generateBtn = document.querySelector("#generate");

//
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
