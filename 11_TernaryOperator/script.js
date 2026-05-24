let age = 18;
debugger;
let canVote = age >= 18 ? "Yes, you can vote!" : "No, you cannot vote.";
console.log(canVote);

const userName = 5 > 2 ? "Alice" : "Bob";
console.log(userName);
let gender = "female";

const userMessage = `${gender === "male" ? "He" : "She"} is a ${age >= 18 ? "adult" : "minor"}`;
console.log(userMessage);

//condition chains
let score = 85;
const grade = score >= 90 ? "A" :
              score >= 80 ? "B" : "C";
console.log(grade);