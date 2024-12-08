
// Named function

// function add(a,b){
//   return a + b
// }

// Function expression or anonymous function
// let add = function(a,b) {
//   return a + b
// }

// Arrow Function
// let add = (a, b) => a+b

// (function (){
//   console.log("I am from IIFE")
// })()

// (() => {
//   console.log("I am from IIFE and arrow function")
// })()

// High Order Function
// let arr = [1,2,3,4,5]

// let cal = arr.map(function(num){
//   return num*2
// })

// console.log(cal)

// Hoisting Concept
// console.log(a)
// var a = 1234
// console.log(a)

// Behind the Scene (BTS)
// var a;
// console.log(a);
// a = 1234;
// console.log(a);

// console.log(b)
// let b = "string"
// console.log(b)

//BTS
// let b;
// console.log(b)
// b = "string"
// console.log(b)

// tradition named function
// console.log(add(1,3), "function call before declaration")
// function add(a,b){
//   return a+b
// }
// console.log(add(1,4), "function call after declaration")

// BTS
// function add(a,b){
//   return a+b
// }
// console.log(add(1,3), "function call before declaration")
// console.log(add(1,4), "function call after declaration")

// Function expression/Anonymous Function
// console.log(multiply(1,4), "function call before declaration")
// var multiply = function(a, b){
//   return a*b
// }
// console.log(multiply(1,4), "function call before declaration")

// //BTS
// var multiply;
// console.log(multiply(1,4))
// multiply = function(a,b){
//   return a*b
// }
// console.log(multiply(1,4))

// console.log(add(1,6), "this is from arrow function")

// Synchronous Operation
// console.log("1234")
// console.log("sadfadf")
// console.log("234234")
// console.log("asdfaf")

// Asynchronous Operation
// console.log("This is first task")
// setInterval(() => {
//   console.log("This si second task")
// }, 2000)
// console.log("This is thrid task")

// function apiResponsePromise(){
//   fetch("https://jsonplaceholder.typicode.com/todos")
//   .then(res => res.json)
//   .then(data => console.log(data))
// }

// async function apiResponse(){
//   // console.log()
//   let response = await fetch("https://jsonplaceholder.typicode.com/todos")
//   let data = await response.json()
//   console.log(data)
// }

// apiResponse()

let firstName = "Punam"
let lastName = "Gurung"

console.log(firstName.toUpperCase())
console.log(firstName+lastName)
console.log(firstName.concat(lastName))

let jptSentence = "This is.jpt.sentence"
console.log(jptSentence.split("."))

