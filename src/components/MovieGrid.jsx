import { useEffect, useMemo, useState } from "react";
import { get } from "../services/httpClient";
import MovieCard from "./MovieCard";
import "./MovieGrid.css";

// TMDB devuelve 20 por página: 3 páginas = 60 películas populares.
const PAGES = [1, 2, 3];

function MovieGrid() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genreId, setGenreId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([
      get("/genre/movie/list"),
      ...PAGES.map((page) =>
        get(`/discover/movie?sort_by=popularity.desc&page=${page}`)
      ),
    ])
      .then(([genreData, ...pages]) => {
        setGenres(genreData.genres || []);

        // Une las páginas descartando repetidas por id.
        const seen = new Set();
        const unique = [];
        pages.forEach((page) => {
          (page.results || []).forEach((movie) => {
            if (!seen.has(movie.id)) {
              seen.add(movie.id);
              unique.push(movie);
            }
          });
        });
        setMovies(unique);
      })
      .catch((err) => {
        console.error(err);
        setError("No se pudieron cargar las películas.");
      })
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(
    () =>
      genreId ? movies.filter((m) => m.genre_ids?.includes(genreId)) : movies,
    [movies, genreId]
  );

  if (error) {
    return <p className="grid-error">{error}</p>;
  }

  if (loading) {
    return <p className="grid-loading">Cargando películas...</p>;
  }

  return (
    <>
      <div className="grid-toolbar">
        <div className="filter-chips">
          <button
            type="button"
            className={`chip ${genreId === null ? "chip-active" : ""}`}
            onClick={() => setGenreId(null)}
          >
            Todas
          </button>
          {genres.map((genre) => (
            <button
              key={genre.id}
              type="button"
              className={`chip ${genreId === genre.id ? "chip-active" : ""}`}
              onClick={() => setGenreId(genre.id)}
            >
              {genre.name}
            </button>
          ))}
        </div>
        <span className="grid-count">
          {filtered.length} {filtered.length === 1 ? "película" : "películas"}
        </span>
      </div>

      {filtered.length === 0 ? (
        <p className="grid-empty">No hay películas para este género.</p>
      ) : (
        <ul className="container">
          {filtered.map((movie) => (
            <MovieCard
              key={movie.id}
              movieId={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
              voteAverage={movie.vote_average}
              releaseDate={movie.release_date}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default MovieGrid;
