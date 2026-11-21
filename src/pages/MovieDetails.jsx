import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { get } from "../services/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
import "./MovieDetails.css";

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    get(`/movie/${movieId}`)
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("No se pudo cargar el detalle de la película.");
        setLoading(false);
      });
  }, [movieId]);

  if (loading) {
    return <p className="details-loading">Cargando información...</p>;
  }

  if (error || !movie) {
    return (
      <div className="details-loader">
        <p className="details-error">{error || "Película no disponible."}</p>
        <Link to="/" className="details-back">
          ← Volver al listado
        </Link>
      </div>
    );
  }

  const imageUrl = getMovieImg(movie.poster_path, 500);

  return (
    <div className="detailsPage">
      <Link to="/" className="details-back">
        ← Volver al listado
      </Link>

      <div className="detailsContainer">
        <img
          src={imageUrl}
          alt={movie.title}
          className="movieImage"
          loading="lazy"
        />
        <div className="movieDetails">
          <h2>{movie.title}</h2>

          <div className="movie-meta">
            {movie.release_date && (
              <span className="meta-pill">{movie.release_date.slice(0, 4)}</span>
            )}
            {movie.vote_average != null && movie.vote_average > 0 && (
              <span className="meta-pill meta-rating">
                ★ {movie.vote_average.toFixed(1)} / 10
              </span>
            )}
            {movie.runtime > 0 && (
              <span className="meta-pill">{movie.runtime} min</span>
            )}
          </div>

          <p className="movie-genres">
            {movie.genres?.map((g) => g.name).join(" · ")}
          </p>

          <p className="movie-overview">
            {movie.overview || "Esta película no tiene descripción disponible."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
