
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 glass-panel' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-cyber-green p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="https://chatgpt.com/g/g-GYX8Farzr-game-developer-gpt" 
              className="cyber-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACCESS NOW
            </a>
            <a 
              href="#faq" 
              className="text-cyber-green hover:text-cyber-brightGreen transition-colors font-mono"
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-cyber-green hover:text-cyber-brightGreen transition-colors font-mono"
            >
              Disclaimer
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              className="text-cyber-green hover:text-cyber-brightGreen transition-colors font-mono"
              target="_blank"
              rel="noopener noreferrer"
            >
              More AI Tools
            </a>
          </nav>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-panel mt-4 py-4 rounded-md animate-fade-in">
            <nav className="flex flex-col space-y-4 items-center">
              <a 
                href="https://chatgpt.com/g/g-GYX8Farzr-game-developer-gpt" 
                className="cyber-button w-full text-center"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                ACCESS NOW
              </a>
              <a 
                href="#faq" 
                className="text-cyber-green hover:text-cyber-brightGreen transition-colors font-mono w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="#disclaimer" 
                className="text-cyber-green hover:text-cyber-brightGreen transition-colors font-mono w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Disclaimer
              </a>
              <a 
                href="https://www.aiwebtools.ai" 
                className="text-cyber-green hover:text-cyber-brightGreen transition-colors font-mono w-full text-center py-2"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                More AI Tools
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
