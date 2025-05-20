import React from 'react';
import { BookOpen, Users, GraduationCap, Award, Microscope, Calculator, Book, Globe } from 'lucide-react';

const Academics = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg"
          alt="Academic excellence"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-5xl md:text-7xl font-serif mb-6">
              Academic Excellence<br />& Innovation
            </h1>
            <p className="text-xl max-w-2xl">
              Discover our comprehensive academic programs designed to challenge and inspire students.
            </p>
          </div>
        </div>
      </div>

      {/* Departments */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-12">Academic Departments</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Calculator className="w-8 h-8" />,
                name: "Mathematics",
                description: "Advanced mathematics including calculus, statistics, and computer science."
              },
              {
                icon: <Microscope className="w-8 h-8" />,
                name: "Science",
                description: "Comprehensive programs in biology, chemistry, and physics with laboratory work."
              },
              {
                icon: <Book className="w-8 h-8" />,
                name: "English",
                description: "Literature studies, creative writing, and communication skills development."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                name: "Social Studies",
                description: "History, geography, and social sciences with emphasis on critical thinking."
              }
            ].map((dept, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="inline-block p-3 bg-blue-100 rounded-lg mb-4">
                  {dept.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{dept.name}</h3>
                <p className="text-gray-600">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Special Programs */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-serif mb-8">Special Programs</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Award className="w-6 h-6" />,
                    title: "Advanced Placement (AP)",
                    description: "College-level courses and exams for advanced students."
                  },
                  {
                    icon: <GraduationCap className="w-6 h-6" />,
                    title: "Honors Program",
                    description: "Accelerated learning opportunities for high-achieving students."
                  },
                  {
                    icon: <BookOpen className="w-6 h-6" />,
                    title: "STEM Focus",
                    description: "Enhanced science, technology, engineering, and mathematics education."
                  }
                ].map((program, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-white rounded-xl shadow-sm">
                    <div className="p-3 bg-blue-100 rounded-lg h-fit">
                      {program.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                      <p className="text-gray-600">{program.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] rounded-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/8617457/pexels-photo-8617457.jpeg"
                alt="Special programs"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Academic Support */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-12">Academic Support</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Tutorial Services",
                description: "One-on-one and group tutoring sessions available for all subjects."
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Study Skills Workshop",
                description: "Programs to develop effective study habits and time management skills."
              },
              {
                icon: <Book className="w-8 h-8" />,
                title: "Writing Center",
                description: "Support for academic writing and research paper development."
              }
            ].map((support, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="inline-block p-3 bg-blue-100 rounded-lg mb-4">
                  {support.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{support.title}</h3>
                <p className="text-gray-600">{support.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;