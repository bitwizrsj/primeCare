import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';

const MedicalInsight = () => {
  return (
    <div className="py-20 bg-gray-50 p-8 flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        {/* Left Card - Image Section */}
        <div className="relative w-full md:w-80 aspect-square rounded-3xl overflow-hidden">
          {/* Main Image */}
          <img 
            src="https://img.freepik.com/free-photo/man-woman-take-blood-analysis_1157-41926.jpg?t=st=1738086158~exp=1738089758~hmac=622a3c56a7afeb6cabd29d14cac00d7644d65db91b8c364c0e9c454f7e5c083d&w=360"
            alt="Medical Professional" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Middle Card - Insight Section */}
        <div className="bg-blue-50 p-6 rounded-3xl w-full md:w-80 aspect-square flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-2 mb-8">
            <span className="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm">
              INSIGHT
            </span>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <Plus className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Date */}
          <div className="text-gray-600 mb-8">
            30/11/2024
          </div>

          {/* Text */}
          <h2 className="text-2xl font-semibold">
            We are here to support your health
          </h2>
        </div>

        {/* Right Section - Main Content */}
        <div className="w-full md:w-1/2">
          {/* About Us Tag */}
          <div className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full text-sm mb-6">
            About us
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
            Our team of highly trained{' '}
            <span className="text-blue-500">medical</span> professionals is here to provide the best possible care.
          </h1>

          {/* Learn More Button */}
          <button className="flex items-center gap-2 border rounded-full px-6 py-3 hover:bg-gray-50 transition-colors">
            LERN MORE
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalInsight;