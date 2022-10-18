
//import ReactDOM from 'react-dom/client';

import login from './paginas/login.jsx';
import mesas  from "./paginas/mesas.jsx"
import ordenes from './paginas/ordenes.jsx'
import pedidos from './paginas/pedidos.jsx'
import ordenesCh from './paginas/ordenesCh.jsx'

import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"

//Navigate
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<login />} />
        <Route path="/mesas1" element={<mesas />} />
        <Route path="/ordenes1" element={<ordenes />} />
        <Route path="/pedidos1" element={<pedidos />} />
        <Route path="/ordenesCh1" element={<ordenesCh />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;



/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/