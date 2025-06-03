
import React from 'react';
import { Gamepad2 } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Gamepad2 className="w-8 h-8 mr-2 text-cyber-green animate-pulse-glow" aria-label="Game Development AI Tool Icon" />
      <div className="flex flex-col">
        <h1 className="text-xl font-bold font-mono tracking-tight text-cyber-green text-glow">
          Game Design Document GPT
        </h1>
        <span className="text-xs text-cyber-green/70 font-mono">
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-cyber-green hover:underline transition-colors"
            title="AI Web Tools - Free AI Tools Platform"
            aria-label="Visit AI Web Tools for more free AI development tools"
          >
            Presented by AiWebTools.ai
          </a>
        </span>
      </div>
    </div>
  );
};

export default Logo;
