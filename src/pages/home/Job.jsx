import React from 'react';

const categories = [
  { name: "businesses", color: "rgb(239, 68, 68)" },
  { name: "startups", color: "rgb(59, 130, 246)" },
  { name: "organizations", color: "rgb(34, 197, 94)" },
  { name: "shops", color: "rgb(168, 85, 247)" },
  { name: "portfolios", color: "rgb(249, 115, 22)" },
  { name: "enterprises", color: "rgb(236, 72, 153)" },
  { name: "agencies", color: "rgb(234, 179, 8)" },
  { name: "brands", color: "rgb(14, 165, 233)" },
  { name: "companies", color: "rgb(139, 92, 246)" },
  { name: "retailers", color: "rgb(45, 212, 191)" }
];

const Marquee = () => {
  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First set of categories */}
        <div className="flex">
          {[...categories, ...categories].map((category, index) => (
            <div
              key={index}
              className="px-6 py-3 mr-6 text-white font-bold rounded-lg"
              style={{ backgroundColor: category.color }}
            >
              {category.name}
            </div>
          ))}
        </div>
        
        {/* Second set of categories for continuous loop */}
        <div className="flex">
          {[...categories, ...categories].map((category, index) => (
            <div
              key={index}
              className="px-6 py-3 mr-6 text-white font-bold rounded-lg"
              style={{ backgroundColor: category.color }}
            >
              {category.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
