import React from 'react';

const Academics = () => {
  const departments = [
    {
      name: "Mathematics",
      description: "Advanced mathematics curriculum including calculus, statistics, and computer science."
    },
    {
      name: "Science",
      description: "Comprehensive science programs in biology, chemistry, and physics with laboratory work."
    },
    {
      name: "English",
      description: "Literature studies, creative writing, and communication skills development."
    },
    {
      name: "Social Studies",
      description: "History, geography, and social sciences with emphasis on critical thinking."
    }
  ];

  const programs = [
    {
      title: "Advanced Placement (AP)",
      description: "College-level courses and exams for advanced students."
    },
    {
      title: "Honors Program",
      description: "Accelerated learning opportunities for high-achieving students."
    },
    {
      title: "STEM Focus",
      description: "Enhanced science, technology, engineering, and mathematics education."
    }
  ];

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-20">
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">
            Academic Excellence<br />& Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Our rigorous academic programs prepare students for success in college and beyond through challenging coursework and innovative teaching methods.
          </p>
        </div>

        {/* Departments */}
        <div className="py-12">
          <h2 className="text-3xl font-serif text-gray-900 mb-8">Academic Departments</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 mb-3">{dept.name}</h3>
                <p className="text-gray-600">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Programs */}
        <div className="py-12">
          <h2 className="text-3xl font-serif text-gray-900 mb-8">Special Programs</h2>
          <div className="space-y-6">
            {programs.map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-medium text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Support */}
        <div className="py-12">
          <h2 className="text-3xl font-serif text-gray-900 mb-8">Academic Support</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Tutorial Services",
                description: "One-on-one and group tutoring sessions available for all subjects."
              },
              {
                title: "Study Skills Workshop",
                description: "Programs to develop effective study habits and time management skills."
              },
              {
                title: "Writing Center",
                description: "Support for academic writing and research paper development."
              }
            ].map((support, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 mb-3">{support.title}</h3>
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