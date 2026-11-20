import "./App.css";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Películas</h1>
        <p className="app-subtitle">
          Cartelera popular · datos de The Movie Database
        </p>
      </header>
      <main className="app-main">
        <AppRouter />
      </main>
      <footer className="app-footer">
        <div className="footer-row">
          Integrantes: Integrante 1, Integrante 2, Integrante 3, Integrante 4
        </div>
        <div className="footer-row">Profesor: [Nombre del profesor]</div>
        <div className="footer-row">Materia: [Nombre de la materia]</div>
        <div className="footer-row">Calendario escolar: [Ej. 2026A]</div>
        <div className="footer-row">Mes y año: Marzo 2026</div>
        <div className="footer-row">
          Institución: CUCEI - Universidad de Guadalajara
        </div>
      </footer>
    </div>
  );
}

export default App;
