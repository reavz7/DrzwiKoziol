import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import WhyUsSection from '../components/WhyUsSection'
import './App.css'
import ContactSection from '../components/ContactSection'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero/>
      <WhyUsSection />
      <ContactSection />
      <Footer/>
    </>
  )
}

export default App
