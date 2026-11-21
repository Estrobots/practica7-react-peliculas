import "./App.css";
import AppRouter from "./routers/AppRouter";
import escudoCucei from "./img/Escudo_CUCEI.svg";

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
        <img
          src={escudoCucei}
          alt="Escudo de CUCEI"
          className="footer-logo"
        />
        <div className="footer-row">
          Integrantes: Adrian Morales, Alejandro Velos, Jesús Cordero, Joel Estrada
        </div>
        <div className="footer-row">Profesor: Zeus Emmanuel Gutiérrez Cobián</div>
        <div className="footer-row">Materia: Desarrollo de Aplicaciones Web en la Nube y Móviles</div>
        <div className="footer-row">Calendario escolar: 2026B</div>
        <div className="footer-row">Mes y año: Noviembre 2026</div>
        <div className="footer-row">
          Institución: CUCEI - Universidad de Guadalajara
        </div>
      </footer>
    </div>
  );
}

export default App;
