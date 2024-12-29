// console.log('1'); // api1
// setTimeout(() => {
//   console.log('3');
// }, 5000); // 1s => 1000 ms
// console.log('4'); // api3
// console.log('5'); // api4

function sum(a, b) {
  console.log(a + b);
}

// function multiply(a, b) {
//   console.log(a * b);
// }

function calculator(a, b, callback) {
  callback(a, b);
}

calculator(1, 3, sum);
// calculator(2, 4, multiply);

function getDataById(id, getNextDataById) {
  setTimeout(() => {
    console.log('This is the data that you are looking for: ', id);
    if (getNextDataById) {
      getNextDataById(id);
    }
  }, 2000);
}

getDataById(1, () => {
  console.log('Fetching data 2');
  getDataById(2, () => {
    console.log('Fetching data 3');
    getDataById(3, () => {
      console.log('Fetching data 4');
      getDataById(4);
    });
  });
}); // 5s
// getDataById(2); // 5s
// getDataById(3); // 5s
// getDataById(4); // 5s
// getDataById(5); // 5s
