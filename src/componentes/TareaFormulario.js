import React, { useState } from 'react';
import '../HojasDeEstilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {
  // Estado para almacenar el valor del input
  const [input, setInput] = useState('');

  // Manejador de cambio del input
  const manejarCambio = e => {
    setInput(e.target.value);
  };

  // Manejador de envío del formulario
  const manejarEnvio = e => {
    e.preventDefault();
    
    // Crear una nueva tarea con un ID único generado por uuidv4
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };
    
    // Llamar a la función onSubmit pasada como prop y enviar la nueva tarea
    props.onSubmit(tareaNueva);

    // Limpiar el valor del input
    setInput('');
  };

  return (
    <form className="tarea_formulario" onSubmit={manejarEnvio}>
      {/* Input para ingresar la tarea */}
      <input 
        className="tarea_input"
        type="text"
        placeholder="Escribe una Tarea"
        name="texto"
        value={input}
        onChange={manejarCambio}
      />

      {/* Botón para agregar la tarea */}
      <button className="tarea_boton">
        <i className="bi bi-plus-lg"></i>
      </button>
    </form>
  );
}

export default TareaFormulario;
