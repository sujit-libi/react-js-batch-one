import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  // Render/Display logic
  const [movieList, setMovieList] = useState([]);
  const [counter, setCounter] = useState(0);

  const OMDB_API_KEY = '589afbe';
  const movieName = 'sink hole';

  useEffect(() => {
    async function getMovieList() {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${movieName}`
      );
      const data = await response.json();
      setMovieList(data.Search);
    }
    getMovieList();
    // fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${movieName}`)
    //   .then((response) => response.json())
    //   .then((data) => setMovieList(data.Search))
    //   .catch((error) => console.log(error));
    // console.log('This is with empty DA');
  }, []);

  // useEffect(() => {
  //   console.log('This is without dependencie array');
  // });

  // useEffect(() => {
  //   console.log('This is with dependnci array');
  // }, [counter]);

  function handleIncreaseCount() {
    setCounter((counter) => counter + 1);
  }

  return (
    <div className="App">
      <button onClick={handleIncreaseCount}>add</button>
      {counter}
      {movieList.map((movie) => {
        return <p key={movie.imdbID}>{movie.Title}</p>;
      })}
    </div>
  );
}

export default App;
