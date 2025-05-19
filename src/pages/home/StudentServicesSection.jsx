import React from 'react';

const StudentServicesSection = () => {
  const services = [
    {
      title: "Academic Counselling",
      image: "https://img.freepik.com/free-vector/hand-drawn-speech-therapy-illustration_23-2149211795.jpg?t=st=1741929529~exp=1741933129~hmac=eff304c989b0eb691a28c2541dba1a4d666d85bebc891bfabcc8ae19b0465b7b&w=996",
      description: "Counsellors provide individual and group support in the areas of course selection, pathway planning, post secondary applications, scholarships, and access to study supports and peer tutoring."
    },
    {
      title: "Personal Counselling",
      image: "/api/placeholder/600/400",
      description: "Provides support and resiliency skills to manage stress, anxiety, relationships and personal decision making. Students may also be connected to our Child and Youth Care staff, Social Worker, or Psychologists."
    },
    {
      title: "Resources and Information",
      image: "/api/placeholder/600/400",
      description: "Designed to support and enhance the learning journey of our students, this invaluable platform provides easy access to a wide range of educational materials, helpful guides, research databases, and interactive tools."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900">
            Comprehensive<br />
            Student Services
          </h2>
          <a 
            href="#" 
            className="hidden sm:inline-flex items-center px-6 py-2 border border-gray-900 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-50"
          >
            Learn More
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col h-full overflow-hidden"
            >
              <div className="relative w-full h-60 md:h-72 lg:h-80 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-medium text-white mb-2">
                    {service.title}
                  </h3>
                  <div className="w-12 h-1 bg-white"></div>
                </div>
              </div>
              
              <div className="p-6 bg-white flex-grow">
                <p className="text-gray-700">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 sm:hidden flex justify-center">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-2 border border-gray-900 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-50"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default StudentServicesSection;