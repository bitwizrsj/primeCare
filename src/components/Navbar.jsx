import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleAcademics = () => {
    setIsAcademicsOpen(!isAcademicsOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-300 fixed top-0 w-full z-10">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-xl leading-tight text-gray-900">
                <div>St. Ignatius</div>
                <div>College School</div>
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <div className="ml-6 flex space-x-8">
              <Link
                to="/about"
                className={`text-gray-900 inline-flex items-center px-1 pt-1 text-base hover:text-gray-600 transition-colors ${
                  location.pathname === '/about' ? 'border-b-2 border-blue-600' : ''
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`text-gray-900 inline-flex items-center px-1 pt-1 text-base hover:text-gray-600 transition-colors ${
                  location.pathname === '/services' ? 'border-b-2 border-blue-600' : ''
                }`}
              >
                Services
              </Link>
              <Link
                to="/admissions"
                className={`text-gray-900 inline-flex items-center px-1 pt-1 text-base hover:text-gray-600 transition-colors ${
                  location.pathname === '/admissions' ? 'border-b-2 border-blue-600' : ''
                }`}
              >
                Admissions
              </Link>
              <div className="relative">
                <button
                  type="button"
                  className={`text-gray-900 group inline-flex items-center px-1 pt-1 text-base hover:text-gray-600 transition-colors ${
                    location.pathname === '/academics' ? 'border-b-2 border-blue-600' : ''
                  }`}
                  onClick={toggleAcademics}
                >
                  Academics
                  <svg
                    className={`ml-2 h-5 w-5 transition-transform duration-200 ${isAcademicsOpen ? 'transform rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isAcademicsOpen && (
                  <div className="absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <Link
                        to="/academics"
                        className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Departments
                      </Link>
                      <Link
                        to="/academics"
                        className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Advanced Placement Program
                      </Link>
                      <Link
                        to="/academics"
                        className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Safe Schools Program
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link
                to="/news"
                className={`text-gray-900 inline-flex items-center px-1 pt-1 text-base hover:text-gray-600 transition-colors ${
                  location.pathname === '/news' ? 'border-b-2 border-blue-600' : ''
                }`}
              >
                News & Events
              </Link>
              <Link
                to="/contact"
                className={`text-gray-900 inline-flex items-center px-1 pt-1 text-base hover:text-gray-600 transition-colors ${
                  location.pathname === '/contact' ? 'border-b-2 border-blue-600' : ''
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <Link
            to="/about"
            className="block py-2 px-4 text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            About
          </Link>
          <Link
            to="/services"
            className="block py-2 px-4 text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            Services
          </Link>
          <Link
            to="/admissions"
            className="block py-2 px-4 text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            Admissions
          </Link>
          
          {/* Mobile academics dropdown */}
          <div>
            <button 
              onClick={toggleAcademics} 
              className="flex justify-between w-full py-2 px-4 text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Academics
              <svg
                className={`ml-2 h-5 w-5 transition-transform duration-200 ${isAcademicsOpen ? 'transform rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isAcademicsOpen && (
              <div className="pl-6 bg-gray-50">
                <Link
                  to="/academics"
                  className="block py-2 px-4 text-base text-gray-700 hover:bg-gray-100"
                >
                  Departments
                </Link>
                <Link
                  to="/academics"
                  className="block py-2 px-4 text-base text-gray-700 hover:bg-gray-100"
                >
                  Advanced Placement Program
                </Link>
                <Link
                  to="/academics"
                  className="block py-2 px-4 text-base text-gray-700 hover:bg-gray-100"
                >
                  Safe Schools Program
                </Link>
              </div>
            )}
          </div>
          
          <Link
            to="/news"
            className="block py-2 px-4 text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            News & Events
          </Link>
          <Link
            to="/contact"
            className="block py-2 px-4 text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;