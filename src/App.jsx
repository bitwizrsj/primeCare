import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Academics from './pages/academics/Academics';
import News from './pages/news/News';
import Contact from './pages/contact/Contact';
import Admissions from './pages/admissions/Admissions';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admissions" element={<Admissions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;