import React, { useEffect, useRef, useState } from 'react';

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  const [animate, setAnimate] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (progressRef.current) {
      observer.observe(progressRef.current);
    }
    
    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden" ref={progressRef}>
      <div 
        className={`h-full bg-blue-600 rounded-full ${animate ? 'progress-bar-animate' : ''}`} 
        style={{ 
          width: animate ? `${percentage}%` : '0%',
          '--progress-width': `${percentage}%`
        } as React.CSSProperties}
      ></div>
    </div>
  );
};

export default ProgressBar;