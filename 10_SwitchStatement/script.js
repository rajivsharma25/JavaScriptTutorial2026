// const dayNumber = 4;

// if (dayNumber === 0) {
//   console.log('It is Sunday Today')
// } else if (dayNumber === 1) {
//   console.log('It is Monday Today')
// } else if (dayNumber === 2) {
//   console.log('It is Tuesday Today')
// } else if (dayNumber === 3) {
//   console.log('It is Wednesday Today')
// } else if (dayNumber === 4) {
//   console.log('It is Thursday Today')
// } else if (dayNumber === 5) {
//   console.log('It is Friday Today')
// } else if (dayNumber === 6) {
//   console.log('It is Saturday Today')
// } else {
//   console.log('Please Enter a Valid Day Number')
// }

// debugger;
// switch (dayNumber) {
//   case 0:
//     console.log("It is Sunday Today");
//     break;
//   case 1:
//     console.log("It is Monday Today");
//     break;
//   case 2:
//     console.log("It is Tuesday Today");
//     break;
//   case 3:
//     console.log("It is Wednesday Today");
//     break;
//   case 4:
//     console.log("It is Thursday Today");
//     break;
//   case 5:
//     console.log("It is Friday Today");
//     break;
//   case 6:
//     console.log("It is Saturday Today");
//     break;
//   default:
//     console.log("Please Enter a Valid Day Number");
// }

// console.log("Program Ended!!");

// let username = "Rajiv Sharma";
// let userAge = 27;

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

// debugger;
// switch (true) {
//   case (userAge >= 0 && userAge <= 4):
//     console.log(`${username} is a kid.`);
//     console.log("And he/she is playing.");
//     break;
//   case (userAge >= 5 && userAge <= 17):
//     console.log(`${username} is a school student.`);
//     console.log("And he/she is learning science and maths.");
//     break;
//   case (userAge >= 18 && userAge <= 24):
//     console.log(`${username} is a college student.`);
//     console.log("And he/she is learning computer science.");
//     break;
//   case (userAge >= 25 && userAge <= 60):
//     console.log(`${username} is a working professional.`);
//     console.log("And he/she is a web developer.");
//     break;
//   default:
//     console.log(`${username} is retired.`);
//     console.log("And he/she reads newspaper.");
// }

// console.log("Program Ended!!");

const grade = "C";

switch (grade) {
  case "A":
    console.log("Your score is between 90 and 100.");
    break;
  case "B":
    console.log("Your score is between 80 and 89.");
    break;
  case "C":
    console.log("Your score is between 70 and 79.");
    break;
  case "D":
    console.log("Your score is between 60 and 69.");
    break;
  case "F":
    console.log("Your score is below 60.");
    break;
  default:
    console.log("Sorry, You Failed");
}

console.log("Program Ended!!");