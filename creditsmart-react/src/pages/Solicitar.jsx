// src/pages/Solicitar.jsx
import { useState, useEffect } from "react";
import { creditsData } from "../data/creditsData";
import "./Solicitar.css";

function calcularCuotaMensual(P, tasaAnual, n) {
  if (!P || !tasaAnual || !n) return 0;
  const i = (tasaAnual / 100) / 12;
  const cuota = (P * i) / (1 - Math.pow(1 + i, -n));
  return Number.isFinite(cuota) ? cuota : 0;
}

export default function Solicitar() {
  // Form state
  const [tipoId, setTipoId] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [monto, setMonto] = useState("");
  const [plazo, setPlazo] = useState("");
  const [tasa, setTasa] = useState("");
  const [errores, setErrores] = useState({});
  const [cuota, setCuota] = useState(0);
  const [mostrarResumen, setMostrarResumen] = useState(false);
  const [solicitudes, setSolicitudes] = useState([]);
  const [exito, setExito] = useState("");

  // Autocompletar datos del crédito seleccionado
  useEffect(() => {
    if (!tipoId) {
      setTasa("");
      setPlazo("");
      return;
    }

    const credito = creditsData.find((c) => String(c.id) === String(tipoId));
    if (credito) {
      setTasa(String(credito.tasa));
      setPlazo(String(credito.plazo));
    }
  }, [tipoId]);

  // Recalcular cuota automáticamente
  useEffect(() => {
    const P = Number(monto) || 0;
    const t = Number(tasa) || 0;
    const n = Number(plazo) || 0;

    const resultado = calcularCuotaMensual(P, t, n);
    setCuota(Number(resultado.toFixed(2)));
  }, [monto, tasa, plazo]);

  // Validaciones en vivo
  useEffect(() => {
    const newErrors = {};

    if (!tipoId) newErrors.tipoId = "Selecciona un tipo de crédito.";

    if (!nombre.trim()) newErrors.nombre = "Ingresa tu nombre.";

    if (!email.trim()) newErrors.email = "Ingresa tu email.";
    else {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(email)) newErrors.email = "Email inválido.";
    }

    const P = Number(monto);
    if (!monto) newErrors.monto = "Ingresa el monto.";
    else if (P <= 0) newErrors.monto = "Monto inválido.";
    else {
      const credito = creditsData.find((c) => String(c.id) === String(tipoId));
      if (credito) {
        if (P < credito.min) newErrors.monto = `Monto mínimo: ${credito.min.toLocaleString()}`;
        if (P > credito.max) newErrors.monto = `Monto máximo: ${credito.max.toLocaleString()}`;
      }
    }

    const n = Number(plazo);
    if (!plazo) newErrors.plazo = "Ingresa el plazo.";
    else if (n <= 0) newErrors.plazo = "Plazo inválido.";

    setErrores(newErrors);
  }, [tipoId, nombre, email, monto, plazo]);

  const puedeMostrarResumen = Object.keys(errores).length === 0;

  // 🔥 CORREGIDO: botón "Ver resumen" ahora sí funciona
  function handleEnviar(e) {
    e.preventDefault();

    if (!puedeMostrarResumen) {
      setMostrarResumen(false);
      return;
    }

    setMostrarResumen(true);
  }

  function confirmarSolicitud() {
    const nuevaSolicitud = {
      id: Date.now(),
      tipoId,
      tipoTitulo: creditsData.find((c) => String(c.id) === String(tipoId))?.titulo || "",
      nombre,
      email,
      monto: Number(monto),
      plazo: Number(plazo),
      tasa: Number(tasa),
      cuota,
      fecha: new Date().toLocaleString()
    };

    setSolicitudes((prev) => [nuevaSolicitud, ...prev]);
    setExito("Solicitud enviada con éxito. Pronto nos pondremos en contacto.");

    // Limpiar form
    setTipoId("");
    setNombre("");
    setEmail("");
    setMonto("");
    setPlazo("");
    setTasa("");
    setCuota(0);
    setMostrarResumen(false);

    setTimeout(() => setExito(""), 4000);
  }

  return (
    <div className="solicitar-container">
      <h1>Solicitar Crédito</h1>
      <p>Completa el formulario para obtener una estimación y enviar tu solicitud.</p>

      <form className="sol-form" onSubmit={handleEnviar} noValidate>
        <label>
          Tipo de crédito:
          <select value={tipoId} onChange={(e) => setTipoId(e.target.value)}>
            <option value="">-- Selecciona --</option>
            {creditsData.map((c) => (
              <option key={c.id} value={c.id}>
                {c.titulo}
              </option>
            ))}
          </select>
        </label>
        {errores.tipoId && <small className="error">{errores.tipoId}</small>}

        <label>
          Nombre completo:
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        {errores.nombre && <small className="error">{errores.nombre}</small>}

        <label>
          Correo electrónico:
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        {errores.email && <small className="error">{errores.email}</small>}

        <label>
          Monto solicitado (COP):
          <input
            type="number"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            placeholder="Ej: 10000000"
          />
        </label>
        {errores.monto && <small className="error">{errores.monto}</small>}

        <label>
          Plazo (meses):
          <input
            type="number"
            value={plazo}
            onChange={(e) => setPlazo(e.target.value)}
            placeholder="Ej: 36"
          />
        </label>
        {errores.plazo && <small className="error">{errores.plazo}</small>}

        <label>
          Tasa anual (%):
          <input
            type="number"
            value={tasa}
            onChange={(e) => setTasa(e.target.value)}
            placeholder="Ej: 10"
            step="0.1"
          />
        </label>

        <div className="preview-cuota">
          <p>
            Cuota mensual estimada:{" "}
            <strong>{cuota ? `$ ${cuota.toLocaleString()}` : "—"}</strong>
          </p>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary" disabled={!tipoId}>
            Ver resumen
          </button>

          <button
            type="button"
            className="btn-secondary"
            onClick={() => {
              setTipoId("");
              setNombre("");
              setEmail("");
              setMonto("");
              setPlazo("");
              setTasa("");
              setErrores({});
              setMostrarResumen(false);
            }}
          >
            Limpiar
          </button>
        </div>
      </form>

      {/* Resumen antes de enviar */}
      {mostrarResumen && (
        <section className="resumen">
          <h2>Resumen de la solicitud</h2>

          <p><strong>Tipo:</strong> {creditsData.find((c) => String(c.id) === String(tipoId))?.titulo}</p>
          <p><strong>Nombre:</strong> {nombre}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Monto:</strong> ${Number(monto).toLocaleString()}</p>
          <p><strong>Plazo:</strong> {plazo} meses</p>
          <p><strong>Tasa anual:</strong> {tasa}%</p>
          <p><strong>Cuota estimada:</strong> ${cuota.toLocaleString()}</p>

          <div className="resumen-actions">
            <button className="btn-primary" onClick={confirmarSolicitud}>Confirmar y enviar</button>
            <button className="btn-secondary" onClick={() => setMostrarResumen(false)}>Volver</button>
          </div>
        </section>
      )}

      {exito && <div className="mensaje-exito">{exito}</div>}

      {solicitudes.length > 0 && (
        <section className="solicitudes-list">
          <h3>Solicitudes realizadas (memoria)</h3>
          <ul>
            {solicitudes.map((s) => (
              <li key={s.id}>
                <strong>{s.tipoTitulo}</strong> — {s.nombre} — $
                {s.monto.toLocaleString()} — {s.fecha}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
