/**
Requirements

Given an array “people”, write:

1. A function “listByGender” that accepts “gender” and retruns an array of people that
falls under the given gender; and
2. A function “groupByDepartment” that returns people grouped by their department.
Write your solution without using any libraries and use ES6 or above as much as possible.

**/

import people from "./people";

function listByGender(gender) {
    let filteredByGender = people.filter((item) => item.gender === gender);
    console.log(filteredByGender);
}

function groupByDepartment() {
}

// Test --
listByGender("M");
listByGender("F");
groupByDepartment();
