import React from 'react';
import { BookOpen, Users, GraduationCap, Palette } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
      title: 'Academic Programs',
      description: 'Comprehensive curriculum for all grades',
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg',
      title: 'Student Life',
      description: 'Rich extracurricular activities',
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/8471799/pexels-photo-8471799.jpeg',
      title: 'College Prep',
      description: 'Advanced placement and counseling',
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/8471834/pexels-photo-8471834.jpeg',
      title: 'Arts & Culture',
      description: 'Visual and performing arts programs',
      icon: <Palette className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-12">
          <h1 className="text-4xl md:text-5xl font-serif">
            Discover Our Programs<br />and Activities
          </h1>
          <p className="text-sm text-gray-600 max-w-xs text-right">
            EXPLORE OUR COMPREHENSIVE EDUCATIONAL PROGRAMS AND ENRICHING STUDENT ACTIVITIES
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="space-y-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="bg-white p-3 rounded-full">
                    {service.icon}
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl h-48">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                    PROGRAM
                  </span>
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