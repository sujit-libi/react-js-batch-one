import { useState, useEffect, use } from 'react';
import RatingStar from './RatingStar';

const tempMovieData = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
  },
  {
    imdbID: 'tt0133093',
    Title: 'The Matrix',
    Year: '1999',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
  },
  {
    imdbID: 'tt6751668',
    Title: 'Parasite',
    Year: '2019',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
  },
];

const tempWatchedData = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: 'tt0088763',
    Title: 'Back to the Future',
    Year: '1985',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const OMDB_API_KEY = '589afbe';

export default function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [watched, setWatched] = useState([]);

  const [selectedMovieId, setSelectedMovieId] = useState(null);

  // Using Promise
  // useEffect(() => {
  //   fetch(
  //     `http://www.omdbapi.com/?i=tt3896198&apikey=${OMDB_API_KEY}&s=${movieName}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setMovies(data.Search));
  // }, []);

  // Using Async Await
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setErrorMessage('');
        setIsLoading(true);
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`
        );
        if (!response.ok) throw new Error('Network Error');
        const data = await response.json();
        if (!data.Search) throw new Error('Movie Not found');
        console.log(data.Search);
        setMovies(data.Search);
      } catch (error) {
        console.error('Something went wrong', error);
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (query.length < 3) {
      // !query
      setMovies([]);
      setErrorMessage('');
      return;
    }
    fetchMovie();
  }, [query]);

  function handleSelectMovie(movieId) {
    setSelectedMovieId(movieId);
  }

  function handleCloseMovieDetail() {
    setSelectedMovieId(null);
  }

  return (
    <>
      <Navbar>
        <Logo />
        <Searchbar query={query} setQuery={setQuery} />
        <MovieResultLength movies={movies} />
      </Navbar>
      <Main>
        <MovieListBox>
          {isLoading && <Loader />}
          {!isLoading && errorMessage && (
            <ErrorMessage message={errorMessage} />
          )}
          {!isLoading && !errorMessage && (
            <MovieList movies={movies} onMovieSelect={handleSelectMovie} />
          )}
        </MovieListBox>
        <WatchedMovieListBox>
          {selectedMovieId ? (
            <MovieDetail
              movieId={selectedMovieId}
              handleCloseMovieDetail={handleCloseMovieDetail}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList watched={watched} />
            </>
          )}
        </WatchedMovieListBox>
      </Main>
    </>
  );
}

function ErrorMessage({ message }) {
  return <div className="error">{message}</div>;
}

function Loader() {
  return <div className="loader">Loading......</div>;
}

function Navbar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}

function MovieResultLength({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

function MovieDetail({ movieId, handleCloseMovieDetail }) {
  const [movieDetail, setMovieDetail] = useState({});
  useEffect(() => {
    async function getMovieDetailById() {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${movieId}`
      );
      const data = await response.json();
      setMovieDetail(data);
      console.log(data, 'Movie detail');
    }

    getMovieDetailById();
  }, [movieId]);
  return (
    <div className="details">
      <header>
        <button className="btn-back" onClick={handleCloseMovieDetail}>
          &larr;
        </button>
        <img
          src={movieDetail.Poster}
          alt={`This poster is for ${movieDetail.Title}`}
        />
        <div className="details-overview">
          <h1>{movieDetail.Title}</h1>
          <p>
            {movieDetail.Released} &bull; {movieDetail.Runtime}
          </p>
          <p>{movieDetail.Genre}</p>
          <p>
            <span>⭐️</span> {movieDetail.imdbRating} IMDB Rating
          </p>
        </div>
      </header>
      <section>
        <div className="rating">
          <RatingStar />
          <button className="btn-add">+ Add to list</button>
        </div>
        <p>
          Plot: <em>{movieDetail.Plot}</em>
        </p>
        <p>
          Actor/Actress: <em>{movieDetail.Actors}</em>
        </p>
        <p>
          Directed By: <em>{movieDetail.Director}</em>
        </p>
      </section>
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

function Searchbar({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

const MovieListBox = ({ children }) => {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? '–' : '+'}
      </button>
      {isOpen1 && children}
    </div>
  );
};

const WatchedMovieListBox = ({ children }) => {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? '–' : '+'}
      </button>
      {isOpen2 && children}
    </div>
  );
};

function MovieList({ movies, onMovieSelect }) {
  return (
    <ul className="list list-movie">
      {movies?.map((movie) => (
        <MovieListItem
          movie={movie}
          key={movie.imdbID}
          onMovieSelect={onMovieSelect}
        />
      ))}
    </ul>
  );
}

function MovieListItem({ movie, onMovieSelect }) {
  return (
    <li onClick={() => onMovieSelect(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

const WatchedMovieList = ({ watched }) => {
  return (
    <ul className="list">
      {watched.map((movie, index) => (
        <WatchedMovieListItem movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

const WatchedMovieListItem = ({ movie }) => {
  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
      </div>
    </li>
  );
};

const WatchedSummary = ({ watched }) => {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
};
