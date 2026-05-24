const myName = "rajiv";

const userName1 = "";
const userName2 = "";

const user1 = {
    firstName: "Rajiv",
};

const user2 = {
    firstName: "Raj",
    "last-Name": "Sharma",
    rajiv: "Hello",
};

// console.log(user2);

// accessing values from user2 object

// 1. dot notation
// console.log(user2.firstName);
// console.log(user2.lastName);

// 2. bracket notation
// console.log(user2["firstName"]);
// console.log(user2["last-Name"]);
// console.log(user2[myName]);
// console.log(user2["first" + "Name"]);

// nested objects
const user3 = {
    firstName: "Raj",
    lastName: "Sharma",
    address: {
        city: "Gurugram",
        state: "Haryana",
        pincode: 122001,
        cityData: {
            population: 1000000,
            area: 500,
        }
    },
};

// inserting new key value pair in user3 object
user3.age = 27;
user3["country"] = "India";
user3["is-Student"] = true;

console.log(user3);

console.log(user3.address.city);
console.log(user3["address"]["state"]);
console.log(user3.address["pincode"]);
console.log(user3.address.cityData.population);
console.log(user3["address"]["cityData"]["area"]);