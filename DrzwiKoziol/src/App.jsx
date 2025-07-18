import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Komponenty stron
import Home from '../pages/Home'
import Oferta from '../pages/Oferta'
import Realizacje from '../pages/Realizacje'
import Onas from '../pages/Onas'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
        <Navbar />  
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/oferta" element={<Oferta />} />
            <Route path="/realizacje" element={<Realizacje />} />
            <Route path="/o-nas" element={<Onas/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App