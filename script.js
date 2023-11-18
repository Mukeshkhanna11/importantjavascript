//map function

let name = ["rajesh", "suresh", "mathu"];
let names = name.map((val) => {
  return val;
});
console.log(names[1]);

const login = [
  { username: "Mukesh", age: 24 },
  { username: "akash", age: 18 },
];
const logins = login.map((value) => {
  return value.age;
});
console.log(logins);
//filter
let age = [25, 26, 89, 65, 70, 9];
const ages = age.filter((value) => {
  return value > 50;
});
console.log(ages);
//reduce
let counts = { a: 1, b: 2 };
counts["c"] = 3;
console.log(counts);
let alpha = [
  ["a", "b", "c", "d", "d"],
  ["e", "e", "f"],
  ["g", "g", "h"],
];
console.log(alpha.flat());
const count = alpha.flat().reduce((accumulator, value) => {
  if (accumulator[value]) {
    accumulator[value]++;
  } else {
    accumulator[value] = 1;
  }
  return accumulator;
}, {});
console.log(count);
///excercise
let arr = [4, 6, 2, 3, 1, 1, 3, 5, 7, 8, 4, 3];

let array2 = arr.filter((val, index) => arr.indexOf(val) == index);
console.log(array2);
//api

fetch("https://official-joke-api.appspot.com/jokes/programming/random")
  .then((res) => res.json())
  .then((data) => {
    console.log(data["0"].setup, data["0"].punchline);
  })
  .catch((err) => {
    console.log("err");
  });
