import React from 'react';
import ProgressBar from './shared/ProgressBar';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Front-End Development",
      skills: [
        { name: "HTML", percentage: 90 },
        { name: "CSS", percentage: 90 },
        { name: "JavaScript", percentage: 80 },
        { name: "Angular", percentage: 80 }
      ]
    },
    {
      title: "Cybersecurity",
      skills: [
        { name: "Nmap", percentage: 60 },
        { name: "OWASP Zap", percentage: 95 },
        { name: "Burp Suite", percentage: 75 },
        { name: "Wireshark", percentage: 90 },
        { name: "Metasploit", percentage: 60 }
      ]
    },
    {
      title: "Programming",
      skills: [
        { name: "Python", percentage: 80 },
        { name: "Java", percentage: 70 },
        { name: "C++", percentage: 60 }
      ]
    },
    {
      title: "Quality Assurance",
      skills: [
        { name: "TestRail/Test Cases", percentage: 95 },
        { name: "Selenium", percentage: 90 },
        { name: "Postman", percentage: 70 },
        { name: "JIRA", percentage: 70 },
        { name: "JMeter", percentage: 70 },
        { name: "Jenkins", percentage: 70 },
        { name: "SDLC/STLC", percentage: 95 }
      ]
    },
    {
      title: "Creative Tools",
      skills: [
        { name: "Adobe Suite", percentage: 95 },
        { name: "AutoCAD", percentage: 80 },
        { name: "Microsoft 365", percentage: 95 },
        { name: "Canva", percentage: 96 },
        { name: "Figma", percentage: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-slate-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title" data-aos="fade-up">My Skills</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            A comprehensive overview of my technical expertise and capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="card p-8"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold mb-6 text-blue-600">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-slate-500">{skill.percentage}%</span>
                    </div>
                    <ProgressBar percentage={skill.percentage} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;