import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Use Link for routing

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle the scroll event
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Set up the scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Dynamic styling for the navbar (sticky effect)
  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    backgroundColor: isSticky ? 'rgba(255, 255, 255, 0.9)' : 'transparent', // Make background semi-transparent when sticky
    backdropFilter: isSticky ? 'blur(5px)' : 'none', // Add blur effect when sticky
    boxShadow: isSticky ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none', // Optional shadow effect for sticky navbar
    zIndex: 50, // Make sure navbar stays on top
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease', // Smooth transitions for background and shadow
  };

  return (
    <header style={navbarStyle}>
      <nav className="py-4 lg:px-14 px-4">
        <div className="flex justify-between items-center text-base gap-8">
          <Link to="/" className="text-2xl font-semibold flex items-center space-x-3">
            <img src="logo.png" alt="Logo" className="w-20 h-10 inline-block items-center" />
            <span className="text-[#263238]">FutureCent</span>
          </Link>

          <ul className="md:flex space-x-12 hidden">
            <Link to="/" className="text-gray-900 hover:text-red-500">Home</Link>
            <Link to="/services" className="text-gray-900 hover:text-red-500">Services</Link>
            <Link to="/about" className="text-gray-900 hover:text-red-500">About</Link>
            <Link to="/products" className="text-gray-900 hover:text-red-500">Products</Link>
            <Link to="/testimonial" className="text-gray-900 hover:text-red-500">Testimonial</Link>
            <Link to="/faq" className="text-gray-900 hover:text-red-500">FAQ</Link>
          </ul>

          {/* Auth Buttons for Desktop */}
          <div className="space-x-6 hidden lg:flex items-center">
            <Link to="/login" className="text-red-500 hover:text-gray-800">Login</Link>
            <Link to="/signup">
              <button className="bg-red-400 text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">
                Sign Up
              </button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-neutralDGrey">
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* Mobile Nav Items */}
        {isMenuOpen && (
          <div className="space-y-4 px-4 mt-4 py-7 bg-red-400 text-white md:hidden">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
            <Link to="/testimonial" onClick={() => setIsMenuOpen(false)}>Testimonial</Link>
            <Link to="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
            <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
