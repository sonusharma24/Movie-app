/* eslint-disable react/prop-types */

const MoviesItem = ({ movie, movieDetailHandler }) => {
  return (
    <li onClick={() => movieDetailHandler(movie.imdbID)}>
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
};

export default MoviesItem;
