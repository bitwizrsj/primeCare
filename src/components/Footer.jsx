import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">St. Ignatius College School</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                1234 School Street, Toronto, ON
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                (416) 555-0123
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                info@stignatius.edu
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-blue-400">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-blue-400">Admissions</Link></li>
              <li><Link to="/news" className="hover:text-blue-400">News & Events</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Student Portal</a></li>
              <li><a href="#" className="hover:text-blue-400">Parent Portal</a></li>
              <li><a href="#" className="hover:text-blue-400">Library</a></li>
              <li><a href="#" className="hover:text-blue-400">Calendar</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="font-bold mb-2">Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 bg-gray-800 rounded-lg text-white placeholder-gray-400 flex-grow"
                />
                <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 St. Ignatius College School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;