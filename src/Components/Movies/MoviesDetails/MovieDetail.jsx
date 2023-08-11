/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import StarRating from "../../StarRating/StarRating";
import Loader from "../../Loader/Loader";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import { useKey } from "../../../Hooks/useKey";

const MovieDetail = ({
  watched,
  setShowMovieDetails,
  movieId,
  getWatchedMovie,
}) => {
  const [movie, setMovie] = useState({});
  const [userRating, setUserRating] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = `https://www.omdbapi.com/?apikey=f6d85403&i=${movieId}`;

  const watchedMovies = watched.map((movie) => movie.imdbId).includes(movieId);
  const watchedMovieRating = watched.find(
    (movie) => movie.imdbId === movieId
  )?.userRating;
  const {
    imdbID,
    Actors: actors,
    Director: director,
    Genre: genre,
    Poster: poster,
    imdbRating,
    Released: released,
    Title: title,
    Runtime: runtime,
    Plot: plot,
    year,
  } = movie;
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("something went wrong, try again later");
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [API_URL]);

  // geting rating from star component
  const getStarRating = (rating) => {
    setUserRating(rating);
  };

  const watchedMoviesHandler = () => {
    const newMovieObj = {
      imdbId: movieId,
      runtime: Number(runtime.split("").at(0)),
      poster,
      title,
      imdbRating: Number(imdbRating),
      year,
      userRating,
    };

    getWatchedMovie(newMovieObj);
    setShowMovieDetails(false);
  };

  useEffect(() => {
    if (!title) return;
    document.title = `Movies | ${title}`;
    return () => {
      document.title = "Movie App";
    };
  }, [title]);

  const closeMovieDetails = () => {
    setShowMovieDetails(false);
  };

  useKey("escape", closeMovieDetails);

  return (
    <div className="details">
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <>
          <header>
            <button onClick={closeMovieDetails} className="btn-back">
              &#8592;
            </button>
            <img src={poster} alt={title} />

            <div className="details-overview">
              <h2>{title}</h2>
              <span>
                {released}-{runtime}
              </span>
              <p>{genre}</p>
              <p>
                ⭐ <span>{imdbRating} IMDB rating</span>
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              {!watchedMovies ? (
                <StarRating size={25} setStarRating={getStarRating} />
              ) : (
                <p>you rate this movie {watchedMovieRating}</p>
              )}

              {userRating > 0 && (
                <button
                  onClick={() => watchedMoviesHandler(movie)}
                  className="btn-add"
                >
                  Add to
                </button>
              )}
            </div>

            <span>
              <em>{plot}</em>
            </span>
            <p>{actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
