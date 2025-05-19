import React from 'react';

const About = () => {
  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-20">
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">
            About St. Ignatius<br />College School
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Founded in 1925, St. Ignatius College School has been a beacon of academic excellence and character development for nearly a century.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 py-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-serif text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide exceptional education that nurtures intellectual curiosity, fosters spiritual growth, and develops leadership skills for a life of service and excellence.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-serif text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be a leading educational institution that empowers students to become compassionate leaders and lifelong learners who positively impact their communities.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="py-12">
          <h2 className="text-3xl font-serif text-gray-900 mb-8">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Academic Excellence",
                description: "Pursuing the highest standards of academic achievement and intellectual growth."
              },
              {
                title: "Character Formation",
                description: "Developing moral integrity, ethical leadership, and personal responsibility."
              },
              {
                title: "Community Service",
                description: "Fostering a commitment to serving others and making a positive impact in society."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-medium text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* History Timeline */}
        <div className="py-12">
          <h2 className="text-3xl font-serif text-gray-900 mb-8">Our History</h2>
          <div className="space-y-8">
            {[
              {
                year: "1925",
                title: "Foundation",
                description: "St. Ignatius College School was established with a vision for excellence in education."
              },
              {
                year: "1950",
                title: "Campus Expansion",
                description: "Major expansion of facilities including new academic buildings and sports facilities."
              },
              {
                year: "1975",
                title: "Golden Jubilee",
                description: "Celebrated 50 years of educational excellence and community impact."
              },
              {
                year: "2000",
                title: "Modern Era",
                description: "Integration of technology and modern teaching methodologies."
              }
            ].map((event, index) => (
              <div key={index} className="flex gap-8">
                <div className="w-24 flex-shrink-0">
                  <span className="text-xl font-bold text-blue-600">{event.year}</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;