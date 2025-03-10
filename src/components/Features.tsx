
import React from 'react';
import { 
  Code, FileText, Puzzle, Zap, Layout, TerminalSquare, GitPullRequest, CheckCircle, PenTool
} from 'lucide-react';

const features = [
  {
    icon: <FileText className="h-10 w-10 text-cyber-green" />,
    title: "Comprehensive GDD Creation",
    description: "Generate detailed game design documents covering story, mechanics, characters, and technical specifications."
  },
  {
    icon: <Code className="h-10 w-10 text-cyber-green" />,
    title: "Code Development",
    description: "Get functional code for your game using best practices and optimal patterns for performance."
  },
  {
    icon: <PenTool className="h-10 w-10 text-cyber-green" />,
    title: "Narrative Development",
    description: "Craft engaging storylines, character dialogues, and immersive world-building elements."
  },
  {
    icon: <Puzzle className="h-10 w-10 text-cyber-green" />,
    title: "Gameplay Mechanics",
    description: "Design and implement innovative gameplay mechanics tailored to your game concept."
  },
  {
    icon: <Layout className="h-10 w-10 text-cyber-green" />,
    title: "UI/UX Design",
    description: "Create intuitive interfaces and smooth user experiences that enhance gameplay."
  },
  {
    icon: <TerminalSquare className="h-10 w-10 text-cyber-green" />,
    title: "Testing & Debugging",
    description: "Thorough testing and debugging to ensure your game runs smoothly without issues."
  },
  {
    icon: <GitPullRequest className="h-10 w-10 text-cyber-green" />,
    title: "Version Control",
    description: "Maintain complete history of your game's codebase with proper version control."
  },
  {
    icon: <Zap className="h-10 w-10 text-cyber-green" />,
    title: "Performance Optimization",
    description: "Optimize your game for speed and efficiency across different platforms."
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-cyber-green" />,
    title: "Deployment Ready",
    description: "Get your game ready for deployment with all necessary files and instructions."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-cyber-green mb-4 text-glow">
            Game Development Superpowers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Game Design Document GPT provides end-to-end assistance for developing your dream game, from concept to final product.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 rounded-lg hover:border-cyber-green/50 transition-all duration-300 group"
            >
              <div className="mb-4 group-hover:animate-pulse-glow">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-mono text-cyber-green mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-cyber-blue/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyber-green/5 blur-3xl -z-10"></div>
    </section>
  );
};

export default Features;
