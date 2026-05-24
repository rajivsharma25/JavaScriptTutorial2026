let username = prompt("Please Enter Your Name.");
let userAge = parseInt(prompt("Please Enter Your Age.")) || 10;

debugger;

// if(0){
//     console.log("Hey, this is true.");
// } else {
//     console.log("This is false.");
// }

if (!username) {
  username = "Rajiv Sharma";
}

console.log(`Name: ${username}`);

if (userAge) {
  console.log(`Age: ${userAge}`);
}

// if (userAge >= 0 && userAge <= 4) {
//   console.log(`${username} is a kid.`);
//   console.log("And he/she is playing.");
// } else if (userAge >= 5 && userAge <= 17) {
//   console.log(`${username} is a school student.`);
//   console.log("And he/she is learning science and maths.");
// } else if (userAge >= 18 && userAge <= 24) {
//   console.log(`${username} is a college student.`);
//   console.log("And he/she is learning computer science.");
// } else if (userAge >= 25 && userAge <= 60) {
//   console.log(`${username} is a working professional.`);
//   console.log("And he/she is a web developer.");
// } else {
//   console.log(`${username} is retired.`);
//   console.log("And he/she reads newspaper.");
// }

console.log("Program Ended!!");
