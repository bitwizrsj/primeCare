import React from 'react';
import imag from '../../assets/common/pattern.jpg';

export default function Hero2() {
  return (
    <div className='h-screen w-full flex  p-16 overflow-hidden'>
      <div className='bg-yellow-200 h-full w-full  flex flex-col overflow-hidden'>
        <div className='p-16'><p className='text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 leading-tight mb-6 '>
          Join Our Welcoming Community <br />
          through St. Ignatius College <br />
          School Admissions
        </p>
<div>
            <a
          href="#"
          className="px-12 py-6 text-center w-48 rounded-full flex items-center gap-2 bg-black text-white font-medium hover:bg-gray-900 transition-colors"
        >Learn More
          </a>
        </div>
        </div>
        

        

        <div className="w-full">
  <img src={imag} alt="Pattern" className="w-full h-auto" />
</div>


        
        
      </div>
    </div>
  );
}
