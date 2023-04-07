// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare the variables and values

var specialChar = ".,?!@$#&%*"
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNPQRSTUVWXYZ"
var numbChar = "0123456789";
var passwordChar = "";

function generatePassword() {
  console.log("Clicked!")
  passwordChar = ""
  // Upon click, promot appears asking about characters
  // If the numnber is not between 8 and 128, you will recieve an error
  // If you input a letter, you will recieve an error
  var passwordLength = prompt("How many characters would you like to use? Must be between 8 - 128.")
  if (!passwordLength) {
    return null;
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert ("Must be between 8 and 128 characters");
    return null;
  } else if (isNaN(passwordLength)) {
    alert ("Valid Entry Required");
    return null;
  }

  // Confirmation boxes for each type of character

  var selChar = confirm("Do you want to include special characters?")
  var selUp = confirm("Do you want to include uppercase letters?")
  var selLow = confirm("Do you want to include lowercase letters?")
  var selNumb = confirm("Do you want to include numbers?")
  

  // If you do not choose one, you recieve an error
  // If you select yes to one, it will appear in your password
  if (selChar === false && selUp === false && selLow === false & selNumb ===false) {
    alert("Must Choose One");
    return null;
  } if (selChar) {
      passwordChar += specialChar
      console.log("SC", specialChar);

    } if (selUp) {
      passwordChar += upperChar 
      console.log("UC", upperChar);

    } if (selLow) {
      passwordChar += lowerChar 
      console.log("LC", lowerChar);

    } if (selNumb) {
      passwordChar += numbChar
      console.log("Number", numbChar);
  }
    console.log(passwordLength);
    var NewPW = "";
    for (var i = 0; i < passwordLength; i++) {
        NewPW += passwordChar[(Math.floor(Math.random() * passwordChar.length))];
  }  
  return NewPW 
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 passwordText.value = password;
  console.log(password);
  console.log(passwordText.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
