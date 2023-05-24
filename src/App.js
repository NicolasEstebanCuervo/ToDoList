import './App.css';
import ListaDeTareas from './Componentes/ListaDeTareas';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className='contenedor_principal'>
      <div className='sub_div_contenido_principal'>
        <h1>To-Do List</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
