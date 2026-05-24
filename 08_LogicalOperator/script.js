const useAge = 25;

// AND operator (&&) checks if both conditions are true
const isStudent = (useAge>= 18) && (useAge <= 25);
console.log(`Is the person a student? ${isStudent}`);

// OR operator (||) checks if at least one condition is true
const isAdult = useAge >= 18;
const hasLicense = true;
const canDrive = isAdult || hasLicense;
console.log(`Can the person drive? ${canDrive}`);

// NOT operator (!) checks if the condition is false
const isRaining = false; // Example value
const canGoOutside = !isRaining;
console.log(`Can the person go outside? ${canGoOutside}`);

const andResult = 0 && 2; // 0 is falsy, so the result is 0
console.log(`Result of 0 && 2: ${andResult}`);
console.log(Boolean(andResult)); // Convert the result to a boolean to show that it is falsy

const orResult = 0 || 2; // 0 is falsy, but 2 is truthy, so the result is 2
console.log(`Result of 0 || 2: ${orResult}`);
console.log(Boolean(orResult)); // Convert the result to a boolean to show that it is truthy

const notResult = !0; // 0 is falsy, so the result is true
console.log(`Result of !0: ${notResult}`);
console.log(Boolean(notResult)); // Convert the result to a boolean to show that it is truthy (true)

const emptyStringResult = "" && "Hello"; // The result is "" (empty string) because it is falsy
console.log(`Result of "" && "Hello": ${emptyStringResult}`);

const nonEmptyStringResult = "" || "Hello"; // The result is "Hello" because it is truthy
console.log(`Result of "" || "Hello": ${nonEmptyStringResult}`);

const temp = "hello" && console.log("This will be printed"); // The result is "hello" because it is truthy, and the console.log will execute
console.log(`Result of "hello" && console.log(...): ${temp}`);

const temp2 = undefined || console.log("This will not be printed"); // The result is "hello" because it is truthy, and the console.log will not execute
console.log(`Result of "hello" || console.log(...): ${temp2}`);

const temp3 = !null; // The result is true because null is falsy
console.log(`Result of !null: ${temp3}`); // true

const temp4 = !!null; // The result is false because null is falsy
console.log(`Result of !!null: ${temp4}`); // false

const temp5 = !""; // The result is true because an empty string is falsy
console.log(`Result of !"": ${temp5}`); // true

const temp6 = !!""; // The result is false because an empty string is falsy
console.log(`Result of !!"": ${temp6}`); // false