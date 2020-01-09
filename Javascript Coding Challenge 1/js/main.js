/**
Requirements

Given an array “people”, write:

1. A function “listByGender” that accepts “gender” and retruns an array of people that
falls under the given gender; and
2. A function “groupByDepartment” that returns people grouped by their department.
Write your solution without using any libraries and use ES6 or above as much as possible.

**/

let people = [
  {
    name: "Arisa",
    department: "BP",
    gender: "F"
  },
  {
    name: "Ham",
    department: "IT",
    gender: "F"
  },
  {
    name: "Alice",
    department: "IT",
    gender: "F"
  },
  {
    name: "Anna",
    department: "DA",
    gender: "F"
  },
  {
    name: "Larry",
    department: "Sales",
    gender: "M"
  },
  {
    name: "Ria",
    department: "Sales",
    gender: "F"
  },
  {
    name: "JD",
    department: "Sales",
    gender: "M"
  },
  {
    name: "Thor",
    department: "Sales",
    gender: "M"
  },
  {
    name: "Karl",
    department: "Sales",
    gender: "M"
  },
  {
    name: "Rachel",
    department: "Sales",
    gender: "F"
  }
];

function getPeople() {
  return people;
}

function listByGender(gender) {
  return people.filter((item) => item.gender === gender);
}

function groupByDepartment() {
  let groupedData = {};
  let department = [...new Set(people.map(item => item.department))];
  department.map((department) => {
    groupedData[department] = people.filter((item) => item.department === department);
  })

  return groupedData;
}