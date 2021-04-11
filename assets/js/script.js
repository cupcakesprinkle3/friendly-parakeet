
// Lessons learned from tutor: 
// cannot call a variable or a function before the event listener has a chance to listen
// This means that everything has to be contained within a function that then starts on button click
// There's also function scope and global scope ; to call a var outside of a function, it has to be global
// And += adds to a string
// And to get the passResult to be empty vs undefined, pass it a blank string first ... ""

// Assignment code here

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var special = ["!", "#", "$", "$", "%", "^", "&", "*", "(", ")"]
var fullArray = [];
var retLower;
var retUpper;
var retNum;
var retSpecial;
var passResult = "";
var passLength;

// Generate a password
  
function generatePassword() {

  passLength = prompt("Choose password length between 8 and 128 chars : ", "your numerical selection");

  passLength = parseInt(passLength);
  console.log(passLength);
  
  if(passLength >= 8 && passLength <= 128) {
      retLower = confirm("Do you want lowercase chars in your password?");
      console.log(retLower);
      retUpper = confirm("Do you want uppercase chars in your password?");
      console.log(retUpper);
      retNum = confirm("Do you want numbers in your password?");
      console.log(retNum);
      retSpecial = confirm("Do you want special characters in your password?");
      console.log(retSpecial);
    }    
 
  else { 
    alert("Please enter a number between 8 and 128");
    return;
  }

  if(retLower === true) {
    fullArray = fullArray.concat(lower);
  }
  
  if(retUpper === true) {
    fullArray = fullArray.concat(upper);
  }
  
  if(retNum === true) {
    fullArray = fullArray.concat(num);
  }  
  
  if(retSpecial === true) {
    fullArray = fullArray.concat(special);
  }

  writePassword();

}

// Write password to the #password input

function writePassword() {
  console.log(fullArray);

  for (var i=0; i<passLength; i++) {
    passResult += fullArray[Math.floor(Math.random() * fullArray.length)];
    console.log(passResult);
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = passResult;

}

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button

generateBtn.addEventListener("click", generatePassword);


/* NOTES TAKEN FROM OFFICE HOURS
// if this is true , person said yes, i want to 
// go to fullArray and push into it this new array of lowercase
// fullArray.push = [] <-- look at documentation on how to put something into a push
// you want to push lowercase - you've defined lowercase variables - so all you have to 
// write is lowercase (the variable you defined)
// you want to do a for loop , based on what the user put 
// until you get to the length that the person said
// build a large array that only consists of what my user wants to do
// before we do generate password, let's generate array -- that array takes
// length upper and whatever 
// if numbers is true - then put the numbers into the array
// after you have master array, write a function that picks randomly and displays it
*/