/* eslint-disable react/prop-types */

const WatchedMoviesItem = ({ movie, watchedDeleteMovie }) => {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
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
          <span>{isNaN(movie.runtime) ? 0 : movie.runtime} min</span>
        </p>
      </div>
      <button
        className="btn-delete"
        onClick={() => watchedDeleteMovie(movie.imdbId)}
      >
        X
      </button>
    </li>
  );
};

export default WatchedMoviesItem;
