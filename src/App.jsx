import React from 'react';
import { 
  Activity,
  Facebook, 
  Instagram, 
  Linkedin, 
  Mail,
  Twitter
} from 'lucide-react';
import Navbar from './components/Navbar';
import HeroSection from './pages/home/Hero';
import Hero2 from './pages/home/Hero2';
import ResourcesSection from './pages/home/ResourcesSection';
import StudentServicesSection from './pages/home/StudentServicesSection';
import InfiniteImageScroll from './pages/home/InfiniteImageScroll';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />
      <HeroSection />
      <Hero2 />
    <ResourcesSection />
    <StudentServicesSection />
    <InfiniteImageScroll />
      

    </div>
  );
}

export default App;