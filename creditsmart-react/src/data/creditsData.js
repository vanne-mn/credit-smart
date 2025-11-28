import personalImg from "../assets/imagenes/personal.jpg";
import vehiculoImg from "../assets/imagenes/vehiculo.jpg";
import viviendaImg from "../assets/imagenes/vivienda.jpg";
import educativoImg from "../assets/imagenes/educativo.jpg";
import empresarialImg from "../assets/imagenes/empresarial.jpg";


export const creditsData = [
  {
    id: 1,
    titulo: "Crédito Libre Inversión",
    tasa: 12,
    min: 1000000,
    max: 50000000,
    plazo: 36,
    imagen: personalImg
  },
  {
    id: 2,
    titulo: "Crédito Vehículo",
    tasa: 10,
    min: 5000000,
    max: 80000000,
    plazo: 60,
    imagen: vehiculoImg
  },
  {
    id: 3,
    titulo: "Crédito Vivienda",
    tasa: 8.5,
    min: 20000000,
    max: 200000000,
    plazo: 120,
    imagen: viviendaImg
  },
  {
    id: 4,
    titulo: "Crédito Educativo",
    tasa: 9,
    min: 1000000,
    max: 40000000,
    plazo: 48,
    imagen: educativoImg
  },
  {
    id: 5,
    titulo: "Crédito Empresarial",
    tasa: 14,
    min: 10000000,
    max: 300000000,
    plazo: 72,
    imagen: empresarialImg
  }
];
