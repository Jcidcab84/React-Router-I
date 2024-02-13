import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Contacto from './pages/Contacto'
import './App.css'


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />}></Route>
        <Route path="/Contacto" element = {<Contacto />}></Route>
      </Routes>
    </>
  )
}

export default App
