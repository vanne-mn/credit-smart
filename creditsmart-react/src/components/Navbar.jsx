import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="logo">CreditSmart</h1>

{ /* Navegación principal: enlaces a Home, Simulador y Solicitar Crédito */ }

        <nav className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/simulador">Simulador</Link>
          <Link to="/solicitar">Solicitar Crédito</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
