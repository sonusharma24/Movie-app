import WatchedMoviesItem from "./WatchedMoviesItem";

/* eslint-disable react/prop-types */
const WatchedMoviesList = ({ watched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMoviesItem key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
