// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = ""

var specialCharcters = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}","~","`",",",".","<",">","/","?","|"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// arrays created for password components

function getRandomCharacter(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomPasswordCharacter = array[randomIndex];
  return randomPasswordCharacter;
}
// gets a random character from an array

function generatePassword() {
  var passwordLength = prompt("How many characters should the password be?");
  var includeSpecialCharacters = confirm("Include special characters?");
  var includeUpperCase = confirm("Include uppercase letters?");
  var includeLowerCase = confirm("Include lowercase letters?");
  var includeNumbers = confirm("Include numbers?");
// prompts user to give password criteria

  var passwordCriteria = {
    passwordLength: passwordLength,
    includeSpecialCharacters: includeSpecialCharacters,
    includeUpperCase: includeUpperCase,
    includeLowerCase: includeLowerCase,
    includeNumbers: includeNumbers,
  };
  var possibleCharacters = [];
  password = [];
  

  if (passwordLength >= passwordCriteria.length -1) {
    //checks to see if password length is long enough for criteria
    if (passwordCriteria.includeSpecialCharacters) {
      possibleCharacters = possibleCharacters.concat(specialCharcters);
      var randomCharacter = getRandomCharacter(specialCharcters);
      password.push(randomCharacter);
    }
// inserts a random special character if prompted to include special characters

    if (passwordCriteria.includeUpperCase) {
      possibleCharacters = possibleCharacters.concat(upperCase);
      var randomCharacter = getRandomCharacter(upperCase);
      password.push(randomCharacter);
    }
// inserts random uppercase letter if prompted to include uppercase letters
  
    if (passwordCriteria.includeLowerCase) {
      possibleCharacters = possibleCharacters.concat(lowerCase);
      var randomCharacter = getRandomCharacter(lowerCase);
      password.push(randomCharacter);
    }
// inserts random lowercase letter if promted to include lowercase letters

    if (passwordCriteria.includeNumbers) {
      possibleCharacters = possibleCharacters.concat(numbers);
      var randomCharacter = getRandomCharacter(numbers);
      password.push(randomCharacter);
    }
// inserts random number if promted to include numbers

  for (var i = 0; i < password.length - passwordCriteria.length; i++) {
    var randomCharacter = getRandomCharacter(possibleCharacters);
    password.push(randomCharacter);
    }

    password = password.join("");

  }
  else if (passwordCriteria.length == 1) {
    password = "Please include a character type";
    
  }
  else {
    password = "Password length is too short";
  }
}



// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
