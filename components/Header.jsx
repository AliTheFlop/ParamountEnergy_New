'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Mail, Zap } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Zap className={`h-8 w-8 ${isScrolled ? 'text-blue-600' : 'text-yellow-400'}`} />
            <div className={`ml-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              <span className="font-bold text-xl block leading-none">Paramount</span>
              <span className="text-sm block leading-none">Energy Group</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-yellow-400'}`}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-yellow-400'}`}
            >
              Services
            </Link>
            <Link 
              href="/our-work" 
              className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-yellow-400'}`}
            >
              Our Work
            </Link>
            <Link 
              href="/contact" 
              className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-yellow-400'}`}
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              className={`${isScrolled ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'} px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all duration-300 flex items-center`}
            >
              <Mail className="h-4 w-4 mr-2" /> Get a Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-yellow-400'}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-yellow-400'}`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/our-work" 
                className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-yellow-400'}`}
                onClick={() => setIsOpen(false)}
              >
                Our Work
              </Link>
              <Link 
                href="/contact" 
                className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-yellow-400'}`}
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                href="/contact"
                className={`${isScrolled ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'} px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all duration-300 inline-flex items-center w-fit`}
                onClick={() => setIsOpen(false)}
              >
                <Mail className="h-4 w-4 mr-2" /> Get a Quote
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}