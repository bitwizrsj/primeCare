import React from 'react';
import { Bus, BookOpen, Network, FileText } from 'lucide-react';

const ResourcesSection = () => {
  const resources = [
    {
      icon: <Bus size={36} className="text-gray-800" />,
      title: "Transportation Options for Students",
      description: "The Toronto Catholic District School Board (TCDSB) works with the Toronto Student Transportation Group (TSTG) to provide transportation for qualifying children.",
      link: "#"
    },
    {
      icon: <BookOpen size={36} className="text-gray-800" />,
      title: "Online School Library and Databases",
      description: "Access to academic journals, articles, and research papers is crucial for students' academic projects and assignments. Stay updated on the latest research trends.",
      link: "#"
    },
    {
      icon: <Network size={36} className="text-gray-800" />,
      title: "Tools for Writing and Research Online",
      description: "Enhance writing proficiency by refining language skills, meticulously ensuring grammatical accuracy, and meticulously detecting plagiarism through advanced online tools.",
      link: "#"
    },
    {
      icon: <FileText size={36} className="text-gray-800" />,
      title: "Career Exploration and Planning Tools",
      description: "Engage in exploration of various career options, conduct in-depth research into diverse industries, and strategically plan educational pursuits and career pathways.",
      link: "#"
    }
  ];

  return (
    <section className=" w-full p-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-12">
          Essential Resources<br />
          for Students
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 flex flex-col h-full"
            >
              <div className="mb-6">
                {resource.icon}
              </div>
              
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                {resource.title}
              </h3>
              
              <p className="text-gray-700 mb-6 flex-grow">
                {resource.description}
              </p>
              
              <div className="mt-auto">
                <a 
                  href={resource.link} 
                  className="inline-flex items-center text-sm font-medium text-gray-900"
                >
                  Learn More
                  <div className="ml-2 w-6 h-6 rounded-full border border-gray-900 flex items-center justify-center">
                    <svg 
                      className="w-3 h-3" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;