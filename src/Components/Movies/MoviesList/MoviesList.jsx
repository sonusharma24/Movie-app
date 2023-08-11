/* eslint-disable react/prop-types */
import MoviesItem from "./MoviesItem";

const MoviesList = ({ movies, movieDetailHandler }) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <MoviesItem
          movieDetailHandler={movieDetailHandler}
          key={movie.imdbID}
          movie={movie}
        />
      ))}
    </ul>
  );
};

export default MoviesList;
