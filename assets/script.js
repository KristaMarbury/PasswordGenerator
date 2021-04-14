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

// Assignment Code
var generateBtn = document.querySelector("#generate");

// 1) generate a password... 2)use arrays and make sure to combine them all so that they can all be used when things are not checked
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//available choices
//let choices = ["R", "P", "S"];

//game stats
//let wins = 0;
//let losses = 0;
//let ties = 0;

//function playGame() {
//prompt user for their selection store it in variable
//let userChoice = window.prompt("Enter R, P, or S");
//userChoice = userChoice.toUpperCase();
//window.alert(`You chose ${userChoice}`);

//assign a random choice for the computer
//let index = Math.floor(Math.random() * choices.length);
//let computerChoice = choices[index];
//window.alert(`The computer chose ${computerChoice}`);
//console.log(computerChoice);

//if (userChoice == computerChoice) {
//ties++;
//window.alert("Its a tie!");
//} else if (
//(userChoice === "R" && computerChoice === "S") ||
//(userChoice === "S" && computerChoice === "P") ||
//(userChoice === "P" && computerChoice === "R")
//) {
//wins++;
//window.alert("Winner Winner Chicken Dinner!");
//} else {
//losses++;
//window.alert("Yikes You Lost!");
//}

//print stats to the screen
//window.alert(`Your Groovy Stats:
//Wins: ${wins}
//Losses: ${losses}
//Ties: ${ties}
//`);
//let playAgain = window.confirm("Wanna Go Again?");

//if (playAgain === true) {
//playGame();
//}
//}

//playGame();
