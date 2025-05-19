import React from 'react';
import imag from '../../assets/common/image.png';

const HeroSection = () => {
  return (
    <div className="relative w-full bg-gray-50 pt-24 h-screen flex justify-center items-center">
      {/* Hero container */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-16 h-full w-full">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left content */}
          <div className="lg:w-1/2 flex flex-col justify-center pr-0 lg:pr-8 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 leading-tight mb-6">
              Empowering<br />
              Minds, Inspiring<br />
              Futures
            </h1>
            <p className="text-lg text-gray-700 max-w-lg mb-8">
              Welcome to St. Ignatius College School! Get ready for another year of learning and growing together. We're excited to have you here!
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="px-12 py-6 h-20 rounded-full flex items-center gap-2 bg-black text-white font-medium  hover:bg-gray-900 transition-colors">
                About School
              </a>
              <a href="#" className="px-12 py-6 h-20 rounded-full flex items-center gap-2 bg-white text-black font-medium  hover:bg-white-100 transition-colors border border-gray-300">
                Contact Us
              </a>
            </div>
          </div>

          {/* Right content - full-height image */}
          <div className="lg:w-1/2 relative h-full">
            <img 
              src={imag}
              alt="Student in school hallway" 
              className="w-full h-full object-cover"
            />

            {/* Event card overlay */}
            <div className="absolute bottom-8 left-0 lg:-left-8 max-w-sm bg-yellow-200 p-6 rounded-sm shadow-md">
              <div className="text-sm font-medium text-gray-700 mb-2">Mar 3</div>
              <h3 className="text-2xl font-serif text-gray-900 mb-6">
                PA Day for Elementary and Secondary Schools
              </h3>
              <a href="#" className="inline-flex items-center text-sm font-medium text-gray-900">
                Discover Event
                <svg 
                  className="ml-2 w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
