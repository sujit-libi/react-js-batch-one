// // let animeArr = ["One Piece", "Attack on Titan", "Demon Slayer", "Spy and Family"]
// // // console.log(animeArr, "Before")
// // // index = [0,1,2,3]

// // // console.log(animeArr[1], "Mikasa, Eren")

// // animeArr[1] = "Naruto"
// // // console.log(animeArr, "After")

// // // slice and splice
// // let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // // map, filter, reduce

// // let newArr = numArr.map((num) => {
// //   return num * 2
// // })

// // let evenArr = numArr.filter((num) => {
// //   if(num % 2 == 0) return num
// // })

// // console.log(numArr, "old array")
// // console.log(evenArr, "New Even Array")


// let numArr = [1,2,3,4,5,6,7,7]

// // for(let i=0; i<=numArr.length - 1; i++){
// //   console.log(numArr[i], `This is value of index ${i}`)
// // }

// numArr.forEach((num) => {
//   // console.log(num, "This is value in array")
// })

// for(num of numArr){
//   console.log(num, "This is value in arrya. from  for (of)")
// }


// Object

// let userInfoArr = ['Sujit', 'libi', 29, true]
// userInfoArr[1]


// Create an Object
// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };

// // person.firstName = "Sujit"
// // console.log(person)

// Object.defineProperty(person, "firstName", {
//   // value: "Sujit",
//   writable: true,
//   // configurable: false
// })

// person.firstName = "Will Smith"
// console.log(person)


// define property


// Object.seal(userInfoObj)
// console.log(Object.keys(userInfoObj))
// console.log(Object.values(userInfoObj))
// console.log(Object.entries(userInfoObj))
// console.log(Object.fromEntries([['movie', 'one piece'], ['series', 'money heist'] ]))
// console.log(userInfoObj.hasOwnProperty("firstName"), "Property")

// userInfoObj.firstName = "Luffy"
// userInfoObj.hobby = "Watch anime"

// console.log(NaN === NaN)
// console.log(Object.is(NaN, NaN))

// console.log(userInfoObj)

// create() -> OOPS

// let parentObj = {
//   'movie': 'Puspha 2',
//   'series': 'Superman season 3'
// }

// let childObj = Object.create(parentObj) //

// console.log(parentObj)
// console.log(childObj.movie)
// childObj.webSeries = 'Mirzapur'
// console.log(childObj)

// Destructuring for array

// let userInfo = ['sujit', 'libi', 29, true];

// let firstName = userInfo[0]
// let lastName = userInfo[1]
// let age = userInfo[2]
// let isEmployed = userInfo[4]

// let candies = ['chocolate', 'gummy-bear', 'lolipop']

// let allCandies = [...candies, 'jellybean']

// console.log(allCandies)

// let [firstCandies, ...remainingCandies] = ['chocolate', 'gummy-bear', 'lolipop', 'jellybean' ]

// console.log(firstCandies, remainingCandies)

