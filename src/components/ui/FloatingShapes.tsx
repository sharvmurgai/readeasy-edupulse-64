import React, { useEffect, useRef } from 'react';

const FloatingShapes = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const shapes = container.children;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      Array.from(shapes).forEach((shape, index) => {
        const htmlShape = shape as HTMLElement;
        const speed = (index + 1) * 0.02;
        const offsetX = (clientX - centerX) * speed;
        const offsetY = (clientY - centerY) * speed;
        
        htmlShape.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${offsetX * 0.1}deg)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-brand/5 rounded-full blur-xl animate-pulse" 
           style={{ animationDuration: '4s' }} />
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-300/10 rounded-lg blur-lg animate-pulse" 
           style={{ animationDuration: '6s', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/6 w-16 h-16 bg-brand/8 rounded-full blur-md animate-pulse" 
           style={{ animationDuration: '3s', animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-3/4 w-20 h-20 bg-purple-200/8 rounded-xl blur-lg animate-pulse" 
           style={{ animationDuration: '5s', animationDelay: '3s' }} />
      <div className="absolute top-1/6 right-1/3 w-28 h-28 bg-brand/6 rounded-full blur-2xl animate-pulse" 
           style={{ animationDuration: '7s' }} />
    </div>
  );
};

export default FloatingShapes;