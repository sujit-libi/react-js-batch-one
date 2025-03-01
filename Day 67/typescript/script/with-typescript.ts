// function sum(a: number, b: number) {
//   return a + b;
// }

// const result = sum(4, 3);
// const result2 = sum(5, 4);
// console.log(result);

//primitive data : number, string, boolean

let a: number;
a = 3;

let b: number = 10;

// String
let username: string;
username = 'sujit';

// boolean
let isStudent: boolean = true;

// non primitive : array, object

// Array
// let student = ['sujit', 'shiva', 'mohan'];

let student: string[];
student = ['stujit', 'mohan'];

let studentnum: number[];
let booleanArr: boolean[];
let anyArr: any[];
anyArr = ['asdf', true, 1];

// Type Aliases

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

// Object
let person: Person = {
  name: 'Sujit',
  age: 30,
  isStudent: true,
};

// Array of Object
let people: Person[];

people = [
  {
    name: 'Sujit',
    age: 30,
    isStudent: true,
  },

  {
    name: 'Sujit',
    age: 30,
    isStudent: true,
  },
];

// Union
let randomValue: number | string | boolean;
randomValue = 123;
randomValue = 'university';
randomValue = true;

// inference
let numberValue = 1;
// numberValue = 'string';

// Function
function sum(a: number, b: number): number {
  return a + b;
}

const result = sum(3, 4);
console.log(result);

function display(str: string): void {
  console.log(str);
  // return str
}

display('javascript');
