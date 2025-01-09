
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Products from './components/Products';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
function App() {
 
  return (
    <>
     <Navbar/>
     <Home/>
     <Services/>
     <About/>
     <Products/>
     <Testimonial/>
     <FAQ/>
     <Footer/>
   </>
  )
}

export default App
