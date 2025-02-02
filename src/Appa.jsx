import React from 'react';
import { Calendar, Search } from 'lucide-react';

const MedicalLanding = () => {
  const specialties = [
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="p-6 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          <span className="font-bold text-xl">Medify</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600">Home</a>
          <a href="#" className="text-gray-600">Services</a>
          <a href="#" className="text-gray-600">Doctors</a>
          <button className="bg-blue-500 text-white p-2 rounded-full w-8 h-8 flex items-center justify-center">
            <span>≡</span>
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">EN</span>
          <button className="px-4 py-2">Login</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Register</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="inline-block bg-white rounded-2xl px-6 py-3 shadow-lg border">
              <p className="text-sm text-gray-800">WE PROVIDE A COMPREHENSIVE RANGE OF<br />MEDICAL SERVICES TO MEET<br />ALL YOUR HEALTHCARE NEEDS.</p>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex -space-x-3">
                <img src="/api/placeholder/32/32" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="/api/placeholder/32/32" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="/api/placeholder/32/32" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
              </div>
              <div>
                <span className="text-xl font-bold">125k+</span>
                <span className="text-gray-500 text-sm ml-2">TRUSTED USER</span>
              </div>
            </div>

            <div>
              <h1 className="text-5xl font-bold leading-tight">
                Trusted Specialist<br />
                for Every <span className="text-blue-500">Medical</span><br />
                Need
              </h1>
            </div>

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

          {/* Right Column */}
          <div className="relative">
            <div className="bg-gray-100 rounded-3xl p-8 relative h-[600px]">
              {/* Doctor Image */}
              <img src="/api/placeholder/400/500" alt="Doctor" className="w-full h-full object-cover rounded-2xl" />

              {/* Floating Cards */}
              <div className="absolute top-12 left-0 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-pink-100 p-2 rounded-lg">
                    <img src="/api/placeholder/24/24" alt="Orthopedics" className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Orthopedics</p>
                    <div className="flex -space-x-2">
                      <img src="/api/placeholder/24/24" alt="Doctor" className="w-6 h-6 rounded-full" />
                      <img src="/api/placeholder/24/24" alt="Doctor" className="w-6 h-6 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Message */}
              <div className="absolute top-4 right-4 bg-white p-3 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Live Message</span>
                </div>
              </div>

              {/* Eye Consulting */}
              <div className="absolute bottom-32 right-4 bg-white p-3 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <img src="/api/placeholder/32/32" alt="Eye" className="w-8 h-8 rounded-lg" />
                  <div>
                    <p className="text-sm font-medium">Eye Consulting</p>
                  </div>
                </div>
              </div>

              {/* Specialties */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-2 w-full px-4">
                {specialties.map((specialty, index) => (
                  <span key={index} className="px-4 py-2 bg-white rounded-full text-sm shadow-md">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
              <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicalLanding;