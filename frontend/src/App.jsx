import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Agenda from './pages/Agenda'
import ActividadDetalle from './pages/ActividadDetalle'
import Participar from './pages/Participar'
import AFavorDe from './pages/AFavorDe'
import Patrocinios from './pages/Patrocinios'
import About from './pages/About'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'
import PanelDatos from './pages/PanelDatos'

const App = () => (
    <BrowserRouter>
        <Header />
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/agenda' element={<Agenda />} />
                <Route path='/agenda/:id' element={<ActividadDetalle />} />
                <Route path='/participar' element={<Participar />} />
                <Route path='/participar/:id' element={<ActividadDetalle />} />
                <Route path='/a-favor-de' element={<AFavorDe />} />
                <Route path='/patrocinios' element={<Patrocinios />} />
                <Route path='/about' element={<About />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/panel-datos' element={<PanelDatos />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </main>
        <Footer />
    </BrowserRouter>
)

export default App
