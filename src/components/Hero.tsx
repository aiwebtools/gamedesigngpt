
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import * as THREE from 'three';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cubeRef = useRef<THREE.Mesh | null>(null);
  const frameIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create a 3D game controller or console
    const gamepadGeometry = new THREE.BoxGeometry(3, 2, 1);
    const edges = new THREE.EdgesGeometry(gamepadGeometry);
    
    // Create line material with glow effect
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x00ff41,
      transparent: true,
      opacity: 0.8
    });
    
    const lineSegments = new THREE.LineSegments(edges, lineMaterial);
    scene.add(lineSegments);
    cubeRef.current = lineSegments;

    // Add some buttons to the gamepad
    const buttonGeometry = new THREE.CircleGeometry(0.2, 32);
    const buttonMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff41 });
    
    // Create buttons
    const button1 = new THREE.Mesh(buttonGeometry, buttonMaterial);
    button1.position.set(0.8, 0.5, 0.51);
    scene.add(button1);
    
    const button2 = new THREE.Mesh(buttonGeometry, buttonMaterial);
    button2.position.set(1.3, 0, 0.51);
    scene.add(button2);

    // Add D-pad
    const dpadMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff41 });
    const dpadHorizontal = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 0.2, 0.1),
      dpadMaterial
    );
    dpadHorizontal.position.set(-0.8, 0, 0.51);
    scene.add(dpadHorizontal);
    
    const dpadVertical = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, 0.8, 0.1),
      dpadMaterial
    );
    dpadVertical.position.set(-0.8, 0, 0.51);
    scene.add(dpadVertical);

    // Animation function
    const animate = () => {
      if (!cubeRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) return;
      
      cubeRef.current.rotation.x += 0.003;
      cubeRef.current.rotation.y += 0.005;
      
      // Make buttons pulse
      const time = Date.now() * 0.001;
      button1.scale.set(
        1 + Math.sin(time * 2) * 0.1,
        1 + Math.sin(time * 2) * 0.1,
        1
      );
      button2.scale.set(
        1 + Math.sin(time * 2 + 1) * 0.1,
        1 + Math.sin(time * 2 + 1) * 0.1,
        1
      );
      
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      frameIdRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="inline-block px-4 py-1 rounded-full border border-cyber-green/30 bg-cyber-green/10 mb-4">
              <p className="text-sm font-mono text-cyber-green">
                FREE AI TOOLS - GAME DEVELOPMENT SUITE
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono tracking-tight text-white leading-tight">
              <span className="text-cyber-green text-glow">FREE AI GAME DESIGN</span> DOCUMENT GPT
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-cyber-blue mb-4">
              The Ultimate Free AI Tool for Game Developers
            </h2>
            <p className="text-xl text-gray-300 md:pr-10">
              Create professional game design documents, generate complete game code, and deploy fully functional games with our advanced AI Web Tools. Join thousands of indie developers using our free AI game development suite.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>✅ <strong>Free AI Game Design Documents</strong> - Professional GDD creation</p>
              <p>✅ <strong>AI Code Generation</strong> - Complete game development</p>
              <p>✅ <strong>Instant Deployment</strong> - Ready-to-play games</p>
              <p>✅ <strong>No Coding Required</strong> - AI does the heavy lifting</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="https://chatgpt.com/g/g-GYX8Farzr-game-developer-gpt" 
                className="cyber-button group"
                target="_blank"
                rel="noopener noreferrer"
                title="Access Free AI Game Development Tool"
              >
                START CREATING FREE
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a 
                href="#features" 
                className="text-cyber-green hover:text-cyber-brightGreen border border-cyber-green/50 px-6 py-3 rounded-md transition-colors font-mono"
                title="Learn about our AI Web Tools features"
              >
                Explore AI Tools
              </a>
            </div>
            <div className="text-sm text-gray-400 mt-4">
              <p>🏆 <strong>Trusted by 10,000+ developers</strong> | ⭐ <strong>4.8/5 rating</strong> | 🚀 <strong>100% Free AI Tools</strong></p>
            </div>
          </div>
          <div ref={containerRef} className="h-[400px] md:h-[500px] w-full animate-float" title="AI Game Development Visualization">
            {/* THREE.js will render here */}
          </div>
        </div>
      </div>
      
      {/* SEO-optimized content for crawlers */}
      <div className="sr-only">
        <h3>AI Web Tools - Leading Free AI Game Development Platform</h3>
        <p>Our AI Web Tools suite includes Game Design Document GPT, the most advanced free AI tool for game development. Create professional games with our artificial intelligence-powered development assistant. Perfect for indie developers, students, and gaming enthusiasts looking for free AI tools to bring their game ideas to life.</p>
        <ul>
          <li>Free AI game design document generator</li>
          <li>AI-powered code generation for games</li>
          <li>Automated game deployment tools</li>
          <li>Professional game development workflow</li>
          <li>No programming experience required</li>
        </ul>
      </div>
      
      {/* Glowing orbs in background for decoration */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-cyber-green/5 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-cyber-blue/10 blur-3xl"></div>
    </section>
  );
};

export default Hero;
