import React from 'react';
import { Laptop, Github, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center">
          <a href="#home" className="flex items-center space-x-2 mb-6">
            <Laptop className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold">Abegail Hornilla</span>
          </a>
          
          <div className="flex space-x-6 mb-8">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          
          <p className="text-slate-400">
            &copy; {currentYear} Abegail Hornilla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;