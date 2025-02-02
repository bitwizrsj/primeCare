import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CareerCTASection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-blue-50 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm">
                  JOIN OUR TEAM
                </span>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-blue-500" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold">
                Want to be part of our medical team?
              </h2>
              
              <p className="text-gray-600">
                Join our team of dedicated healthcare professionals and make a difference in people's lives. We offer exciting opportunities for growth and development.
              </p>
              
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                Explore Careers
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img 
                src="/api/placeholder/600/450"
                alt="Medical Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <img
                        key={i}
                        src={`/api/placeholder/32/32`}
                        alt={`Team member ${i}`}
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <p className="text-sm font-medium">
                    Join our growing team of 60+ healthcare professionals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCTASection;