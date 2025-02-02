import React from 'react';


const Navbar = () => {

  return (
    <nav className="px-6 py-4 mt-6 max-w-7xl mx-auto flex items-center justify-between bg-blue-200 rounded-full">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          <span className="font-bold text-xl">Medify</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600">Home</a>
          <a href="#" className="text-gray-600">Services</a>
          <a href="#" className="text-gray-600">Doctors</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600">EN</button>
          <button className="px-4 py-2">Login</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Register</button>
        </div>
      </nav>
  );
};

export default Navbar;