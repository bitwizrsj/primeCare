import React from 'react';
import { BookOpen, Users, Trophy, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Academic Support",
      description: "Comprehensive academic support including tutoring, study groups, and learning resources."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Counseling Services",
      description: "Personal and academic counseling to support student well-being and success."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Athletics Program",
      description: "Competitive sports programs and physical education facilities."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health Services",
      description: "On-campus health care and wellness programs for students."
    }
  ];

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-20">
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">
            Student Services &<br />Support Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            We provide comprehensive support services to ensure every student's success and well-being throughout their academic journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Support Programs */}
        <div className="py-12">
          <h2 className="text-3xl font-serif text-gray-900 mb-8">Support Programs</h2>
          <div className="space-y-8">
            {[
              {
                title: "Learning Resource Center",
                description: "Access to study materials, research resources, and academic databases."
              },
              {
                title: "Career Development",
                description: "Career counseling, job search assistance, and internship opportunities."
              },
              {
                title: "Technology Support",
                description: "IT help desk and technology resources for students."
              }
            ].map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-medium text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;