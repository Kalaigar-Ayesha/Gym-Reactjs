import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Products from './components/Products';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Login from './components/Login'; 
import SignUp from './components/SignUp';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Route for the main home page */}
        <Route path="/" element={<Home />} />

        {/* Routes for other components */}
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/faq" element={<FAQ />} />
        
        {/* Routes for login and signup */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
