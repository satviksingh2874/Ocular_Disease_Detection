import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQPage: React.FC = () => {
  // Group FAQs by category
  const faqCategories = [
    {
      name: 'General Questions',
      faqs: [
        {
          question: 'What is EyeAI?',
          answer: 'EyeAI is an AI-powered diagnostic tool that analyzes eye scans to detect common eye conditions such as cataracts, glaucoma, and other diseases. It provides detailed analysis and personalized recommendations based on the detected conditions.'
        },
        {
          question: 'How accurate is EyeAI?',
          answer: 'EyeAI has been clinically validated with a 97% accuracy rate across diverse patient populations. Our AI model was trained on over 500,000 labeled eye scans and has been tested in multiple clinical settings to ensure reliability.'
        },
        {
          question: 'Is EyeAI intended to replace my eye doctor?',
          answer: 'No. EyeAI is designed to be a supportive tool, not a replacement for professional medical care. We recommend using EyeAI\'s analysis alongside regular visits to your ophthalmologist or optometrist for comprehensive eye care.'
        }
      ]
    },
    {
      name: 'Using The Service',
      faqs: [
        {
          question: 'What types of eye scans can I upload?',
          answer: 'EyeAI supports various types of eye imaging including retinal photographs, OCT scans, slit lamp images, and standard ophthalmic photographs. The image should be clear, well-lit, and focused on the eye for optimal results.'
        },
        {
          question: 'How long does the analysis take?',
          answer: 'Most scans are analyzed within 2-3 minutes. Complex cases might take slightly longer. You\'ll receive an email notification when your results are ready to view.'
        },
        {
          question: 'Can I upload scans for multiple patients?',
          answer: 'Yes, if you\'re a healthcare provider, you can create a professional account that allows for multiple patient scans with separate records and analysis. Each patient\'s data is kept secure and separate.'
        }
      ]
    },
    {
      name: 'Privacy & Security',
      faqs: [
        {
          question: 'How is my data protected?',
          answer: 'All uploaded images and personal information are encrypted using industry-standard protocols. We comply with HIPAA regulations and international data privacy standards. Your data is never sold to third parties and is only used for providing the diagnostic service.'
        },
        {
          question: 'Who can access my scan results?',
          answer: 'Only you and any healthcare providers you explicitly authorize can access your scan results. We implement strict access controls and authentication measures to protect your privacy.'
        },
        {
          question: 'Are my eye scans used to train the AI?',
          answer: 'We only use anonymized data for improving our AI with explicit consent. During signup, you can choose whether to allow your anonymized scans to contribute to research and AI improvement. This is completely optional.'
        }
      ]
    },
    {
      name: 'Technical Support',
      faqs: [
        {
          question: 'What should I do if I encounter an error during upload?',
          answer: 'If you experience upload issues, check that your image meets our format requirements (JPG, PNG, WEBP, HEIC) and is under 5MB. If problems persist, please contact our support team with details about the error and what device/browser you\'re using.'
        },
        {
          question: 'Is there a mobile app for EyeAI?',
          answer: 'Yes, we offer mobile apps for both iOS and Android platforms. These apps allow for direct capture of eye images (with appropriate attachments) or uploading existing scans from your device.'
        },
        {
          question: 'Can I integrate EyeAI with my clinic\'s existing systems?',
          answer: 'Yes, we provide API access for healthcare providers to integrate EyeAI with electronic health record (EHR) systems and other clinical software. Contact our partnership team for integration details.'
        }
      ]
    }
  ];

  const [openFAQs, setOpenFAQs] = useState<{[key: string]: boolean}>({});

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenFAQs(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get answers to common questions about EyeAI and how our technology works.
          </motion.p>
        </div>
        
        {/* FAQ Categories */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {faqCategories.map((category, i) => (
            <a 
              key={i} 
              href={`#category-${i}`}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 text-center transition-transform hover:-translate-y-1"
            >
              <h3 className="font-medium text-gray-900">{category.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{category.faqs.length} questions</p>
            </a>
          ))}
        </div>
        
        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <section key={categoryIndex} id={`category-${categoryIndex}`}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                {category.name}
              </h2>
              
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const key = `${categoryIndex}-${faqIndex}`;
                  const isOpen = openFAQs[key] || false;
                  
                  return (
                    <div 
                      key={faqIndex} 
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                        onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                        aria-expanded={isOpen}
                      >
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        {isOpen ? 
                          <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        }
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="p-4 bg-gray-50 border-t border-gray-200">
                              <p className="text-gray-600">{faq.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
        
        {/* Contact CTA */}
        <div className="mt-16 bg-primary text-white rounded-xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <MessageCircle className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-primary-light mb-6">
              Our team is here to help. Reach out to us for personalized assistance with any questions you may have about our services.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-white text-primary font-medium rounded-md transition-colors hover:bg-gray-100"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;