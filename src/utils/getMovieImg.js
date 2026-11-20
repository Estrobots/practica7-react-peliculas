import placeholder from "../img/placeholder.svg";

export function getMovieImg(path, width = 500) {
  if (!path) {
    return placeholder;
  }
  return `https://image.tmdb.org/t/p/w${width}${path}`;
}
