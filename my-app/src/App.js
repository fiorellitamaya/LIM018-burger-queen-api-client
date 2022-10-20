
//import ReactDOM from 'react-dom/client';

import Login  from './componentes/login.jsx';
import Mesas  from "./componentes/mesas.jsx"
import Ordenes from './componentes/ordenes.jsx'
import Pedidos from './componentes/pedidos.jsx'
import OrdenesCh from './componentes/ordenesCh.jsx'
import Nav from "./Nav"
import '../src/style/App.css';
import '../src/style/login.css';
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