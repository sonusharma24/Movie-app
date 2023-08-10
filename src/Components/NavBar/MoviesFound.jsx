/* eslint-disable react/prop-types */

const MoviesFound = ({ movies }) => {
  return (
    <p className="num-results">
      Found <strong>{movies?.length || 0}</strong> results
    </p>
  );
};

export default MoviesFound;
