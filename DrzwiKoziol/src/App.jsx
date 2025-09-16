import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../utils/ScrollToTop'
// Strony
import Home from '../pages/Home'
import Oferta from '../pages/Oferta'
import Realizacje from '../pages/Realizacje'
import Kontakt from '../pages/Kontakt'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop />   {/* <<< dodane tutaj */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/oferta" element={<Oferta />} />
            <Route path="/realizacje" element={<Realizacje />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
