const OMDB_API_KEY = '589afbe';
const movieName = 'sink hole';

// http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${movieName}
// http://www.omdbapi.com/?i=tt3896198&apikey=${OMDB_API_KEY}&s=${movieName}

// async function searchMovieByTitle() {
//   let apiResponse = await fetch(
//     `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${movieName}`
//   );
//   let data = await apiResponse.json();
//   console.log(data);
// }

// searchMovieByTitle();

(async function searchMovieByTitle() {
  let apiResponse = await fetch(
    `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${movieName}`
  );
  let data = await apiResponse.json();
  console.log(data);
})();
