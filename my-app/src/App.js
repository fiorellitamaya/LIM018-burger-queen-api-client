
//import ReactDOM from 'react-dom/client';

import Login  from './paginas/login/login.jsx';
import Mesas  from "./paginas/mesas.jsx"
import Ordenes from './paginas/ordenes.jsx'
import Pedidos from './paginas/pedidos.jsx'
import OrdenesCh from './paginas/ordenesCh.jsx'
import Nav from "./Nav"
import './App.css';
import '../src/paginas/login/login.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"

//Navigate
function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mesas1" element={<Mesas />} />
        <Route path="/ordenes1" element={<Ordenes />} />
        <Route path="/pedidos1" element={<Pedidos />} />
        <Route path="/ordenesCh1" element={<OrdenesCh />} />
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
