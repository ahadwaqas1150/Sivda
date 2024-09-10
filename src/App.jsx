import './App.css'
import HeroSection from './components/HeroSection'
import NavBar from './components/Navbar'
import Hero from "./Hero";
import Section2 from "./Section2";
import Section1 from "./Section1";
import Testimonials from './Testimonials';
import Footer  from "./Footer" ;

function App() {

  return (
    <>
      <NavBar/>
      <HeroSection/>
      <Hero/>
      <Section1/>
      <Section2/>
      <Testimonials/>
    </>
  )
}

export default App
