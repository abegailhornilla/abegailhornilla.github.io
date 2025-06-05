import React, { useState } from 'react';
import ProjectCard from './shared/ProjectCard';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Web Application Security Assessment",
      category: "cybersecurity",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Comprehensive vulnerability assessment and penetration testing for client web applications during my internship."
    },
    {
      id: 2,
      title: "E-commerce Website Redesign",
      category: "development",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Front-end development and UI overhaul for an e-commerce platform, focusing on user experience and conversion optimization."
    },
    {
      id: 3,
      title: "Automated QA Testing Framework",
      category: "qa",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Developed and implemented an automated testing framework using Selenium and TestRail for a client application."
    },
    {
      id: 4,
      title: "Tech Conference Branding",
      category: "design",
      image: "https://images.pexels.com/photos/7256772/pexels-photo-7256772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Complete branding package including logo design, event materials, and digital assets for a technology conference."
    },
    {
      id: 5,
      title: "Portfolio Photography",
      category: "photography",
      image: "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Professional portrait and product photography services for creative professionals and small businesses."
    },
    {
      id: 6,
      title: "Mobile App UI Design",
      category: "design",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "User interface design for a fitness tracking mobile application, including wireframes and interactive prototypes."
    }
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'development', label: 'Development' },
    { id: 'qa', label: 'QA Testing' },
    { id: 'design', label: 'Design' },
    { id: 'photography', label: 'Photography' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section bg-slate-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title" data-aos="fade-up">My Portfolio</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Showcasing my projects, designs, and creative work.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeFilter === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-700 hover:bg-blue-50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              category={project.category}
              description={project.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;