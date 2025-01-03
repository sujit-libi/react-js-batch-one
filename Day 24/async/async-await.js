console.log('Async Await .........');

const OMDB_API_KEY = '589afbe';
const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${OMDB_API_KEY}`;

const movieName = 'Batman';

// Fetching data using Promise
// fetch(
//   `http://www.omdbapi.com/?i=tt3896198&apikey=${OMDB_API_KEY}&s=${movieName}`
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data, 'Data'));

// Fetchning data using Async - Await
async function fetchMovie() {
  const response = await fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=${OMDB_API_KEY}&s=${movieName}`
  );
  const data = await response.json();
  console.log('In side asyn');

  console.log(data);
}

fetchMovie();
console.log('out side asyn');
