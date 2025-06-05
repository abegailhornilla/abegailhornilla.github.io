import React from 'react';
import { Code, Shield, TestTube, Palette } from 'lucide-react';
import ServiceCard from './shared/ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Front-End Development & UI/UX Design",
      description: "Creating responsive, intuitive, and visually appealing web interfaces that enhance user experience and drive engagement.",
      color: "blue"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity: VAPT & Web App Security",
      description: "Identifying vulnerabilities and providing security assessments to protect your applications against potential threats.",
      color: "green"
    },
    {
      icon: <TestTube className="h-8 w-8" />,
      title: "Quality Assurance & Testing",
      description: "Ensuring software quality through comprehensive testing strategies, test case development, and automation.",
      color: "purple"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Creative Services",
      description: "Photography, graphic design, and UI prototyping services that bring your ideas to life with aesthetic appeal.",
      color: "orange"
    }
  ];

  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title" data-aos="fade-up">Services I Offer</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Professional services tailored to meet your technical and creative needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;