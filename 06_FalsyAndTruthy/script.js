// Falsy values
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean("")); // false
console.log(Boolean(false)); // false

// Truthy values - anything that is not falsy is truthy
console.log(Boolean(true)); // true
console.log(Boolean("Hello")); // true
console.log(Boolean(42)); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true   