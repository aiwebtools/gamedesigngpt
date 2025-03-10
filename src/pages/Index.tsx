
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import LegalDisclaimer from '../components/LegalDisclaimer';
import Footer from '../components/Footer';
import MatrixBackground from '../components/MatrixBackground';

const Index = () => {
  useEffect(() => {
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
          entry.target.style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      el.style.opacity = '0';
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

  return (
    <div className="min-h-screen bg-cyber-black text-white overflow-x-hidden">
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
                  Game Developer's Ultimate AI Assistant
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Streamline your game development process with expert AI assistance at every step. From initial concept to final deployment, Game Design Document GPT is your collaborative partner in creating exceptional games.
                </p>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,255,65,0.2)]">
                  <img 
                    src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-floating-man-with-blue-skin-and-white-hair-.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true" 
                    alt="AI Game Development" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-8 text-center">
                  <a 
                    href="https://chatgpt.com/g/g-GYX8Farzr-game-developer-gpt" 
                    className="cyber-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start Creating Your Game
                  </a>
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
    </div>
  );
};

export default Index;
