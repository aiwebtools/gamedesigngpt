
import React, { useEffect } from 'react';

const SEOEnhancements: React.FC = () => {
  useEffect(() => {
    // Add additional SEO enhancements
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Game Design Document GPT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Game Design Document GPT is a free AI tool that helps developers create professional game design documents, generate complete game code, and deploy fully functional games using advanced artificial intelligence."
          }
        },
        {
          "@type": "Question", 
          "name": "Is this AI tool really free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Game Design Document GPT is completely free to use. It's part of AI Web Tools' mission to provide accessible AI development tools for everyone."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need coding experience?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No coding experience required! Our AI handles all the technical aspects of game development, from design documents to code generation and deployment."
          }
        }
      ]
    });
    document.head.appendChild(script);

    // Add breadcrumb structured data
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "AI Web Tools",
          "item": "https://www.aiwebtools.ai"
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": "Free AI Tools",
          "item": "https://www.aiwebtools.ai/free-ai-tools"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Game Design Document GPT",
          "item": "https://gamedesigndocumentgpt.lovable.app/"
        }
      ]
    });
    document.head.appendChild(breadcrumbScript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(breadcrumbScript);
    };
  }, []);

  return null;
};

export default SEOEnhancements;
