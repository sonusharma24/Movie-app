import WatchedMoviesItem from "./WatchedMoviesItem";

/* eslint-disable react/prop-types */
const WatchedMoviesList = ({ watched, watchedDeleteMovie }) => {
  return (
    <ul className="list">
      {watched?.map((movie) => (
        <WatchedMoviesItem
          watchedDeleteMovie={watchedDeleteMovie}
          key={movie.imdbId}
          movie={movie}
        />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
