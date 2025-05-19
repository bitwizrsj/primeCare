import React from 'react';

const News = () => {
  const newsItems = [
    {
      date: "March 15, 2024",
      title: "Annual Science Fair Winners Announced",
      category: "Academic Achievement",
      description: "Students showcase innovative projects at this year's science fair, with exceptional projects in environmental science and technology."
    },
    {
      date: "March 10, 2024",
      title: "Basketball Team Advances to State Finals",
      category: "Sports",
      description: "Our varsity basketball team secures a spot in the state championship after an impressive victory in the semifinals."
    },
    {
      date: "March 5, 2024",
      title: "New STEM Lab Opening Ceremony",
      category: "Campus News",
      description: "State-of-the-art STEM laboratory facility opens to enhance student learning in science and technology."
    }
  ];

  const upcomingEvents = [
    {
      date: "March 20, 2024",
      title: "Parent-Teacher Conference",
      time: "2:00 PM - 6:00 PM"
    },
    {
      date: "March 25, 2024",
      title: "Spring Concert",
      time: "7:00 PM"
    },
    {
      date: "April 1, 2024",
      title: "College Fair",
      time: "9:00 AM - 3:00 PM"
    }
  ];

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-20">
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">
            News & Events
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Stay updated with the latest news, achievements, and upcoming events at St. Ignatius College School.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* News Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif text-gray-900 mb-8">Latest News</h2>
            <div className="space-y-8">
              {newsItems.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <a href="#" className="inline-block mt-4 text-blue-600 hover:text-blue-800">
                    Read more →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Events Sidebar */}
          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-8">Upcoming Events</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                    <div className="text-sm text-blue-600 mb-1">{event.date}</div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">{event.title}</h3>
                    <div className="text-sm text-gray-500">{event.time}</div>
                  </div>
                ))}
              </div>
              <a
                href="#"
                className="block text-center mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View All Events
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;