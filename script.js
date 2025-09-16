// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable
//  titled fullName. Greet the user using his full name.

var firstName = prompt("Please Enter Your First Name");
var lastName = prompt("Please Enter Your Last Name");
var fullName = firstName + " " + lastName;
alert("Hello ," + fullName + "!");

// 2. Write a program to take a user input about his favorite mobile phone model. Find and display 
// input in your browser

var phoneModel = prompt("What is your favourite phone model?");
var modelName = "S6EdgePlus";
document.writeln("My favourtite phone is samsung galaxy: " + phoneModel + modelName + "<br> <br>");

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
var Name = "Pakistani"
var firstChar = Name.indexOf("n");
document.writeln("String: " + Name + "<br><br>");
document.writeln("Index of 'n': " + firstChar + "<br><br>");

// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
var Name2 = "Hello World";
var lastChar = Name2.indexOf("l");
document.writeln("String: " + Name2 + "<br><br>");
document.writeln("Index of 'l': " + lastChar + "<br><br>");

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
var Name3 = "Pakistani";
var charAtIndex = Name3[3];
document.writeln("String " + Name3 + "<br><br>")
document.writeln("Character at index 3: " + charAtIndex);

