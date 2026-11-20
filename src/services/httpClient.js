const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export async function get(path) {
  const separator = path.includes("?") ? "&" : "?";
  const url = `${API_BASE_URL}${path}${separator}language=es-MX`;

  const response = await fetch(url, {
    headers: {
      // TMDB v4: el token se envia como Bearer, NO como ?api_key=
      Authorization: `Bearer ${API_KEY}`,
      accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Error en la solicitud: " + response.status);
  }

  return response.json();
}
