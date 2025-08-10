import React, { useEffect, useRef } from 'react';

interface FloatingParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseSize: number;
  opacity: number;
  baseOpacity: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
  trail: { x: number; y: number; opacity: number }[];
}

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<FloatingParticle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const clickEffectsRef = useRef<{ x: number; y: number; radius: number; opacity: number }[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: FloatingParticle[] = [];
      const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 8000);
      
      for (let i = 0; i < particleCount; i++) {
        const baseOpacity = Math.random() * 0.4 + 0.1;
        const baseSize = Math.random() * 3 + 1;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          size: baseSize,
          baseSize,
          opacity: baseOpacity,
          baseOpacity,
          color: i % 3 === 0 ? '#7C3AED' : i % 3 === 1 ? '#A855F7' : '#C084FC',
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          trail: []
        });
      }
      particlesRef.current = particles;
    };

    const drawParticle = (particle: FloatingParticle) => {
      // Draw trail
      particle.trail.forEach((point, index) => {
        if (point.opacity > 0) {
          ctx.save();
          ctx.globalAlpha = point.opacity;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(point.x, point.y, particle.size * 0.3, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });

      // Update pulse
      particle.pulse += particle.pulseSpeed;
      const pulseMultiplier = 1 + Math.sin(particle.pulse) * 0.3;
      
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * pulseMultiplier, 0, Math.PI * 2);
      ctx.fill();
      
      // Add glow effect
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.restore();
    };

    const updateParticle = (particle: FloatingParticle) => {
      // Update trail
      particle.trail.push({ x: particle.x, y: particle.y, opacity: 0.3 });
      if (particle.trail.length > 5) {
        particle.trail.shift();
      }
      particle.trail.forEach(point => {
        point.opacity *= 0.9;
      });

      // Mouse interaction with stronger effect
      const dx = mouseRef.current.x - particle.x;
      const dy = mouseRef.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 150) {
        const force = (150 - distance) / 150;
        particle.vx += (dx / distance) * force * 0.02;
        particle.vy += (dy / distance) * force * 0.02;
        particle.opacity = Math.min(1, particle.baseOpacity + force * 0.5);
        particle.size = Math.min(particle.baseSize * 2.5, particle.baseSize + force * particle.baseSize);
      } else {
        particle.opacity = particle.baseOpacity;
        particle.size = particle.baseSize;
      }

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Boundary check with bounce
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.vx *= -0.8;
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.vy *= -0.8;
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      }

      // Add some friction and slight random movement
      particle.vx *= 0.995;
      particle.vy *= 0.995;
      particle.vx += (Math.random() - 0.5) * 0.01;
      particle.vy += (Math.random() - 0.5) * 0.01;
    };

    const drawConnections = () => {
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
          
          if (distance < 120) {
            ctx.save();
            ctx.globalAlpha = (120 - distance) / 120 * 0.2;
            ctx.strokeStyle = '#7C3AED';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    };

    const drawClickEffects = () => {
      clickEffectsRef.current.forEach((effect, index) => {
        ctx.save();
        ctx.globalAlpha = effect.opacity;
        ctx.strokeStyle = '#7C3AED';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(effect.x, effect.y, effect.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
        
        effect.radius += 3;
        effect.opacity *= 0.95;
        
        if (effect.opacity < 0.01) {
          clickEffectsRef.current.splice(index, 1);
        }
      });
    };

    const animate = () => {
      timeRef.current += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawConnections();
      
      particlesRef.current.forEach(particle => {
        updateParticle(particle);
        drawParticle(particle);
      });
      
      drawClickEffects();

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleClick = (e: MouseEvent) => {
      clickEffectsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        opacity: 1
      });
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    // Initialize
    resizeCanvas();
    createParticles();
    animate();

    // Event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-auto z-0 cursor-pointer"
      style={{ background: 'transparent' }}
    />
  );
};

export default InteractiveBackground;
