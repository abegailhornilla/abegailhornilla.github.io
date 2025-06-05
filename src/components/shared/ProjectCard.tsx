import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, category, description, delay = 0 }) => {
  const [showModal, setShowModal] = useState(false);
  
  const categoryLabels: { [key: string]: string } = {
    cybersecurity: 'Cybersecurity',
    development: 'Development',
    qa: 'QA Testing',
    design: 'Design',
    photography: 'Photography'
  };

  return (
    <>
      <div 
        className="card overflow-hidden cursor-pointer"
        data-aos="fade-up"
        data-aos-delay={delay}
        onClick={() => setShowModal(true)}
      >
        <div className="h-60 overflow-hidden">
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-6">
          <div className="mb-2">
            <span className="text-xs font-medium px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
              {categoryLabels[category] || category}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-slate-600 line-clamp-2">{description}</p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto" onClick={e => e.stopPropagation()}>
            <div className="relative">
              <img 
                src={image}
                alt={title}
                className="w-full h-60 md:h-80 object-cover"
              />
              <button 
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-slate-100 transition-colors"
                onClick={() => setShowModal(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <span className="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
                  {categoryLabels[category] || category}
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">{title}</h3>
              <p className="text-slate-600 mb-6">{description}</p>
              <div className="flex justify-end">
                <button 
                  className="px-4 py-2 bg-slate-200 rounded-lg hover:bg-slate-300 transition-colors"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;