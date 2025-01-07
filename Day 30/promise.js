const OMDB_API_KEY = '589afbe';
const movieName = 'sink hole';

// http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${movieName}
// http://www.omdbapi.com/?i=tt3896198&apikey=${OMDB_API_KEY}&s=${movieName}

let apiResponse = fetch(
  `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${movieName}`
)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

console.log(apiResponse, 'Resposne from endpoint');
