import { useState } from "react";
import { useFetch } from "./Hooks/useFetch";
import { useLocalStorage } from "./Hooks/useLocalStorage";

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
import MovieDetail from "./Components/Movies/MoviesDetails/MovieDetail";

function App() {
  const [query, setQuery] = useState("");
  const [movieId, setMovieId] = useState(null);
  const [showMovieDetails, setShowMovieDetails] = useState(false);

  const API_URL = `https://www.omdbapi.com/?apikey=f6d85403&s=${query}&page=${page}`;
  // fetch movies from api
  const { data: movies, isLoading, errorMessage } = useFetch(API_URL, query);
  // get watched movies from local storage
  const [watched, setWatched] = useLocalStorage();
  // get movie id from movies list
  const movieDetailHandler = (id) => {
    setMovieId(id);
    setShowMovieDetails(true);
  };
  // geting movie object from movie details component and added to watched movies
  const getWatchedMovie = (movieObj) => {
    setWatched((movies) => [...movies, movieObj]);
  };
  // delete watched movie from watched list
  const watchedDeleteMovie = (id) => {
    setWatched((movies) => movies.filter((movie) => movie.imdbId !== id));
  };

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
            <MoviesList
              movies={movies}
              movieDetailHandler={movieDetailHandler}
            />
          ) : (
            <EmptyMovies />
          )}
          {}
        </MoviesBox>
        <MoviesBox>
          {showMovieDetails ? (
            <MovieDetail
              setShowMovieDetails={setShowMovieDetails}
              movieId={movieId}
              getWatchedMovie={getWatchedMovie}
              watched={watched}
            />
          ) : (
            <>
              <MoviesSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                watchedDeleteMovie={watchedDeleteMovie}
              />
            </>
          )}
        </MoviesBox>
      </Main>
    </>
  );
}

export default App;
