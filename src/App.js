import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='tareas-lista-principal'>
        <h1>To-Do List</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
