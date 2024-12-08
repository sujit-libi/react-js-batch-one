// // // Math built-in function

// // // Random number
// // console.log(Math.random()) // 0 - 1

// // // Power
// // console.log(Math.pow(2, 3))

// // // Round Up
// // let number = 123.45
// // console.log(Math.round(number))

// // // Concept of Ceiling and Flooring
// // let num = 4.6
// // console.log(Math.ceil(num))
// // console.log(Math.floor(num))

// // // Square root
// // // console.log(Math.sqrt(16))

// // Array
// let numArr = [1, 2, 3, 4, 5]
// // console.log(numArr[3])
// // console.log(typeof numArr)

// // let numArr1 = new Array("abc", "def", "ghi")

// // console.log(numArr1[1])
// // console.log(numArr1)

// // Accessing data on array

// // Array built in method
// // console.log(numArr.length)

// // Add new data into array
// numArr.push(6)
// numArr.push(7)
// numArr.push(8)
// console.log(numArr)

// // Delete data from array
// numArr.pop()
// console.log(numArr)

// // Shift
// console.log(numArr.shift())
// console.log(numArr)

// // unshift
// numArr.unshift(100)
// console.log(numArr)

// // can store different data type
// let stringArr = ['a', 45, true, undefined, NaN]

// // join built-in method
// let username = ["Sujit", "Kumar", "Libi"]
// username.join("-")
// console.log(username.join(""))

// // concat
// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9,0]
// console.log(arr1.concat(arr2))


// // Splice
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);
// ['Jan', 'Feb', 'March', 'April', 'June']

// let randomNum = [3,6,5,9,1,0,4];
// console.log(randomNum.sort())
// console.log(randomNum.sort().reverse())
// // console.log(randomNum.sort((a, b) => a - b)) // for desc using b - a


// let fruits = ["apple", "orange", "banana"]

// // tradition function
// // let pie = fruits.map(function(fruit) {
// //   return fruit + " pie"
// // })

// // Arrow function
// let pie = fruits.map((fruit) =>
//    fruit + " pie"
// )

// console.log(fruits)
// console.log(pie)


// Filter
// let num = [1,2,3,4,5,6,7,8,9,10]

// let filteredNum = num.filter((value) => {
//   if(value%2 === 0) return value
// })

// console.log(num)
// console.log(filteredNum)

// Reduce

let num = [1,2,3,4,5,6,7,8,9,10]

console.log(num.reduce((accum, value) => {
  return accum += value
}, 0))











