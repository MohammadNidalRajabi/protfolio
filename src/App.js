import { useEffect } from 'react';
import './App.css';
import Aos from 'aos';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/UI/Hero';
import Services from './components/UI/Services';
import Protfolio from './components/UI/Protfolio';
import Contact from './components/UI/Contact';
function App() {
  useEffect(()=>{
    Aos.init();
  },[])
  return <>
  <Header />
  <main >
     <Hero />
     <Services />
     <Protfolio />
     <Contact />
  </main>
  <Footer />
  </>
}

export default App;
