import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20">
      <div 
        className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 to-slate-100"
        aria-hidden="true"
      />
      
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm <span className="text-blue-600">Abegail Hornilla</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-slate-700 mb-6">
              Merging Creativity & Technology to Build Digital Futures.
            </p>
            <p className="text-slate-600 mb-8 max-w-lg">
              A dedicated computer engineering graduate with a passion for innovation, cybersecurity, and creative development. I strive to bring both functionality and elegance to every digital solution I craft.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a href="#portfolio" className="btn btn-outline">
                View My Work
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Abegail Hornilla"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-500 opacity-10 -top-3 -left-3"></div>
              <div className="absolute -z-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-600 opacity-10 -bottom-3 -right-3"></div>
            </div>
          </div>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-slate-500 hover:text-blue-600 transition-colors"
        aria-label="Scroll to About section"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;