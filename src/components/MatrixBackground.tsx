
import React, { useEffect, useRef } from 'react';

const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Matrix rain characters
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%"\'#&_(),.;:?!\\|{}<>[]^~';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Initialize drops at random positions
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -canvas.height;
    }

    // Function to draw the matrix rain
    const draw = () => {
      // Add semi-transparent black to create fade effect
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00ff41';
      ctx.font = `${fontSize}px JetBrains Mono`;
      
      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // x = i * fontSize, y = drops[i] * fontSize
        ctx.fillText(text, i * fontSize, drops[i] * 1);
        
        // Vary opacity for a more realistic effect
        if (Math.random() > 0.975) {
          ctx.fillStyle = '#39ff14'; // Brighter green for some characters
        } else {
          ctx.fillStyle = '#00ff41';
        }
        
        // Reset position when reaching bottom or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Increment y coordinate for next drop
        drops[i]++;
      }
    };

    // Animation loop
    const interval = setInterval(draw, 50);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-0 opacity-20"
      aria-hidden="true"
    />
  );
};

export default MatrixBackground;
