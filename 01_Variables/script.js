let firstName = "Rajiv"; // String variable to store the first name
let lastName = "Sharma"; // String variable to store the last name
let age = 24; // Number variable to store the age
let isDeveloper = true; // Boolean variable to store the developer status

console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Age:", age);
console.log("Is Developer:", isDeveloper);

// Using template literals to create a bio data string
let bioData = `My name is ${firstName} ${lastName}. I am ${age} years old and I am a developer.`;
console.log(bioData);

// Using string concatenation to create the bio data string
let bioData2 = "My name is " + firstName + " " + lastName + ". I am " + age + " years old and I am a developer.";
console.log(bioData2);

let abc = undefined; // Variable declared but not assigned a value
console.log("Value of abc:", abc);
console.log("Type of abc:", typeof abc); // Type of undefined variable is "undefined"

let xyz; // Variable declared without initialization, will be undefined
console.log("Value of xyz:", xyz);
console.log("Type of xyz:", typeof xyz); // Type of undefined variable is "undefined"

let pqr = null; // Variable explicitly(intentionally) assigned null value
console.log("Value of pqr:", pqr);
console.log("Type of pqr:", typeof pqr); // Type of null variable is "object" (this is a quirk(bug) in JavaScript)

firstName = "Rahul"; // Reassigning a new value to the firstName variable
console.log("Updated First Name:", firstName);

firstName = 123; // Reassigning a number to the firstName variable (JavaScript allows dynamic typing)
console.log("First Name after assigning a number:", firstName);
console.log("Type of firstName after assigning a number:", typeof firstName); // Type will be "number"


const country = "India"; // Constant variable to store the country name
console.log("Country:", country);

// Attempting to reassign a value to a constant variable will result in an error
//country = "USA"; // Uncommenting this line will throw an error: "Uncaught TypeError: Assignment to constant variable."

//const day;
//console.log("Day:", day); // This will throw an error because a constant variable must be initialized at the time of declaration


var city = "Mumbai"; // Var variable to store the city name
console.log("City:", city);

city = "Delhi"; // Reassigning a new value to the city variable
console.log("Updated City:", city);

var city = "Bangalore"; // Redeclaring the city variable using var (this is allowed with var)
console.log("City after redeclaration:", city);

var city = true; // Reassigning a boolean value to the city variable (JavaScript allows dynamic typing)
console.log("City after assigning a boolean value:", city);
console.log("Type of city after assigning a boolean value:", typeof city); // Type will be "boolean"

var name;
console.log("Value of name:", name); // This will log "undefined" because the variable is declared but not initialized
console.log("Type of name:", typeof name); // Type of undefined variable is "undefined"

{
    let blockScopedVariable = "I am block scoped"; // This variable is only accessible within this block because let is block scoped
}
//console.log("Block Scoped Variable:", blockScopedVariable); // This will throw an error because blockScopedVariable is not defined outside the block

{
    var functionScopedVariable = "I am function scoped"; // This variable is accessible outside the block because var is function scoped
}
console.log("Function Scoped Variable:", functionScopedVariable); // This will log the value because var is function scoped

console.log("Global variable a before declaration:", a); // This will log "undefined" due to hoisting of var
var a = 10; // Global variable declared with var
console.log("Global variable a after declaration:", a); // This will log 10

console.log("Global variable b before declaration:", b); // This will throw an error because let does not allow hoisting
let b = 20; // Global variable declared with let
console.log("Global variable b:", b); // This will log 20

// Variable naming rules
// 1. Variable names can contain letters, digits, underscores, and dollar signs
// 2. Variable names cannot start with a digit
// 3. Variable names are case-sensitive
// 4. Variable names cannot be reserved keywords in JavaScript

// Examples of valid variable names
let _myVariable = "Valid variable name"; // Valid variable name starting with an underscore
let $myVariable = "Valid variable name"; // Valid variable name starting with a dollar sign
let myVariable1 = "Valid variable name"; // Valid variable name containing letters and digits

// Examples of invalid variable names
// let 1myVariable = "Invalid variable name"; // Invalid variable name starting with a digit
// let my-Variable = "Invalid variable name"; // Invalid variable name containing a hyphen
// let var = "Invalid variable name"; // Invalid variable name using a reserved keyword
