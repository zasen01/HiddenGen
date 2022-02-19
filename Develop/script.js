// Assignment code here
function generatePassword()
{

      const alpha = 'abcdefghijklmnopqrstuvwxyz';
      const special = '-_@!$&%*#';
      const num = '1234567890';
      let temp = '';

    //Ask user to specify legth of password between 8 and 128
    let len = prompt('How long would you like your password to be?(8-128)');
    console.log(len);

    // Checks to see if user selected a number within paramaters before moving on
          if (len < 8 ||len > 128 ) 
          {
                  alert("Needs to be between 8 and 128! Try Again.")
                  return;
          }


            //Prompts user to select what they would like included in their password.
            const caps = confirm('Do you want Uppercase?')
            const lower = confirm('Do you want lowercase?')
            const spChars = confirm('Do you want special charachters?')
            const number  = confirm('Do you want numbers?')
            

    //Runs a loop to generate rand var from array tempPassword for the lenth of len
    tempLen = parseInt(len,10);
    
    for(var i = 0; i <= tempLen && temp.length < tempLen; i++)
    {
      //If statements below Checks to see if input is true or false for above cases and adds/skips adding to temp variable.

            //if caps is chosen and length of temp is less then tempLen this will run  
            if(caps && temp.length < tempLen) {
              temp += alpha.toLocaleUpperCase()[Math.floor(Math.random()*alpha.length)];
              console.log(temp);
            };
            //Lowercase is chosen and length of temp is less then tempLen it will run
            if(lower && temp.length < tempLen){
              temp += alpha[Math.floor(Math.random()*alpha.length)];
              console.log(temp);
            };
            //special Charachter is chosen and length of temp is less then tempLen  this will run
            if(spChars && temp.length < tempLen) {
              temp += special[Math.floor(Math.random()*special.length)];
              console.log(temp);
            };
            //number is chosen and length of temp is less then tempLen this will run
            if(number && temp.length < tempLen){
              temp+= num[Math.floor(Math.random()*num.length)];
              console.log(temp);
            };
       //tempPass = temp;
       console.log(temp, temp.length, tempLen);
    };

    return temp;

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
