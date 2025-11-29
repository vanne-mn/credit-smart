# 💳 CreditSmart – Aplicación Web Dinámica con React

👩‍💻 Estudiante: Vannesa Moncada Ramírez
📘 Materia: Ingeniería Web I
🧩 Actividad: Desarrollo de Aplicación Web Dinámica con React – CreditSmart
🗂 Proyecto: Aplicación Web React + Vite
💡 Descripción General del Proyecto

CreditSmart es una aplicación web dinámica desarrollada con React + Vite que permite a los usuarios:

Ver un catálogo completo de créditos disponibles.

Buscar, ordenar y filtrar créditos por monto y tasa.

Simular cuotas mensuales según monto, tasa y plazo.

Completar un formulario funcional para solicitar un crédito.

Visualizar un resumen con validaciones antes de confirmar.

Enviar la solicitud (almacenada temporalmente en memoria).

Navegar entre páginas sin recargar gracias a React Router DOM.

El proyecto aplica principios de componentización, manejo de estado, renderizado condicional, hooks, validaciones, modularidad y buenas prácticas de desarrollo web.

🚀 Tecnologías Utilizadas
Tecnología	Descripción
React	Componentes, hooks y render dinámico
Vite	Entorno de desarrollo rápido
React Router DOM v6	Navegación SPA
JavaScript ES6+	Lógica y manejo de datos
HTML5 + JSX	Estructura visual del proyecto
CSS3 modular	Estilos por componentes
📁 Estructura del Proyecto
CreditSmart/
│── public/
│── src/
│   ├── assets/
│   │   └── imágenes de créditos
│   ├── components/
│   │   └── Navbar.jsx
│   ├── data/
│   │   └── creditsData.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Simulador.jsx
│   │   └── Solicitar.jsx
│   ├── App.jsx
│   └── main.jsx
│
└── README.md

🔗 Navegación entre páginas (React Router DOM)
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

📃 Páginas del Proyecto
🏠 Home.jsx

Muestra tarjetas de productos crediticios.

Incluye imágenes y descripciones.

Navegación directa a simulación o solicitud.

📊 Simulador.jsx

Incluye:

Búsqueda, filtros y ordenamiento.

Cálculo dinámico de cuota mensual.

Renderización de tarjetas de créditos filtrados.

📝 Solicitar.jsx

Funcionalidades:

Formulario con validaciones en tiempo real.

Cálculo automático de cuota mensual.

Vista de resumen antes de enviar.

Mensaje de éxito al finalizar.

Lista en memoria de solicitudes realizadas.

▶️ Instalación y Ejecución
1️⃣ Clonar repositorio
git clonehttps://github.com/vanne-mn/credit-smart/tree/main/creditsmart-react

2️⃣ Instalar dependencias
npm install

3️⃣ Ejecutar el proyecto
npm run dev

http://localhost:5173/

Proyecto desarrollado por:
Vannesa Moncada Ramírez
Estudiante de Ingeniería Web I – IUDigital
Año: 2025
