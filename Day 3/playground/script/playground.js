// // let, const, and var

// // Scoping -> global, function, block

// // var

// // function declaration
// function isAccessiable(){
// // function execution
// var salary = 50000;
// console.log(salary)
// if(true){
//   var salary = 60000; // Same variable
//   console.log(salary)
// }
// console.log(salary)
// }


// // function calling
// // isAccessiable();

// // let
// function isAccessibleUsingLet(){
//   let salary = 50000;
//   console.log(salary)
//   if(true){
//     let salary = 60000;
//     console.log(salary)
//   }
//   salary = 100000
//   console.log(salary)
// }

// // isAccessibleUsingLet()

// function isAccessibleUsingConst(){
//   const salary = 50000;
//   console.log(salary)
//   if(true){
//     const salary = 60000;
//     console.log(salary)
//   }
//   salary = 100000;
//   console.log(salary)
// }

// // isAccessibleUsingConst()

// // If...else statement
// // Question age should be more than 18 and less than 55

// // let currentAge = 9;

// // if(currentAge>=18 || currentAge<=55){ // 55 <= currentAge >= 18
// //   console.log("You are eligible for driving license")
// // } else {
// //   console.log("You are not eligible!!!!!!")
// // }

// // If ... elseif ... else statement

// // let score = 55;

// // if(score >= 90){
// //   console.log("Grade A")
// // } else if(score > 75 && score < 90) {
// //   console.log("Grade B")
// // } else if(score > 65 && score < 75) {
// //   console.log("Grade C")
// // } else {
// //   console.log("Grade D")
// // }

// // // If else --

// let unknownValue = 157;

// if(unknownValue%2 === 0){
//   console.log("Even")
// } else {
//   console.log("Odd")
// }

// // Shorthanded Syntax
// if(unknownValue%2 === 0) console.log("Even")

// // Ternary Operator Syntax
// let isEven = unknownValue % 2 === 0 ? "Even" : "Odd"

// // Rollercoster  ticketig

// let height = 140; // in cm
// let age = 21;
// let amount = 0;
// let wantPhoto = true;

// if(height > 120) {
//   console.log("Congratulation you can ride!!!!")
//   if(age < 12){
//     amount += 5
//   } else if(age >=12 && age < 18){
//     amount += 7
//   } else if(age >= 18 && age < 45){
//     amount += 12
//   } else if(age >= 45 && age < 55) {
//     amount += 0
//   } else {
//     amount += 0
//   }

//   if(wantPhoto){
//     amount += 3
//   }
//   console.log(`Your total bill is ${amount}`)

// } else {
//   console.log("Sorry you cannot ride it!!!!!!")
// }


// // Falsy:
// //0, "", false, null, undefined, NaN -> not a number

// let number = "abc";

// if(number){
//   console.log("this is for truthy value oly")
// } else {
//   console.log("This is for falsy")
// }

// // Prompt
let birthYear = prompt("What is your birth year?")
console.log(birthYear, "Birth Year")
console.log(typeof birthYear)

console.log(Number(birthYear))
console.log(typeof Number(birthYear))
