# 💳 CreditSmart – Aplicación Web Dinámica con React

**Estudiante:** Vannesa Moncada  Ramírez
**Materia:** Ingeniería Web I  
**Actividad:**  Desarrollo de Aplicación Web Dinámica con React - CreditSmart
**Proyecto:** Desarrollo de Aplicación Web Dinámica con React

---

## 📌 Actualización: Se agregó descripción detallada del proyecto.

**CreditSmart** es una aplicación web interactiva desarrollada con **React + Vite** que permite:

- Consultar un catálogo de créditos disponible.
- Buscar, filtrar y comparar productos crediticios.
- Simular cuotas mensuales según monto y plazo.
- Llenar un formulario de solicitud totalmente funcional.
- Navegar entre páginas mediante **React Router DOM**.
- Administrar estado, propiedades y datos usando conceptos clave de React.

El proyecto aplica los principios de componentes reutilizables, hooks, manejo de arrays, modularidad y buenas prácticas de desarrollo web.

---

## 🚀 Tecnologías Utilizadas

| Tecnología | Uso |
|-----------|-----|
| **React** | Creación de componentes, hooks, render dinámico |
| **Vite** | Entorno de desarrollo rápido y moderno |
| **React Router DOM v6** | Navegación entre páginas |
| **JavaScript ES6+** | Lógica y procesamiento de datos |
| **HTML5 JSX** | Estructura de componentes |
| **CSS3 modular** | Estilos por página y componentes |

---

## 📁 Estructura del Proyecto


---

## 🔗 Navegación entre páginas (React Router)

El proyecto utiliza **React Router DOM v6** para la navegación SPA.

### 📄 App.jsx
```jsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;

> **Nota:** Este repositorio contiene la versión para la actividad S30 - EA2 de Ingeniería Web I. Fecha de última actualización: 2025.
