const name = "Bartek";

const person = {
  name,
  age: 12,
  gender: "male",
  number: 6,
  grades: [1, 2, 3],
};

const students = [
  {
    name: "Kasia",
    age: 18,
    gender: "female",
    number: 5,
    grades: [5, 5, 5],
  },
  {
    name: "Basia",
    age: 14,
    gender: "female",
    number: 10,
    grades: [5, 5, 6],
  },
];

students.push(person);

students[2].name = "referencja";

// console.log(students);
// console.log("person", person);
// let nameB = "Bartek";

// const names = ["Kasia", "Basia"];
// names.push(nameB);

// nameB = "Stefan";

// console.log(names);
// console.log(nameB);

const map = new Map();
map.set("name", "Bart");
map.set("age", 10);
console.log(map.keys());

const arr = [1, 2, 3, 4, 4, 4, 4, 4];
const set = new Set(arr);
console.log(Array.from(set));
