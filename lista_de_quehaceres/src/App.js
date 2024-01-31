
import { useState } from 'react';
import './App.css';
import Formulario from './componentes/Formulario/Formulario';
import Lista from './componentes/lista/lista';

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
    <Formulario setTasks= {setTasks} />
    <Lista tasks= {tasks} setTasks = {setTasks} />
    </div>
  );
}

export default App;
