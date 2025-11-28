// src/pages/Home.jsx
import "./Home.css";
import personal from "../assets/imagenes/personal.jpg";
import vehiculo from "../assets/imagenes/vehiculo.jpg";
import vivienda from "../assets/imagenes/vivienda.jpg";
import educativo from "../assets/imagenes/educativo.jpg";
import empresarial from "../assets/imagenes/empresarial.jpg";
import { Link } from "react-router-dom";

// ===== Datos de las tarjetas =====
const cards = [
  {
    id: 1,
    img: personal,
    title: "Crédito Libre Inversión",
    motivation: "“Haz realidad tus metas sin límites, tú decides en qué invertir.”",
    tasa: "12% anual",
    monto: "$1.000.000 - $50.000.000",
    plazo: "36 meses",
  },
  {
    id: 2,
    img: vehiculo,
    title: "Crédito Vehículo",
    motivation: "“Estrena el carro de tus sueños con cuotas que sí puedes pagar.”",
    tasa: "10% anual",
    monto: "$5.000.000 - $80.000.000",
    plazo: "60 meses",
  },
  {
    id: 3,
    img: vivienda,
    title: "Crédito de Vivienda",
    motivation: "“Tu hogar propio está más cerca de lo que imaginas.”",
    tasa: "8.5% anual",
    monto: "$20.000.000 - $200.000.000",
    plazo: "120 meses",
  },
  {
    id: 4,
    img: educativo,
    title: "Crédito Educativo",
    motivation: "“Invierte en tu futuro, estudia sin que el dinero sea un obstáculo.”",
    tasa: "9% anual",
    monto: "$1.000.000 - $40.000.000",
    plazo: "48 meses",
  },
  {
    id: 5,
    img: empresarial,
    title: "Crédito Empresarial",
    motivation: "“Impulsa tu negocio y llega al siguiente nivel.”",
    tasa: "10% anual",
    monto: "$5.000.000 - $200.000.000",
    plazo: "60 meses",
  },
];

export default function Home() {
  return (
    <div className="home-container">

      {/* ===== HERO ===== */}
      <div className="hero-box">
        <h1>Encuentra el crédito ideal para ti</h1>
        <p>
          En CreditSmart te ayudamos a dar ese siguiente paso importante en tu vida.
          Compara opciones, simula tus cuotas y solicita tu crédito fácilmente.
        </p>
      </div>

      {/* ===== TÍTULO PRINCIPAL ===== */}
      <h2 className="titulo-principal">Catálogo de Créditos</h2>
      <p className="subtitulo">
        Explora nuestras opciones y encuentra el crédito hecho a tu medida.
      </p>

      {/* ===== TARJETAS ===== */}
      
      {/* Tarjetas renderizadas dinámicamente desde el arreglo 'cards' */}

      <div className="cards-container">
        {cards.map((credit, index) => (
          <div
            key={credit.id}
            className="card"
            style={{ animationDelay: `${index * 150}ms` }} // Efecto escalonado
          >
            <img src={credit.img} alt={credit.title} className="card-img" />
            <h3>{credit.title}</h3>

            <p className="motivacion">{credit.motivation}</p>

            <p><strong>Tasa:</strong> {credit.tasa}</p>
            <p><strong>Monto:</strong> {credit.monto}</p>
            <p><strong>Plazo máximo:</strong> {credit.plazo}</p>

            <Link to="/solicitar" className="btn-solicitar">
              Solicitar
            </Link>
          </div>
        ))}
      </div>


      {/* ===== SECCIÓN DE BENEFICIOS ===== */}
      <div className="beneficios-container">
        <h2>¿Por qué elegir CreditSmart?</h2>

        <ul>
          <li>✔ Aprobación rápida y 100% en línea</li>
          <li>✔ Tasas competitivas y transparentes</li>
          <li>✔ Simulador interactivo para calcular tus cuotas</li>
          <li>✔ Acompañamiento personalizado en tu proceso</li>
        </ul>
      </div>
    </div>
  );
}


