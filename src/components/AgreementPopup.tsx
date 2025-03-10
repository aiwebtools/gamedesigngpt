
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AgreementPopupProps {
  onAgree: () => void;
}

const AgreementPopup: React.FC<AgreementPopupProps> = ({ onAgree }) => {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(true);

  const handleAgree = () => {
    localStorage.setItem('disclaimerAgreed', 'true');
    setIsVisible(false);
    onAgree();
    toast({
      title: "Agreement Accepted",
      description: "Thank you for accepting our terms",
      duration: 3000,
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm">
      <div className="glass-panel max-w-2xl mx-auto p-6 rounded-lg animate-fade-in relative">
        <div className="p-1 bg-gradient-to-r from-cyber-green/40 via-cyber-blue/40 to-cyber-green/40 rounded-lg">
          <div className="bg-cyber-darkGray p-6 rounded-lg">
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <h2 className="text-2xl font-bold font-mono text-cyber-green mb-4 text-glow">
              Important Disclaimer
            </h2>
            
            <p className="text-gray-300 mb-4">
              By using Game Design Document GPT, you acknowledge and agree to the following:
            </p>
            
            <ul className="list-disc pl-5 text-gray-300 space-y-2 mb-6">
              <li>The service is provided "as is" without any warranties.</li>
              <li>We do not guarantee that the generated code will be free from errors or security vulnerabilities.</li>
              <li>You are responsible for reviewing and testing all generated code before use.</li>
              <li>You retain ownership of games you create, but must ensure proper rights for any third-party assets used.</li>
              <li>AI Web Tools LLC is not liable for any damages resulting from the use of this service.</li>
            </ul>
            
            <p className="text-gray-300 mb-6">
              By clicking "I Agree", you acknowledge that you have read, understood, and agree to our <a href="https://aiwebtools.ai/terms-of-services" className="text-cyber-green hover:underline">Terms of Service</a> and <a href="https://openai.com/policies/privacy-policy/" className="text-cyber-green hover:underline">Privacy Policy</a>.
            </p>
            
            <div className="flex justify-center">
              <button 
                onClick={handleAgree}
                className="cyber-button text-lg px-8 py-3"
              >
                I Agree
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgreementPopup;
