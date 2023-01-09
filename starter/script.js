

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var pwdLength = prompt("How long do you want your password to be?");
  //Validate the number provided by the user. 10-64 
  if (pwdLength >= 10 && pwdLength <= 64) {
    var includeLowerCase = confirm("Do you want your password to include lower case letters?");
    var includeUpperCase = confirm("Do you want your password to include upper case letters");
    var includeSpecialCharacters = confirm("Do you want your password to include special characters?");
    var includeNumbers = confirm("Do you want your password to include numbers?");

    return {
      pwdLength: pwdLength,
      includeLowerCase: includeLowerCase,
      includeUpperCase: includeUpperCase,
      includeSpecialCharacters: includeSpecialCharacters,
      includeNumbers: includeNumbers,
    }
  }
  else {
    alert("Password must be between 10 and 64 characters");
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  return item = arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {

  var passwordOptions = getPasswordOptions();
  console.log(passwordOptions);

  // build a new array based on the passwordOptions variable



  //Build a string of password based on the users options and from the provided characters.
  var generatedPassword = "";

  if (passwordOptions.includeLowerCase == false && passwordOptions.includeUpperCase == false && passwordOptions.includeSpecialCharacters == false && passwordOptions.numericCharacters == false) {
    alert("Atleast one character type should be selected..!");

  } 
  else {
    while (generatedPassword.length != passwordOptions.pwdLength) {
      //lowercase
      if (passwordOptions.includeLowerCase == true && generatedPassword.length != passwordOptions.pwdLength) {
        generatedPassword += getRandom(lowerCasedCharacters);
      }

      //uppercase
      if (passwordOptions.includeUpperCase == true && generatedPassword.length != passwordOptions.pwdLength) {
        generatedPassword += getRandom(upperCasedCharacters);
      }

      //special characters
      if (passwordOptions.includeSpecialCharacters == true && generatedPassword.length != passwordOptions.pwdLength) {
        generatedPassword += getRandom(specialCharacters);
      }

      //numbers
      if (passwordOptions.includeNumbers == true && generatedPassword.length != passwordOptions.pwdLength) {
        generatedPassword += getRandom(numericCharacters);
      }
    }
  }



  return generatedPassword;

  // create a loop that will iterate based on passwordOptions.pwdLength

  //       // for each loop iteration invoke getRandom to get a random character from the new passwordOptions array
  //     }
  //   }
  // }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);