import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Logo from "./Components/NavBar/Logo";
import MoviesFound from "./Components/NavBar/MoviesFound";
import SearchBar from "./Components/NavBar/SearchBar";
import Main from "./Components/Movies/main/Main";
import MoviesBox from "./Components/Movies/MoviesBox/MoviesBox";
import MoviesList from "./Components/Movies/MoviesList/MoviesList";
import MoviesSummary from "./Components/Movies/MoviesSummary/MoviesSummary";
import WatchedMoviesList from "./Components/Movies/WatchedMovies/WatchedMoviesList";
import Loader from "./Components/Loader/Loader";
import ErrorMessage from "./Components/ErrorMessage/ErrorMessage";
import EmptyMovies from "./Components/ErrorMessage/EmptyMovies";
import { useFetch } from "./Hooks/useFetch";
const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

function App() {
  const [watched, setWatched] = useState(tempWatchedData);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const API_URL = `https://www.omdbapi.com/?apikey=f6d85403&s=${query}&page=${page}`;

  const { data: movies, isLoading, errorMessage } = useFetch(API_URL, query);
  return (
    <>
      <NavBar movies={movies}>
        <Logo />
        <SearchBar query={query} setQuery={setQuery} />
        <MoviesFound movies={movies} />
      </NavBar>

      <Main>
        <MoviesBox>
          {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
          {isLoading && <Loader />}
          {!errorMessage && !isLoading && movies.length > 0 ? (
            <MoviesList movies={movies} />
          ) : (
            <EmptyMovies />
          )}
          {}
        </MoviesBox>
        <MoviesBox>
          <MoviesSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </MoviesBox>
      </Main>
    </>
  );
}

export default App;
