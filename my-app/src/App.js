
//import ReactDOM from 'react-dom/client';

import Login  from './components/login.jsx';
import Mesas  from "./components/mesas.jsx"
import Ordenes from './components/ordenes.jsx'
import Pedidos from './components/pedidos.jsx'
import OrdenesCh from './components/ordenesCh.jsx'
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