// strings are indexed

const str = "Rajiv Sharma";
console.log(str[0]); // R
console.log(str[1]); // a
console.log(str[2]); // j

console.log('Hello World'[1]); // e
console.log('Hello World'[6]); // W

// Property -
// string length is a property that returns the number of characters in a string
console.log(str.length); // 12

// Methods -
// 1. Methods (Without Argument)

// toUpperCase() - converts a string to uppercase letters
const upperCaseStr = str.toUpperCase();
console.log(upperCaseStr); // RAJIV SHARMA

// toLowerCase() - converts a string to lowercase letters
const lowerCaseStr = str.toLowerCase();
console.log(lowerCaseStr); // rajiv sharma

// note - string methods do not change the original string, they return a new string
console.log(str); // Rajiv Sharma (original string is not changed)

const faltuMessage = "   This is a message with extra spaces.   ";
console.log(faltuMessage); // "   This is a message with extra spaces.   "

// trim() - removes whitespace from both ends of a string
const trimmedMessage = faltuMessage.trim();
console.log(trimmedMessage); // "This is a message with extra spaces."

// trimStart() - removes whitespace from the start of a string
const trimStartMessage = faltuMessage.trimStart();
console.log(trimStartMessage); // "This is a message with extra spaces.   "

// trimEnd() - removes whitespace from the end of a string
const trimEndMessage = faltuMessage.trimEnd();
console.log(trimEndMessage); // "   This is a message with extra spaces."

// Note - you can chain methods together to perform multiple operations on a string
console.log(faltuMessage.trim().toUpperCase()) // "THIS IS A MESSAGE WITH EXTRA SPACES."
console.log(faltuMessage.trim().toLowerCase()) // "this is a message with extra spaces."

// 2. Methods (With Argument)

const bioData = "I am Rajiv Sharma, a software developer.";

// indexOf() - returns the index of the first occurrence of a specified substring, or -1 if not found
console.log(bioData.indexOf("Rajiv")); // 5
console.log(bioData.indexOf("rajiv")); // -1 // -1 is returned because the indexOf() method is case-sensitive
console.log(bioData.indexOf("developer")); // 30
console.log(bioData.indexOf("xyz")); // -1 // -1 is returned because the substring "xyz" is not found in the string
console.log(bioData.indexOf()); // -1 // -1 is returned because no argument is provided

// includes() - checks if a string contains a specified substring and returns true or false
console.log(bioData.includes("Rajiv")); // true
console.log(bioData.includes("rajiv")); // false // false is returned because the includes() method is case-sensitive
console.log(bioData.includes("developer")); // true
console.log(bioData.includes("xyz")); // false // false is returned because the substring "xyz" is not found in the string
console.log(bioData.includes()); // false // false is returned because no argument is provided

// replace() - replaces a specified substring with another substring and returns a new string
const newBioData = bioData.replace("Rajiv", "Ravi");
console.log(newBioData); // "I am Ravi Sharma, a software developer." (the substring "Rajiv" is replaced with "Ravi")
console.log(bioData); // "I am Rajiv Sharma, a software developer." (original string is not changed)

console.log(bioData.replace("iv", "eev")); // "I am Rajeev Sharma, a software developer." (the first occurrence of the substring "iv" is replaced with "eev")
console.log(bioData.replace("xyz", "abc")); // "I am Rajiv Sharma, a software developer." (the substring "xyz" is not found in the string, so the original string is returned)
console.log(bioData.replace()); // "I am Rajiv Sharma, a software developer." (the replace() method returns the original string if no arguments are provided)

// replaceAll() - replaces all occurrences of a specified substring with another substring and returns a new string
const newBioData2 = bioData.replaceAll("a", "A");
console.log(newBioData2); // "I Am RAjiv ShArmA, A softwAre developer." (all occurrences of the substring "a" are replaced with "A")
console.log(bioData); // "I am Rajiv Sharma, a software developer." (original string is not changed)
console.log(bioData.replaceAll("xyz", "abc")); // "I am Rajiv Sharma, a software developer." (the substring "xyz" is not found in the string, so the original string is returned)
console.log(bioData.replaceAll()); // "I am Rajiv Sharma, a software developer." (the replaceAll() method returns the original string if no arguments are provided)

// concat() - concatenates two or more strings and returns a new string
const firstName = "Rajiv";
const lastName = "Sharma";
const fullName = firstName.concat(" ", lastName);
console.log(fullName); // "Rajiv Sharma" (the firstName and lastName strings are concatenated with a space in between)
console.log(firstName.concat(" ", "abc", " ", "def")); // "Rajiv abcdef" (the firstName string is concatenated with the "abc" and "def" strings)

// padStart() - pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
const lastFourDigits = "1234";
const paddedLastFourDigits = lastFourDigits.padStart(16, "*");
console.log(paddedLastFourDigits); // "************1234" (the lastFourDigits string is padded with "*" characters at the start until the total length is 16)
console.log(lastFourDigits.padStart(6, "0")); // "001234" (the lastFourDigits string is padded with "0" characters at the start until the total length is 6)
console.log(lastFourDigits.padStart(4, "0")); // "1234" (the lastFourDigits string is not padded because its length is already 4, which is equal to the specified length)
console.log(lastFourDigits.padStart(3, "0")); // "1234" (the lastFourDigits string is not padded because its length is already greater than the specified length)

// padEnd() - pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the end of the current string.
const paddedLastFourDigitsEnd = lastFourDigits.padEnd(16, "*");
console.log(paddedLastFourDigitsEnd); // "1234************" (the lastFourDigits string is padded with "*" characters at the end until the total length is 16)
console.log(lastFourDigits.padEnd(6, "0")); // "123400" (the lastFourDigits string is padded with "0" characters at the end until the total length is 6)
console.log(lastFourDigits.padEnd(4, "0")); // "1234" (the lastFourDigits string is not padded because its length is already 4, which is equal to the specified length)
console.log(lastFourDigits.padEnd(3, "0")); // "1234" (the lastFourDigits string is not padded because its length is already greater than the specified length)

// charAt() - returns the character at a specified index in a string
console.log(bioData.charAt(0)); // I (the character at index 0 is "I")
console.log(bioData.charAt(5)); // R (the character at index 5 is "R")
console.log(bioData.charAt(100)); // "" (an empty string is returned because the index 100 is out of bounds)
console.log(bioData.charAt(-1)); // "" (an empty string is returned because the index -1 is out of bounds)
console.log(bioData.charAt()); // I (the character at index 0 is returned because no argument is provided, so it defaults to index 0)

// charCodeAt() - returns the Unicode(ASCII) value of the character at a specified index in a string
console.log(bioData.charCodeAt(0)); // 73 (the Unicode value of the character "I" at index 0 is 73)
console.log(bioData.charCodeAt(5)); // 82 (the Unicode value of the character "R" at index 5 is 82)
console.log(bioData.charCodeAt(100)); // NaN (Not a Number is returned because the index 100 is out of bounds)
console.log(bioData.charCodeAt(-1)); // NaN (Not a Number is returned because the index -1 is out of bounds)
console.log(bioData.charCodeAt()); // 73 (the Unicode value of the character "I" at index 0 is returned because no argument is provided, so it defaults to index 0)

// split() - splits a string into an array of substrings based on a specified separator and returns the array
const words = bioData.split(" ");
console.log(words); // ["I", "am", "Rajiv", "Sharma,", "a", "software", "developer."] (the bioData string is split into an array of words based on the space character as the separator)
console.log(bioData.split("a")); // ["I ", "m R", "jiv Sh", "rm", ", ", "softw", "re developer."] (the bioData string is split into an array of substrings based on the character "a" as the separator)
console.log(bioData.split("xyz")); // ["I am Rajiv Sharma, a software developer."] (the bioData string is not split because the separator "xyz" is not found in the string, so the original string is returned as the only element of the array)
console.log(bioData.split()); // ["I am Rajiv Sharma, a software developer."] (the bioData string is not split because no separator is provided, so the original string is returned as the only element of the array)

// startsWith() - checks if a string starts with a specified substring and returns true or false
console.log(bioData.startsWith("I am")); // true (the bioData string starts with the substring "I am")
console.log(bioData.startsWith("Rajiv")); // false (the bioData string does not start with the substring "Rajiv")
console.log(bioData.startsWith("")); // true (the bioData string starts with an empty string, so it returns true)
console.log(bioData.startsWith()); // true (the bioData string starts with an empty string, so it returns true)

// endsWith() - checks if a string ends with a specified substring and returns true or false
console.log(bioData.endsWith("developer.")); // true (the bioData string ends with the substring "developer.")
console.log(bioData.endsWith("Sharma")); // false (the bioData string does not end with the substring "Sharma")
console.log(bioData.endsWith("")); // true (the bioData string ends with an empty string, so it returns true)
console.log(bioData.endsWith()); // true (the bioData string ends with an empty string, so it returns true)

// substring() - returns a portion of a string between the start index and the end index (end index is not included) and returns the new string
console.log(bioData.substring(0, 5)); // "I am " (the substring from index 0 to index 5 is "I am ")
console.log(bioData.substring(5, 0)); // "I am " (the substring from index 0 to index 5 is "I am ", the order of the indices does not matter)
console.log(bioData.substring(5)); // "Rajiv Sharma, a software developer." (the substring from index 5 to the end of the string is "Rajiv Sharma, a software developer.")
console.log(bioData.substring(0)); // "I am Rajiv Sharma, a software developer." (the substring from index 0 to the end of the string is the entire string)
console.log(bioData.substring(100)); // "" (an empty string is returned because the start index 100 is out of bounds)
console.log(bioData.substring(-1)); // "I am Rajiv Sharma, a software developer." (the substring from index 0 to the end of the string is returned because the start index -1 is treated as 0)

// slice() - returns a portion of a string between the start index and the end index (end index is not included) and returns the new string. It is similar to substring() but it can also accept negative indices, which count from the end of the string.
console.log(bioData.slice(0, 5)); // "I am " (the slice from index 0 to index 5 is "I am ")
console.log(bioData.slice(5, 0)); // "" (an empty string is returned because the slice() method does not swap the indices like substring() does)
console.log(bioData.slice(5)); // "Rajiv Sharma, a software developer." (the slice from index 5 to the end of the string is "Rajiv Sharma, a software developer.")
console.log(bioData.slice(0)); // "I am Rajiv Sharma, a software developer." (the slice from index 0 to the end of the string is the entire string)
console.log(bioData.slice(100)); // "" (an empty string is returned because the start index 100 is out of bounds)
console.log(bioData.slice(-1)); // "." (the slice from index -1 to the end of the string is the last character of the string, which is ".")
console.log(bioData.slice(-9)); // "developer." (the slice from index -9 to the end of the string is "developer.")
console.log(bioData.slice(-15, -9)); // "software" (the slice from index -15 to index -9 is "software")

// Template Literals - Template literals are string literals that allow embedded expressions. They are enclosed by backticks (`) instead of single or double quotes. Template literals can contain placeholders, which are indicated by the dollar sign and curly braces (${expression}). The expressions inside the placeholders and the text between them get passed to a function, or if there is no function, they are concatenated into a single string.
const name = "Rajiv";
const age = 30;
const city = "New York";

// Using template literals to create a string with embedded expressions
const message = `My name is ${name}, I am ${age} years old and I live in ${city}. and your account number ${lastFourDigits.padStart(16, "*")} is safe with us.`;
console.log(message); // "My name is Rajiv, I am 30 years old and I live in New York." (the expressions inside the placeholders are evaluated and their values are inserted into the string)

