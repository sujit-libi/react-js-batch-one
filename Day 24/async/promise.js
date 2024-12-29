// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const isComplete = true;
//     console.log('Your order is in pending');
//     if (isComplete) {
//       return resolve('Success message');
//     } else {
//       return reject('Error message');
//     }
//   }, 5000);
// });

// console.log(promise);

function getDataById(id) {
  return new Promise((resolve, reject) => {
    // console.log('Data is Fetching 1......');
    setTimeout(() => {
      console.log('Your data', id);
      resolve();
    }, 2000);
  });
}

console.log('Data is Fetching 1: .....');

getDataById(1)
  .then((res) => {
    console.log('Data is Fetching 2......');
    return getDataById(2);
  })
  .then((res) => {
    console.log('Data is Fetching 3......');
    return getDataById(3);
  })
  .then((res) => {
    console.log('Data Fetching is completed.....');
  })
  .catch((error) => {
    console.log('Something went wrong', error);
  });

// getDataById(3)
//   .then((res) => {
//     console.log('Data is Fetching completed......');
//     console.log(res, 'Response');
//   })
//   .catch((error) => {
//     console.log('Something went wrong', error);
//   });

// getDataById(4)
//   .then((res) => {
//     console.log(res, 'Response');
//   })
//   .catch((error) => {
//     console.log('Something went wrong', error);
//   });
// getDataById(5)
//   .then((res) => {
//     console.log(res, 'Response');
//   })
//   .catch((error) => {
//     console.log('Something went wrong', error);
//   });
