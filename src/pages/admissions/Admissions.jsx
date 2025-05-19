import React from 'react';
import { CheckCircle, Calendar, FileText, Users } from 'lucide-react';

const Admissions = () => {
  const admissionSteps = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Submit Application",
      description: "Complete the online application form with all required documentation."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Schedule Interview",
      description: "Book an interview with our admissions team."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Campus Visit",
      description: "Tour our campus and meet faculty members."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Decision",
      description: "Receive admission decision within 2-3 weeks."
    }
  ];

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-20">
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">
            Join Our Community
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Begin your journey at St. Ignatius College School. We welcome students who are passionate about learning and ready to contribute to our diverse community.
          </p>
        </div>

        {/* Admission Process */}
        <div className="py-12">
          <h2 className="text-3xl font-serif text-gray-900 mb-8">Admission Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="text-blue-600 mb-4">{step.icon}</div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="py-12">
          <h2 className="text-3xl font-serif text-gray-900 mb-8">Requirements</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Completed application form</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Academic transcripts from previous two years</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Two teacher recommendations</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Student essay</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Application fee</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Important Dates */}
        <div className="py-12">
          <h2 className="text-3xl font-serif text-gray-900 mb-8">Important Dates</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                date: "December 15",
                event: "Early Decision Deadline",
                description: "For priority consideration and early notification."
              },
              {
                date: "January 31",
                event: "Regular Decision Deadline",
                description: "Final deadline for fall semester applications."
              },
              {
                date: "March 15",
                event: "Decision Notifications",
                description: "All applicants notified of admission decisions."
              }
            ].map((date, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="text-blue-600 font-medium mb-2">{date.date}</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{date.event}</h3>
                <p className="text-gray-600">{date.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="py-12">
          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-serif text-gray-900 mb-4">Ready to Apply?</h2>
            <p className="text-gray-600 mb-6">
              Take the first step towards joining our community.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Start Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;