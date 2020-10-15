import React from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import FormTarea from '../tareas/FormTarea';
import ListadoTareas from '../tareas/ListadoTareas';

const Proyectos = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />

      <div className="seccion-principal">
        <main>
          <Barra />
          <div className="contenedor-tareas">
            <ListadoTareas />
          </div>

        </main>
        <FormTarea />
      </div>
    </div>
  );
}

export default Proyectos; 