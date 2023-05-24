import React from 'react';
import '../HojasDeEstilo/Tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea_contenedor completada' : 'tarea_contenedor'}>
      {/* Contenedor del texto de la tarea */}
      <div 
        className="tarea_texto"
        onClick={() => completarTarea(id)}
      >
        {texto}
      </div>

      {/* Contenedor del icono para eliminar la tarea */}
      <div 
        className="tarea_contenedor_iconos"
        onClick={() => eliminarTarea(id)}
      >
        <AiOutlineCloseCircle className="tarea_icono" />
      </div>
    </div>
  );
}

export default Tarea;
