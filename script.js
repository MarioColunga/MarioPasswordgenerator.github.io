// Assignment Code



var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() {
var primercriterio = window.prompt("choose a length of at least 8 characters and no more than 128 characters (Enter a number)");
var segundocriterio = prompt("Do you wish your password with lowercase letters? (Enter yes or no)");
var tercercriterio = prompt("Do you wish your password with uppercase letters? (Enter yes or no)");
var cuartocriterio = prompt("Do you wish your password with numeric letter? (Enter yes or no)");
var quintocriterio = prompt("Do you wish your password with special characters (Enter yes or no)");


var primer =primercriterio;
var segundo = segundocriterio;
var tercero =tercercriterio;
var cuarto =cuartocriterio;
var quinto =quintocriterio;
var caracteres = {
  lowercase: 'a b c d e f g h i j k l m n ñ o p q r s t u v w x y z',
  uppercase: 'A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z',
  numbers: '1 2 3 4 5 6 7 8 9',
  simbolos: '! @ # $ % ^ & * ( ) _ - + = [ { ] } ; : < , > . ? /'
}

function generatePassword(){

var carateresFinales = '';
var contra = '';
if (primer <= 128 && primer >=8) {    
  // All the combination the user can choose
  
  if (segundo === "yes" && tercero === "yes" && cuarto === "yes" && quinto ==="yes") {
    carateresFinales = 'a b c d e f g h i j k l m n ñ o p q r s t u v w x y z A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z 1 2 3 4 5 6 7 8 9 ! @ # $ % ^ & * ( ) _ - + = [ { ] } ; : < , > . ? /';
  } 
  else if (segundo === "yes" && tercero === "yes" && cuarto === "yes" && quinto ==="no"){
    carateresFinales = 'a b c d e f g h i j k l m n ñ o p q r s t u v w x y z A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z 1 2 3 4 5 6 7 8 9';
  }
  else if (segundo === "yes" && tercero === "yes" && cuarto === "no" && quinto ==="no"){
    carateresFinales = 'a b c d e f g h i j k l m n ñ o p q r s t u v w x y z A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z';
  }
  else if (segundo === "yes" && tercero === "no" && cuarto === "no" && quinto ==="no"){
    carateresFinales = 'a b c d e f g h i j k l m n ñ o p q r s t u v w x y z';
  }
  else if (segundo === "no" && tercero === "yes" && cuarto === "yes" && quinto ==="no"){
    carateresFinales = 'A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z ';
  }
  else if (segundo === "no" && tercero === "yes" && cuarto === "no" && quinto ==="no"){
    carateresFinales = 'A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z 1 2 3 4 5 6 7 8 9';
  }
  else if (segundo === "no" && tercero === "yes" && cuarto === "yes" && quinto ==="yes") {
    carateresFinales = 'A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z 1 2 3 4 5 6 7 8 9 ! @ # $ % ^ & * ( ) _ - + = [ { ] } ; : < , > . ? /';
  } 
  else if (segundo === "no" && tercero === "no" && cuarto === "yes" && quinto ==="yes") {
    carateresFinales = '1 2 3 4 5 6 7 8 9 ! @ # $ % ^ & * ( ) _ - + = [ { ] } ; : < , > . ? /';
  } 
  else if (segundo === "no" && tercero === "no" && cuarto === "yes" && quinto ==="no") {
    carateresFinales = '1 2 3 4 5 6 7 8 9';
  } 
  else if (segundo === "yes" && tercero === "no" && cuarto === "yes" && quinto ==="yes") {
    carateresFinales = 'a b c d e f g h i j k l m n ñ o p q r s t u v w x y z 1 2 3 4 5 6 7 8 9 ! @ # $ % ^ & * ( ) _ - + = [ { ] } ; : < , > . ? /';
  } 
  else if (segundo === "no" && tercero === "no" && cuarto === "no" && quinto ==="yes") {
    carateresFinales = '! @ # $ % ^ & * ( ) _ - + = [ { ] } ; : < , > . ? /';
  } 
  else if (segundo === "yes" && tercero === "no" && cuarto === "no" && quinto ==="yes") {
    carateresFinales = 'a b c d e f g h i j k l m n ñ o p q r s t u v w x y z ! @ # $ % ^ & * ( ) _ - + = [ { ] } ; : < , > . ? /';
  } 
  else if (segundo === "yes" && tercero === "yes" && cuarto === "no" && quinto ==="yes") {
    carateresFinales = 'a b c d e f g h i j k l m n ñ o p q r s t u v w x y z A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z ! @ # $ % ^ & * ( ) _ - + = [ { ] } ; : < , > . ? /';
  } 
  else if (segundo === "yes" && tercero === "no" && cuarto === "yes" && quinto ==="no") {
    carateresFinales = 'a b c d e f g h i j k l m n ñ o p q r s t u v w x y z 1 2 3 4 5 6 7 8 9';
  } 
  else if (segundo === "no" && tercero === "yes" && cuarto === "no" && quinto ==="yes") {
    carateresFinales = 'A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z ! @ # $ % ^ & * ( ) _ - + = [ { ] } ; : < , > . ? /';
  } 
  else if (segundo === "no" && tercero === "no" && cuarto === "no" && quinto ==="no"){
    window.alert("At least one criteria type should be selected");
  }
}
else {
  window.alert("you password needs at least 8 characters and no more than 128");
  // Error message if the user doesn't chose a criteria.  
}

carateresFinales = carateresFinales.split(' ');

for(var i = 0; i < primer; i++){
  contra = contra + carateresFinales[Math.floor(Math.random()*carateresFinales.length)];
  
}
return contra;

}

var password = generatePassword(); /* this is the where the password generated by the generatePassword function is stored. */
 

var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
