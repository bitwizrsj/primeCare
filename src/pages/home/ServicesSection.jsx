import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ServicesSection = () => {
    const services = [
        {
          id: 1,
          image: 'https://image.freepik.com/free-photo/dental-care-treatment-dentist-chair_1150-15674.jpg', // Dental Care Image
          title: 'Dental Care',
          description: 'Advanced dental treatments and care',
        },
        {
          id: 2,
          image: 'https://image.freepik.com/free-photo/laboratory-with-microscope-and-research-sample_1150-15155.jpg', // Laboratory Image
          title: 'Laboratory',
          description: 'State-of-the-art medical testing',
        },
        {
          id: 3,
          image: 'https://image.freepik.com/free-photo/advanced-medical-imaging-modern-clinic_1150-16647.jpg', // Diagnostics Image
          title: 'Diagnostics',
          description: 'Advanced medical imaging',
        },
        {
          id: 4,
          image: 'https://image.freepik.com/free-photo/scientists-researching-medical-lab_1150-27404.jpg', // Research Image
          title: 'Research',
          description: 'Cutting-edge medical research',
        }
      ];
      
      

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-12">
          <h1 className="text-4xl md:text-5xl font-bold max-w-xl">
            Feel free to explore our services & join with us
          </h1>
          <p className="text-sm text-gray-600 max-w-xs text-right">
            FEEL TO EXPLORE OUR SERVICES AND JOIN WITH OUR COMMUNITY AND ENJOY YOUR LIFE BETTER EXPERIENCE.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={service.id} className="space-y-4">
              {/* Service Card */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-blue-50">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                {index === 0 && (
                  <button className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full flex items-center gap-2 text-sm">
                    Learn More
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Service Info Card */}
              <div className="bg-blue-50 p-6 rounded-3xl h-48">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-4 py-2 bg-white rounded-full text-sm">
                    SERVICES
                  </span>
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;