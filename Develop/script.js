// Assignment code here
var possiblechars=""

var lowercaseletters = "qwertyuiopasdfghjklzxcvbnm"
var numbersIncluded = "1234567890"
var specialCharacters = "~`!@#$%^&*()_-=+';:,<.>/?"
var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM"
var generatedpassword = ""

function generatePassword() {
  var lengthChoice = prompt("Select a password length between 8 and 128 characters")
    if (lengthChoice < 8 || lengthChoice > 128) {
      alert("please enter a valid password length")
    }
  
if (lengthChoice >= 8 && lengthChoice <= 128) {
  possiblechars = ""
  generatedpassword = ""
  var lower = confirm("Would you like to include letters in your password?")
    if (lower == true) {
      possiblechars += lowercaseletters
      console.log(possiblechars)
    }
  var upper = confirm("Would you like uppercase letters included in your password?")
    if (upper == true) {
      possiblechars += upperCase
      console.log(possiblechars)
    }
  var numbers = confirm("Would you like to include numbers in your password?")
    if (numbers == true) {
      possiblechars += numbersIncluded
      console.log(possiblechars)
    }
  var special = confirm("Would you like to include special characters in your password?")
    if (special == true) {
      possiblechars += specialCharacters
      console.log(possiblechars)
    }
  for (let i = 0; i < parseInt(lengthChoice); i++) {
    generatedpassword += possiblechars.charAt(Math.floor(Math.random() * parseInt(lengthChoice)))
  }
  return generatedpassword
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
