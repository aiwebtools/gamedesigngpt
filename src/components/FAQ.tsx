
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Game Design Document GPT?",
    answer: "Game Design Document GPT is an AI assistant that helps users create comprehensive game design documents, develop the foundational elements of video games, write code, and deploy fully functional games. It guides you through the entire game development process, from concept to completion."
  },
  {
    question: "Do I need programming experience to use this tool?",
    answer: "No, you don't need prior programming experience. Game Design Document GPT can generate code and explain concepts for beginners. However, having some basic understanding of game development concepts will help you better collaborate with the AI and implement its suggestions."
  },
  {
    question: "What programming languages and game engines does it support?",
    answer: "Game Design Document GPT can work with various programming languages and game engines including but not limited to JavaScript, Python, C#, C++, Unity, Unreal Engine, Godot, and web-based game frameworks. It adapts to the requirements of your project and your preferences."
  },
  {
    question: "Can it help with both 2D and 3D games?",
    answer: "Yes, Game Design Document GPT can assist with both 2D and 3D game development. It can provide guidance, code, and design documents tailored to either approach based on your project requirements."
  },
  {
    question: "How detailed are the game design documents it creates?",
    answer: "The game design documents are comprehensive and include game title, story synopsis, character descriptions, core gameplay mechanics, game world details, UI/UX specifications, and technical requirements. The level of detail can be adjusted based on your needs."
  },
  {
    question: "Can it help with specific aspects like character development or level design?",
    answer: "Absolutely. Game Design Document GPT can focus on specific aspects of game development such as character development, level design, dialogue writing, mechanics implementation, or any other area where you need assistance."
  },
  {
    question: "Is the code it generates ready to use?",
    answer: "Yes, the code is designed to be functional and ready to implement. However, as with any generated code, you may need to make small adjustments to fit your specific project structure or requirements. The AI can help with these adjustments."
  },
  {
    question: "Can I use the games I create commercially?",
    answer: "Yes, you retain full ownership of any game you create with the assistance of Game Design Document GPT. You're free to distribute, sell, or otherwise commercialize your game as you see fit, subject to the terms of any third-party assets or frameworks you might use."
  }
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 relative bg-cyber-darkGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-cyber-green mb-4 text-glow">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about Game Design Document GPT
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="glass-panel rounded-lg border-cyber-green/30 px-0"
              >
                <AccordionTrigger className="px-6 text-left font-mono text-cyber-green hover:text-cyber-brightGreen hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Still have questions?
          </p>
          <a 
            href="mailto:Contact@ai-webtools.com" 
            className="cyber-button"
          >
            Contact Support
          </a>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-cyber-blue/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyber-green/5 blur-3xl -z-10"></div>
    </section>
  );
};

export default FAQ;
