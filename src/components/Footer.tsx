
import React from 'react';
import Logo from './Logo';
import { Phone, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-8 relative bg-cyber-black border-t border-cyber-green/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <Logo className="mb-4" />
            <p className="text-gray-400 mt-4">
              Advanced AI assistant for game development, from concept to deployment. Create comprehensive game design documents and functional code.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://chatgpt.com/g/g-GYX8Farzr-game-developer-gpt" 
                className="cyber-button text-sm px-4 py-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                ACCESS NOW
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-mono text-cyber-green mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#features" 
                  className="text-gray-400 hover:text-cyber-green transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-gray-400 hover:text-cyber-green transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-gray-400 hover:text-cyber-green transition-colors"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                  className="text-gray-400 hover:text-cyber-green transition-colors flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More AI Tools
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-mono text-cyber-green mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+14758008096" 
                  className="text-gray-400 hover:text-cyber-green transition-colors flex items-center"
                >
                  <Phone size={16} className="mr-2" />
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-400 hover:text-cyber-green transition-colors flex items-center"
                >
                  <Mail size={16} className="mr-2" />
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <a 
                href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                className="inline-block bg-cyber-green/10 hover:bg-cyber-green/20 text-cyber-green
                         border border-cyber-green/30 rounded-full px-4 py-2 text-sm font-mono
                         transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                More AI Tools
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-cyber-green/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              className="hover:text-cyber-green transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://openai.com/policies/privacy-policy/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyber-green text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="https://aiwebtools.ai/terms-of-services" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyber-green text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
