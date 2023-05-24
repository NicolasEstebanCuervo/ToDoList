import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../HojasDeEstilo/ListaDeTareas.css';

function ListaDeTareas() {
  // Estado para almacenar las tareas
  const [tareas, setTareas] = useState([]);

  // Función para agregar una nueva tarea
  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  // Función para eliminar una tarea
  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  // Función para marcar una tarea como completada
  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };
  
  return (
    <>
      {/* Componente TareaFormulario para agregar nuevas tareas */}
      <TareaFormulario onSubmit={agregarTarea} />

      {/* Contenedor de la lista de tareas */}
      <div className="tareas_lista_contenedor">
        {/* Mapeo de las tareas para generar los componentes Tarea */}
        {tareas.map(tarea => (
          <Tarea
            key={tarea.id}
            id={tarea.id} 
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );    
}

export default ListaDeTareas;
