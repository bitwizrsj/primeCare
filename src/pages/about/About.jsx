import React from 'react';
import { Users, Award, BookOpen, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg"
          alt="School campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-5xl md:text-7xl font-serif mb-6">
              About St. Ignatius<br />College School
            </h1>
            <p className="text-xl max-w-2xl">
              Founded in 1925, we've been nurturing minds and shaping futures for nearly a century.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1925", label: "Founded" },
              { number: "15:1", label: "Student-Teacher Ratio" },
              { number: "98%", label: "College Acceptance" },
              { number: "50+", label: "Sports & Clubs" }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="inline-block p-3 bg-blue-100 rounded-lg mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional education that nurtures intellectual curiosity, fosters spiritual growth, and develops leadership skills for a life of service and excellence.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="inline-block p-3 bg-blue-100 rounded-lg mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be a leading educational institution that empowers students to become compassionate leaders and lifelong learners who positively impact their communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Academic Excellence",
                description: "Pursuing the highest standards of academic achievement and intellectual growth."
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Character Formation",
                description: "Developing moral integrity, ethical leadership, and personal responsibility."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Community Service",
                description: "Fostering a commitment to serving others and making a positive impact in society."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="inline-block p-3 bg-blue-100 rounded-lg mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Campus Life */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-12">Campus Life</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <img
              src="https://images.pexels.com/photos/8617742/pexels-photo-8617742.jpeg"
              alt="Students in library"
              className="rounded-xl shadow-lg h-64 object-cover"
            />
            <img
              src="https://images.pexels.com/photos/8617614/pexels-photo-8617614.jpeg"
              alt="Sports activities"
              className="rounded-xl shadow-lg h-64 object-cover"
            />
            <img
              src="https://images.pexels.com/photos/8617778/pexels-photo-8617778.jpeg"
              alt="Arts and culture"
              className="rounded-xl shadow-lg h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;