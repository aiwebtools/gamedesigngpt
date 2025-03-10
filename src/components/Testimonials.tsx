
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Johnson",
    title: "Indie Game Developer",
    content: "Game Design Document GPT transformed my vague concept into a fully realized game design document in hours. The code it provided worked flawlessly and saved me weeks of development time.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    title: "Game Design Student",
    content: "As a student learning game development, this tool has been invaluable. It explains concepts clearly while providing practical code examples that help me understand the development process.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    title: "Studio Lead",
    content: "We used Game Design Document GPT to prototype several game concepts quickly. The quality of the GDDs and initial code implementations impressed our entire team and accelerated our development cycle.",
    rating: 4
  },
  {
    name: "Emma Wilson",
    title: "Narrative Designer",
    content: "The storytelling capabilities are impressive. It helped me develop character arcs and dialogue that felt authentic while maintaining consistency with the game's overall narrative structure.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-cyber-green mb-4 text-glow">
            Developer Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how Game Design Document GPT is helping developers bring their game ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-panel p-6 rounded-lg relative animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={i < testimonial.rating ? "text-cyber-green fill-cyber-green" : "text-gray-600"}
                    size={16}
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-cyber-green/20 flex items-center justify-center mr-3">
                  <span className="text-cyber-green font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-cyber-green/5 rounded-full blur-xl -z-10"></div>
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
            Join The Success Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
