import { useState } from 'react'
import MainSection from './components/Hero'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <MainSection />
      <Footer />
    </>
  )
}

export default App
