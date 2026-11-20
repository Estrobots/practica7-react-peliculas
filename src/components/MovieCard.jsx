import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";
import "./MovieCard.css";

function MovieCard({ title, posterPath, movieId, voteAverage, releaseDate }) {
  const imageUrl = getMovieImg(posterPath, 500);
  const year = releaseDate ? releaseDate.slice(0, 4) : null;
  const rating =
    typeof voteAverage === "number" && voteAverage > 0
      ? voteAverage.toFixed(1)
      : null;

  return (
    <li className="movie-card">
      <Link to={`/movies/${movieId}`} className="link-no-underline">
        <div className="movie-poster">
          <img src={imageUrl} alt={title} className="movie-img" loading="lazy" />
          {rating && <span className="movie-badge">★ {rating}</span>}
        </div>
        <h2 className="movie-title">{title}</h2>
        {year && <p className="movie-year">{year}</p>}
      </Link>
    </li>
  );
}

export default MovieCard;
