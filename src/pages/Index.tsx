
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import LegalDisclaimer from '../components/LegalDisclaimer';
import Footer from '../components/Footer';
import MatrixBackground from '../components/MatrixBackground';
import AgreementPopup from '../components/AgreementPopup';
import SEOEnhancements from '../components/SEOEnhancements';

const Index = () => {
  const [showAgreement, setShowAgreement] = useState(false);

  useEffect(() => {
    // Check if user has already agreed to disclaimer
    const hasAgreed = localStorage.getItem('disclaimerAgreed') === 'true';
    setShowAgreement(!hasAgreed);
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth'
        });
      });
    });
    
    // Loading animation for elements
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          // Fixed: Use setAttribute instead of directly accessing style
          entry.target.setAttribute('style', 'opacity: 1');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      // Fixed: Use setAttribute instead of directly accessing style
      el.setAttribute('style', 'opacity: 0');
      observer.observe(el);
    });
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Check if THREE.js is loaded correctly
  useEffect(() => {
    import('three').then(THREE => {
      console.log('THREE.js loaded successfully', THREE.REVISION);
    }).catch(error => {
      console.error('Error loading THREE.js:', error);
    });
  }, []);

  const handleAgreement = () => {
    setShowAgreement(false);
  };

  return (
    <div className="min-h-screen bg-cyber-black text-white overflow-x-hidden">
      <SEOEnhancements />
      <MatrixBackground />
      <NavBar />
      
      <main>
        <Hero />
        <Features />
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto glass-panel rounded-lg overflow-hidden animate-on-scroll">
              <div className="p-1 bg-gradient-to-r from-cyber-green/40 via-cyber-blue/40 to-cyber-green/40"></div>
              <div className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold font-mono text-cyber-green mb-6 text-glow">
                  AI Web Tools: Your Ultimate Free Game Development Assistant
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Streamline your game development process with our expert AI assistant at every step. From initial concept to final deployment, Game Design Document GPT is your collaborative partner in creating exceptional games using the power of artificial intelligence.
                </p>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,255,65,0.2)]">
                  <img 
                    src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-floating-man-with-blue-skin-and-white-hair-.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true" 
                    alt="AI Game Development Tool - Free AI Web Tools for Game Design" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    title="Free AI Game Development Assistant by AI Web Tools"
                  />
                </div>
                <div className="mt-8 text-center">
                  <a 
                    href="https://chatgpt.com/g/g-GYX8Farzr-game-developer-gpt" 
                    className="cyber-button"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Start using free AI game development tools"
                  >
                    Start Creating Your Game with AI
                  </a>
                </div>
                
                {/* Additional SEO content */}
                <div className="mt-12 grid md:grid-cols-2 gap-8 text-gray-300">
                  <div>
                    <h3 className="text-xl font-bold text-cyber-green mb-4">Why Choose Our Free AI Tools?</h3>
                    <ul className="space-y-2">
                      <li>🎮 <strong>Complete Game Development Suite</strong> - Everything you need in one AI tool</li>
                      <li>🚀 <strong>Lightning Fast Results</strong> - Generate games in minutes, not months</li>
                      <li>💰 <strong>100% Free Forever</strong> - No hidden fees or premium tiers</li>
                      <li>🎯 <strong>Professional Quality</strong> - Industry-standard game development</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cyber-green mb-4">Perfect for:</h3>
                    <ul className="space-y-2">
                      <li>👨‍💻 Indie game developers</li>
                      <li>🎓 Students learning game design</li>
                      <li>🚀 Startup founders building MVPs</li>
                      <li>🎨 Creative professionals exploring AI tools</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute top-1/3 left-0 w-72 h-72 bg-cyber-green/5 blur-3xl -z-10"></div>
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cyber-blue/5 blur-3xl -z-10"></div>
        </section>
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <LegalDisclaimer />
      </main>
      
      <Footer />
      
      {showAgreement && <AgreementPopup onAgree={handleAgreement} />}
    </div>
  );
};

export default Index;
