
import React from 'react';
import { ChevronRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Share Your Game Vision",
    description: "Tell the AI about your game idea, genre, story concepts, and technical requirements. If you're starting from scratch, it can generate game concepts for you."
  },
  {
    number: "02",
    title: "Create Game Design Document",
    description: "The AI will develop a comprehensive GDD including game title, story, characters, mechanics, game world, UI/UX specs, and technical requirements."
  },
  {
    number: "03",
    title: "Develop Narrative Elements",
    description: "Craft engaging storylines, character dialogues, backstories, and world lore that align with your game's genre and vision."
  },
  {
    number: "04",
    title: "Code Development & Implementation",
    description: "The AI breaks down the development process into manageable tasks and writes clean, efficient, well-documented code for each component."
  },
  {
    number: "05",
    title: "Testing & Optimization",
    description: "Thoroughly test and debug the game, optimizing for performance across different platforms and devices."
  },
  {
    number: "06",
    title: "Deployment & Distribution",
    description: "Package and deploy your game to your chosen platforms with all necessary files and instructions for publishing."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 relative bg-cyber-darkGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-cyber-green mb-4 text-glow">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A seamless process from concept to completed game
          </p>
        </div>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row glass-panel rounded-lg overflow-hidden group"
            >
              <div className="bg-cyber-green/10 p-6 flex items-center justify-center md:w-40">
                <span className="text-4xl font-bold font-mono text-cyber-green text-glow">
                  {step.number}
                </span>
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold font-mono text-cyber-green mb-2 flex items-center">
                  {step.title}
                  <ChevronRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </h3>
                <p className="text-gray-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://chatgpt.com/g/g-GYX8Farzr-game-developer-gpt" 
            className="cyber-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Building Your Game Now
          </a>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyber-green/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyber-purple/5 blur-3xl -z-10"></div>
    </section>
  );
};

export default HowItWorks;
