
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

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 glass-panel' : 'py-3 sm:py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-cyber-green p-2 active:scale-95 transition-transform touch-manipulation"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <a 
              href="https://chatgpt.com/g/g-GYX8Farzr-game-developer-gpt" 
              className="cyber-button text-sm lg:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACCESS NOW
            </a>
            <a 
              href="#faq" 
              className="text-cyber-green hover:text-cyber-brightGreen transition-colors font-mono text-sm lg:text-base"
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-cyber-green hover:text-cyber-brightGreen transition-colors font-mono text-sm lg:text-base"
            >
              Disclaimer
            </a>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              className="text-cyber-green hover:text-cyber-brightGreen transition-colors font-mono text-sm lg:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              More AI Tools
            </a>
          </nav>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-80 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="glass-panel py-4 rounded-md">
            <nav className="flex flex-col space-y-2 items-center px-4">
              <a 
                href="https://chatgpt.com/g/g-GYX8Farzr-game-developer-gpt" 
                className="cyber-button w-full text-center text-sm"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                ACCESS NOW
              </a>
              <a 
                href="#faq" 
                className="text-cyber-green hover:text-cyber-brightGreen active:text-cyber-brightGreen transition-colors font-mono w-full text-center py-3 touch-manipulation"
                onClick={closeMenu}
              >
                FAQ
              </a>
              <a 
                href="#disclaimer" 
                className="text-cyber-green hover:text-cyber-brightGreen active:text-cyber-brightGreen transition-colors font-mono w-full text-center py-3 touch-manipulation"
                onClick={closeMenu}
              >
                Disclaimer
              </a>
              <a 
                href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                className="text-cyber-green hover:text-cyber-brightGreen active:text-cyber-brightGreen transition-colors font-mono w-full text-center py-3 touch-manipulation"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                More AI Tools
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
