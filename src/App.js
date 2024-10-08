import React from 'react';
import Encabezado from './componentes/Encabezado/Encabezado';
import Productos from './componentes/Productos/Productos';
import Servicios from './componentes/Servicios/Servicios';
import Contacto from './componentes/Contacto/Contacto';
import PiePagina from './componentes/PiePagina/PiePagina';

function App() {
  const productos = [
      { nombre: "ACETAMINOFÉN", precioAnterior: 2000, precioActual: 1500, imagen: "images/producto1.jpg" },
      { nombre: "IBUPROFENO", precioAnterior: 2500, precioActual: 1800, imagen: "images/producto2.jpg" }
  ];

  return (
      <div>
          <Encabezado />
          <Productos productos={productos} />
          <Servicios />
          <Contacto />
          <PiePagina />
      </div>
  );
}

export default App;