//===========================================CHP 26 - 30 =======================================//

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


var numberPositive = parseFloat(prompt("Please enter a positive number:"));

// Checking if the number is positive
if (numberPositive > 0) {
    document.write("Number: " + numberPositive + "<br>");
    document.write("Round off value: " + Math.round(numberPositive) + "<br>");
    document.write("Floor value: " + Math.floor(numberPositive) + "<br>");
    document.write("Ceil value: " + Math.ceil(numberPositive) + "<br><br>");
} else {
    document.write("Please enter a valid positive number.<br>");
}

//=======================================================================================//

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var numberNegative = parseFloat(prompt("Please enter a negative floating point number:"));

// Checking if the number is negative
if (numberNegative < 0) {
    document.write("Number: " + numberNegative + "<br>");
    document.write("Round off value: " + Math.round(numberNegative) + "<br>");
    document.write("Floor value: " + Math.floor(numberNegative) + "<br>");
    document.write("Ceil value: " + Math.ceil(numberNegative) + "<br><br>");
} else {
    document.write("Please enter a valid negative number.<br>");
}
//======================================================================================//

// 3. Write a program that displays the absolute value of a
// number.

// Taking user input for the number
var number = parseFloat(prompt("Please enter a number:"));

// Calculating the absolute value of the number
var absoluteValue = Math.abs(number);

// Displaying the absolute value in the browser
document.write("The absolute value of " + number + " is " + absoluteValue + "<br><br>");

//===================================================================================//

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// Simulating a dice roll
var diceValue = Math.floor(Math.random() * 6) + 1;

// Displaying the value of dice in the browser
document.write("The value of the dice is: " + diceValue + "<br><br>");

//==================================================================================//

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// Asking the user for their input (it could be any purpose, like asking for a guess)
var userInput = prompt("Enter any number to see a random number between 1 and 100:");

// Generating a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Displaying the random number in the browser
document.write("The random number between 1 and 100 is: " + randomNumber + "<br>");
document.write("You entered: " + userInput + "<br>");


//============================================================================//

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// Asking the user for their weight
var weight = prompt("Please enter your weight:");

// Parsing the weight to remove any non-numeric characters
var parsedWeight = parseFloat(weight);

// Displaying the parsed weight in the browser
document.write("Your weight is: " + parsedWeight + "<br><br>");

//====================================================================================//

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// Generating a random secret number between 1 and 10
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Asking the user to guess the number
var userGuess = parseInt(prompt("Guess the secret number between 1 and 10:"));

// Checking if the user's guess is correct
if (userGuess === secretNumber) {
    document.write("Congratulations! You guessed the secret number: " + secretNumber);
} else {
    document.write("Sorry, the secret number was: " + secretNumber + ". Better luck next time!");
}

//==========================================================================================//

