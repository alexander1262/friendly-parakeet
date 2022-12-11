// Assignment code here


function generatePassword() {
  var lengthChoice = prompt("Select a password length between 8 and 128 characters")
    if (lengthChoice < 8 || lengthChoice > 128) {
      console.log("wrong")
    }
  var upperCase = confirm("Would you like uppercase letters included in your password?")
    if (upperCase == true) {
      console.log("works")
    }
  var numbersIncluded = confirm("Would you like to include numbers in your password?")
    if (numbersIncluded == true) {
      console.log("works")
    }
  var specialCharacters = confirm("Would you like to include special characters in your password?")
    if (specialCharacters == true) {
      console.log("works")
    }
}





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
