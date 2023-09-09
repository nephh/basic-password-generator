// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(length, characters) {
  var password = "";
  for (i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*_-+=";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var characters = "";
  if (confirm("Would you like your password to include lowercase letters?")) {
    characters += lowercase;
  }
  if (confirm("Would you like your password to include uppercase letters?")) {
    characters += uppercase;
  }
  if (confirm("Would you like to add numbers to your password?")) {
    characters += numbers;
  }
  if (confirm("Would you like to add symbols to your password?")) {
    characters += symbols;
  }
  if (characters !== "") {
    var length = prompt("Enter a password length of 8-128");
  } else {
    alert("You must select at least one character type!");
  }

  if (length > 128 || length < 8) {
    alert("You must enter a number from 8-128!");
  } else {
    var password = generatePassword(length, characters);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);