import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: "blue" | "green" | "purple" | "orange";
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, color, delay = 0 }) => {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-emerald-100 text-emerald-600",
    purple: "bg-violet-100 text-violet-600",
    orange: "bg-orange-100 text-orange-600"
  };
  
  const hoverClasses = {
    blue: "group-hover:bg-blue-600 group-hover:text-white",
    green: "group-hover:bg-emerald-600 group-hover:text-white",
    purple: "group-hover:bg-violet-600 group-hover:text-white",
    orange: "group-hover:bg-orange-600 group-hover:text-white"
  };

  return (
    <div 
      className="card p-6 group cursor-pointer h-full"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${colorClasses[color]} ${hoverClasses[color]}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

export default ServiceCard;