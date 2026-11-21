# Práctica 7 - Aplicación web de películas con React, Vite, React Router, API externa, GitHub y Netlify

Aplicación web desarrollada con React y Vite que consume una API externa de películas (TMDB) y permite ver un listado de películas y el detalle de cada una.

## Integrantes

- Adrian Morales Mercado
- Alejandro de Jesus Velos Flores
- Jesús Antonio Cordero Estrada
- Joel Emmanuel Estrada Mendoza

## Descripción

Este proyecto es una SPA (Single Page Application) que muestra tarjetas de películas en la página principal y permite abrir el detalle de cada película al hacer clic en ella.

La aplicación está estructurada en componentes, servicios y rutas, siguiendo buenas prácticas básicas de React y un flujo de trabajo colaborativo con Git y GitHub.

## Objetivo

Desarrollar una aplicación web en React usando Vite como entorno de desarrollo, que consuma información de una API de películas, muestre un listado y el detalle de cada película, y que además sea trabajada colaborativamente mediante GitHub y publicada en Netlify.

## Tecnologías

- React
- Vite
- React Router DOM
- CSS
- Fetch API
- Git y GitHub
- Netlify

## Estructura general del proyecto

```
practica7-react-peliculas/
├── public/
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── MovieCard.css
│   │   ├── MovieGrid.jsx
│   │   └── MovieGrid.css
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── MovieDetails.jsx
│   │   └── MovieDetails.css
│   ├── routers/
│   │   └── AppRouter.jsx
│   ├── services/
│   │   └── httpClient.js
│   ├── utils/
│   │   └── getMovieImg.js
│   ├── img/
│   │   └── placeholder.svg
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Instalación y ejecución local

Requisito: tener instalado [Node.js](https://nodejs.org) (versión LTS).

1. Clonar el repositorio:

```bash
git clone https://github.com/Estrobots/practica7-react-peliculas.git
cd practica7-react-peliculas
```

2. Instalar las dependencias:

```bash
npm install
```

3. Crear el archivo `.env` con la API key de TMDB:

```bash
# macOS / Linux
cp .env.example .env

# Windows (PowerShell o CMD)
copy .env.example .env
```

Luego editar `.env` y reemplazar `TU_API_KEY` por la clave real.

4. Ejecutar el proyecto en desarrollo:

```bash
npm run dev
```

La aplicación se abre normalmente en `http://localhost:5173`.

## Rutas utilizadas

- `/` — Página principal con el listado de películas.
- `/movies/:movieId` — Detalle de una película específica mediante su ID.

## API utilizada

La aplicación consume la [The Movie Database (TMDB)](https://www.themoviedb.org/).

Endpoints principales:

- `GET /discover/movie` — Listado de películas.
- `GET /movie/:movieId` — Detalle de una película.

Para funcionar, la app requiere una API key de TMDB configurada en la variable de entorno: `VITE_TMDB_API_KEY`.

**Importante:** la API key no debe estar escrita directamente en el código. Debe definirse en `.env` y usarse a través de `import.meta.env.VITE_TMDB_API_KEY`.

## Funcionamiento de la aplicación

- **Página principal:** al cargar la app, se muestra un grid de tarjetas con poster y título de cada película.
- **Detalle de película:** al hacer clic en una tarjeta se navega a `/movies/:movieId`, donde se muestra poster, título, año, géneros, descripción y calificación.
- **Pie de página:** muestra los datos de los integrantes del equipo.

## Link del repositorio

GitHub: https://github.com/Estrobots/practica7-react-peliculas

## Link del despliegue en Netlify

Netlify: https://peli-pract7-dawnm.netlify.app

## Despliegue en Netlify

Para publicar el proyecto en Netlify se puede usar la integración desde GitHub con la siguiente configuración:

- Build command: `npm run build`
- Publish directory: `dist`
- Variables de entorno: `VITE_TMDB_API_KEY`

Como la aplicación usa rutas cliente con React Router, se incluye el archivo `public/_redirects` con el contenido:

```
/* /index.html 200
```

## Commits por integrante

Historial real de commits de cada integrante en el repositorio (usuario de GitHub entre paréntesis):

**Integrante 1 (@Estrobots)**

- Repositorio vaciado
- Inicializando el proyecto
- layout base

**Integrante 2 (@CAlexVF)**

- crear cliente http para tmdb y helper de imagenes
- borrar carpeta duplicada por error
- renderizado de imagenes

**Integrante 3 (@JesusCoe)**

- Redirect file to handle redirects (LOL)
- Add show movie details functionality to the page
- Add styles to movie details containers
- Traffic director for the app

**Integrante 4 (@JoelEstrada15)**

- style: agregar estilos de MovieCard
- fix: actualizar datos del footer
- docs: agregar README del proyecto
- feat: agregar escudo de CUCEI al footer

## Conclusiones

Esta práctica permitió desarrollar una aplicación web completa con React y Vite, consumir una API externa, organizar el código en componentes y servicios, configurar rutas con React Router, trabajar colaborativamente con GitHub y publicar el resultado en Netlify.

También se reforzaron temas clave como el uso de variables de entorno para claves de API, el manejo de estados y efectos con hooks, la navegación por parámetros URL y la importancia de documentar el proyecto para que sea entendido por otras personas.

## Ética y trabajo en equipo

Este proyecto fue construido de forma colaborativa por un equipo de 4 integrantes, con responsabilidades distribuidas y evidencia real de commits en el historial del repositorio.