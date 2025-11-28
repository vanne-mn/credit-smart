// src/pages/Simulador.jsx
import { useState, useMemo } from "react";
import { creditsData } from "../data/creditsData";

import "./Simulador.css";

export default function Simulador() {
  const [busqueda, setBusqueda] = useState("");
  const [rangoMonto, setRangoMonto] = useState("todos");
  const [ordenTasa, setOrdenTasa] = useState("ninguno");

  // FILTRADO DE CRÉDITOS
  const resultados = useMemo(() => {
    let lista = [...creditsData];

    // 1. BUSQUEDA por título
    if (busqueda.trim() !== "") {
      lista = lista.filter((c) =>
        c.titulo.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    // 2. FILTRO de monto según mínimo
    if (rangoMonto !== "todos") {
      if (rangoMonto === "1") {
        lista = lista.filter((c) => c.min >= 1000000 && c.min <= 10000000);
      } else if (rangoMonto === "2") {
        lista = lista.filter((c) => c.min >= 10000000 && c.min <= 50000000);
      } else if (rangoMonto === "3") {
        lista = lista.filter((c) => c.min >= 50000000);
      }
    }

    // 3. ORDENAR POR TASA
    if (ordenTasa === "asc") {
      lista.sort((a, b) => a.tasa - b.tasa);
    } else if (ordenTasa === "desc") {
      lista.sort((a, b) => b.tasa - a.tasa);
    }

    return lista;
  }, [busqueda, rangoMonto, ordenTasa]);

  return (
    <div className="simulador-container">
      <h1 className="sim-title">Simulador de Créditos</h1>
      <p className="sim-subtitle">Filtra y encuentra el crédito ideal para ti.</p>

      {/* CONTROLES DE FILTRO */}
      <div className="sim-controls">
        <input
          type="text"
          placeholder="Buscar crédito por nombre..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <select value={rangoMonto} onChange={(e) => setRangoMonto(e.target.value)}>
          <option value="todos">Todos los montos</option>
          <option value="1">1M – 10M</option>
          <option value="2">10M – 50M</option>
          <option value="3">Más de 50M</option>
        </select>

        <select value={ordenTasa} onChange={(e) => setOrdenTasa(e.target.value)}>
          <option value="ninguno">Sin orden</option>
          <option value="asc">Tasa: menor a mayor</option>
          <option value="desc">Tasa: mayor a menor</option>
        </select>
      </div>

      {/* RESULTADOS */}
      <div className="sim-resultados">
        {resultados.length === 0 ? (
          <p className="no-resultados">No hay créditos disponibles.</p>
        ) : (
          resultados.map((c) => (
            <div key={c.id} className="sim-card">
              <img src={c.imagen} alt={c.titulo} className="sim-img" />
              <h3>{c.titulo}</h3>
              <p className="sim-desc">{c.descripcion}</p>

              <p><strong>Tasa:</strong> {c.tasa}% anual</p>
              <p>
                <strong>Monto:</strong> ${c.min.toLocaleString()} –{" "}
                {c.max.toLocaleString()}
              </p>
              <p><strong>Plazo máximo:</strong> {c.plazo} meses</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
