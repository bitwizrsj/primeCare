import React from 'react';
import { BookOpen, Users, Trophy, Heart, Palette, Music, Globe, Code } from 'lucide-react';
import '../../../src/assets/common/shine.css';

const Services = () => {
  const services = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Academic Support",
      description: "Comprehensive academic support including tutoring, study groups, and learning resources.",
      image: "https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Counseling Services",
      description: "Personal and academic counseling to support student well-being and success.",
      image: "https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Athletics Program",
      description: "Competitive sports programs and physical education facilities.",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health education and wellness programs.",
      image: "https://images.pexels.com/photos/8613196/pexels-photo-8613196.jpeg"
    }
  ];

  const extraServices = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Arts & Culture",
      description: "Express creativity through visual arts, theater, and cultural programs."
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Music Program",
      description: "Band, choir, and individual instrument instruction."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "International Programs",
      description: "Exchange programs and international student support."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technology Services",
      description: "Modern computer labs and digital learning resources."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg"
          alt="School services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-5xl md:text-7xl font-serif mb-6">
              Empowering Students<br />Through Our Services
            </h1>
            <p className="text-xl max-w-2xl">
              Comprehensive support and enrichment programs to ensure every student's success.
            </p>
          </div>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shine">
              <div className="relative h-64">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <div className="text-white mb-3">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/80 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-12">Additional Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {extraServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="inline-block p-3 bg-blue-100 rounded-lg mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-serif mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Explore our services and find the support you need to succeed.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;