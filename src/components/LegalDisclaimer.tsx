
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const LegalDisclaimer: React.FC = () => {
  return (
    <section id="disclaimer" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-cyber-green mb-4 text-glow">
            Legal Disclaimer
          </h2>
          <div className="flex justify-center mb-6">
            <AlertTriangle className="text-cyber-green h-8 w-8" />
          </div>
        </div>
        
        <div className="glass-panel p-8 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-xl font-bold font-mono text-cyber-green mb-4">
            IMPORTANT: Please Read Carefully
          </h3>
          
          <div className="space-y-4 text-gray-300">
            <p>
              Game Design Document GPT is provided "as is" and "as available" without any warranties of any kind, either expressed or implied. AI Web Tools LLC makes no warranty or representation with respect to the completeness, security, reliability, quality, accuracy, or availability of the service.
            </p>
            
            <p>
              <strong className="text-white">No Guarantees:</strong> While Game Design Document GPT strives to generate functional code and comprehensive game design documents, we do not guarantee that the service will be error-free or that any code generated will be without bugs or security vulnerabilities. All code should be thoroughly reviewed and tested before use in a production environment.
            </p>
            
            <p>
              <strong className="text-white">Intellectual Property:</strong> Users retain ownership of the games they create with the assistance of Game Design Document GPT. However, it is the user's responsibility to ensure they have proper rights and licenses for any third-party assets, frameworks, or resources they incorporate into their projects.
            </p>
            
            <p>
              <strong className="text-white">No Legal Advice:</strong> This tool does not provide legal advice regarding intellectual property rights, licensing, or distribution. Users should consult with a qualified legal professional for advice on these matters.
            </p>
            
            <p>
              <strong className="text-white">Platform Compliance:</strong> Users are responsible for ensuring their games comply with the rules, guidelines, and policies of any platform where they choose to distribute their games.
            </p>
            
            <p>
              <strong className="text-white">Limitation of Liability:</strong> AI Web Tools LLC shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from the use or inability to use the service or any code or content generated through the service.
            </p>
            
            <p>
              <strong className="text-white">User Responsibility:</strong> By using Game Design Document GPT, you acknowledge that game development is complex and that the final quality, functionality, and success of your game depends on many factors beyond the control of this tool.
            </p>
            
            <p>
              <strong className="text-white">Service Changes:</strong> AI Web Tools LLC reserves the right to modify, suspend, or discontinue the service at any time without notice.
            </p>
            
            <p>
              By using Game Design Document GPT, you agree to these terms and acknowledge that you have read and understood this disclaimer.
            </p>
          </div>
          
          <div className="mt-6 pt-6 border-t border-cyber-green/20 flex flex-col md:flex-row gap-4 justify-between">
            <a 
              href="https://openai.com/policies/privacy-policy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyber-green hover:text-cyber-brightGreen transition-colors font-mono"
            >
              Privacy Policy
            </a>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyber-green hover:text-cyber-brightGreen transition-colors font-mono"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalDisclaimer;
