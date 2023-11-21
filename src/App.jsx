// estilos
import './App.css'

// módulos
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// componentes
import Navbar from './components/Navbar'

// páginas
import First from './pages/First'
import Second from './pages/Second'
import Third from './pages/Third'

function App() {
  return (
    <>
      <h1>Título</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<First />} />
          <Route path='/second' element={<Second />} />
          <Route path='/third' element={<Third />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
