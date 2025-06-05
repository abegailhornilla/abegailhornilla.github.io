import React from 'react';
import { Briefcase, GraduationCap, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title" data-aos="fade-up">About Me</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Get to know my background, experience, and what drives me.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-slate-600 mb-6">
              As a passionate computer engineering graduate, I've cultivated a diverse skill set 
              spanning cybersecurity, front-end development, and creative design. My journey 
              is defined by a constant pursuit of knowledge and a dedication to creating 
              meaningful digital experiences.
            </p>
            <p className="text-slate-600 mb-6">
              When I'm not coding or analyzing security vulnerabilities, you'll find me exploring 
              new places, attending tech seminars, enjoying concerts, gaming, or working out. 
              I believe in balancing technical expertise with creative expression and personal growth.
            </p>
            <p className="text-slate-600">
              I'm dedicated to growing professionally and connecting with like-minded people who 
              share my passion for innovation and technology.
            </p>
          </div>
          
          <div className="space-y-8" data-aos="fade-left">
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <GraduationCap className="text-blue-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Education</h4>
                  <div className="mb-2">
                    <p className="font-medium">Bachelor of Science in Computer Engineering</p>
                    <p className="text-slate-600">STI College</p>
                    <p className="text-slate-500 text-sm">2021–2025</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Briefcase className="text-blue-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Experience</h4>
                  <div className="mb-4">
                    <p className="font-medium">Internship</p>
                    <p className="text-slate-600">Sophie's Information Technology Inc. (SitesPhil, Inc.)</p>
                    <p className="text-slate-500 text-sm mb-2">Focus: VAPT, QA testing, and front-end development</p>
                  </div>
                  <div>
                    <p className="font-medium">Freelance Work</p>
                    <p className="text-slate-600">Photography, graphic arts, and UI design</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Heart className="text-blue-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Interests</h4>
                  <ul className="grid grid-cols-2 gap-2 text-slate-600">
                    <li>Self-reflection</li>
                    <li>Traveling</li>
                    <li>Gaming</li>
                    <li>Working out</li>
                    <li>Tech seminars</li>
                    <li>Concerts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;