import React from 'react';
import { Users, Calendar, Search, ArrowRight, Plus  } from 'lucide-react';
import Navbar from '../../components/Navbar';

const MedicalLanding = () => {
  const specialties = [
    'Orthopedics',
    'Cardiologist',
    'Neurologist',
    'Dermatologist',
    'Dental Care'
  ];

  const stats = [
    { value: '30M+', label: 'Global Users' },
    { value: '30%', label: 'Upto Savings rate' },
    { value: '$100M', label: 'Capital raised' },
    { value: '60+', label: 'Team Members' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            

            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full"></div>
                <div className="w-8 h-8 bg-blue-300 rounded-full"></div>
                <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
              </div>
              <span className="text-xl font-bold">125k+</span>
              <span className="text-gray-600">TRUSTED USER</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Trusted Specialist<br />
              for Every <span className="text-blue-500">Medical</span><br />
              Need
            </h1>

            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full">
                <Calendar className="w-5 h-5" />
                <span>Schedule an Appointment</span>
              </button>
              <button className="flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-full">
                <Search className="w-5 h-5" />
                <span>Find Doctor</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-blue-100 rounded-lg p-8">
              {/* Doctor Image Placeholder */}
              <div className="w-full h-96 bg-gray-200 rounded-lg"></div>

              {/* Floating Cards */}
              <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-pink-200 rounded-full"></div>
                  <span>Orthopedics</span>
                </div>
              </div>

              {/* Specialty Pills */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-2">
                {specialties.map((specialty, index) => (
                  <span key={index} className="px-4 py-2 bg-white rounded-full text-sm">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 max-w-7xl md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicalLanding;