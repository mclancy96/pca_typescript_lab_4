// TASK:
// Define an interface Person with:
// - name: string
// - age: number
// Then define a new interface Employee that extends Person with:
// - jobTitle: string
// - department: string
// Finally, create a variable employee1 of type Employee.

// Your code here 👇

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  jobTitle: string;
  department: string;
}

const employee1: Employee = {
  name: "Jordan",
  age: 30,
  jobTitle: "Software Engineer",
  department: "Engineering",
};
