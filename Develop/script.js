// Assignment code here
const alpha = ' abcdefghijklmnopqrstuvwxyz';
const special = '-_@!$&%';
const num = '1234567890';
let len = 0;
let temp = ''; 

function generatePassword(){
    //Ask user to specify legth of password between 8 and 128
    len - prompt('How long would you like your password to be?(8-128)');


    //Prompts user to select what they would like included in their password.
    const caps = confirm('Do you want Uppercase?')
    const lower = confirm('Do you want lowercase?')
    const spChars = confirm('Do you want special charachters?')
    const number  = confirm('Do you want numbers?')

    //Checks to see if input is true or false for above cases and adds/skips adding to temp variable.
    if(caps) {
      temp += alpha.toLocaleUpperCase();
    };
    if(lower){
      temp += alpha;
    };
    if(spChars) {
      temp += special;
    };
    if(number){
      temp+= num;
    };

    //writes it to console log
    console.log(temp);

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
