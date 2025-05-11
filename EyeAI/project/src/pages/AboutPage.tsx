import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, BellRing, Eye, BarChart, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Medical Officer',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Board-certified ophthalmologist with 15+ years of clinical experience specializing in retinal diseases.'
    },
    {
      name: 'Dr. James Wilson',
      role: 'AI Research Director',
      image: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'PhD in computer vision and machine learning with extensive experience in medical image analysis.'
    },
    {
      name: 'Dr. Maya Patel',
      role: 'Clinical Research Lead',
      image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Specialized in clinical validation of AI diagnostic tools with focus on patient outcomes improvement.'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About EyeAI
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're on a mission to revolutionize eye care through advanced AI technology, making early detection accessible to everyone.
          </motion.p>
        </div>
        
        {/* Our Story Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                EyeAI began in 2023 when a team of ophthalmologists and AI researchers recognized a critical gap in eye care: the delay between symptoms and diagnosis often led to preventable vision loss.
              </p>
              <p className="text-gray-600 mb-4">
                We developed our AI diagnostic platform by training our algorithms on over 500,000 clinically validated eye scans, covering a diverse range of patients, conditions, and severities.
              </p>
              <p className="text-gray-600">
                Today, EyeAI partners with clinics worldwide to enhance diagnostic capabilities, reduce wait times, and improve patient outcomes through early detection.
              </p>
            </motion.div>
            <motion.div
              className="rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Medical professionals collaborating on eye care" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>
        
        {/* AI Model Section */}
        <section className="mb-16" id="how-it-works">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About Our AI Model
            </motion.h2>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our advanced deep learning algorithms have been trained on diverse datasets to ensure accuracy across all patient demographics.
            </motion.p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="grid md:grid-cols-2">
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-4">How Our AI Works</h3>
                <ol className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold text-sm mr-3">1</div>
                    <div>
                      <p className="text-gray-600"><span className="font-medium text-gray-900">Image Input:</span> Our AI processes high-resolution eye scans, including retinal images, OCT scans, and slit lamp photos.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold text-sm mr-3">2</div>
                    <div>
                      <p className="text-gray-600"><span className="font-medium text-gray-900">Feature Extraction:</span> Deep convolutional neural networks identify key biomarkers and patterns associated with various eye conditions.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold text-sm mr-3">3</div>
                    <div>
                      <p className="text-gray-600"><span className="font-medium text-gray-900">Condition Analysis:</span> The AI compares detected patterns against its training dataset of 500,000+ clinically validated cases.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold text-sm mr-3">4</div>
                    <div>
                      <p className="text-gray-600"><span className="font-medium text-gray-900">Confidence Scoring:</span> Each detected condition is assigned a confidence score based on statistical analysis.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold text-sm mr-3">5</div>
                    <div>
                      <p className="text-gray-600"><span className="font-medium text-gray-900">Personalized Recommendations:</span> Treatment suggestions are generated based on clinical guidelines and detected conditions.</p>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="bg-gray-50 p-6 md:p-8 border-t md:border-t-0 md:border-l border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Our AI Can Detect</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Cataracts',
                    'Glaucoma',
                    'Age-related Macular Degeneration',
                    'Diabetic Retinopathy',
                    'Retinal Detachment',
                    'Dry Eye Syndrome',
                    'Corneal Abrasions',
                    'Conjunctivitis',
                    'Keratoconus',
                    'Uveitis',
                    'Retinitis Pigmentosa',
                    'Ocular Hypertension'
                  ].map((condition, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">{condition}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-medium mb-2">Clinical Validation</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Our AI model has been validated through rigorous clinical trials at leading eye care institutions worldwide.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-2xl font-bold text-primary">97%</p>
                      <p className="text-xs text-gray-500">Accuracy</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">94%</p>
                      <p className="text-xs text-gray-500">Sensitivity</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">96%</p>
                      <p className="text-xs text-gray-500">Specificity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Values */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Core Values
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Shield className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Privacy & Security</h3>
              <p className="text-gray-600">
                We maintain the highest standards of data protection, with HIPAA-compliant encryption and strict access controls.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Brain className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Scientific Excellence</h3>
              <p className="text-gray-600">
                Our research team continuously refines our models based on the latest ophthalmological research and findings.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Healthcare Equity</h3>
              <p className="text-gray-600">
                We're committed to making advanced eye care accessible to underserved communities worldwide.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Team
            </motion.h2>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our multidisciplinary team combines expertise in ophthalmology, artificial intelligence, and healthcare delivery.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* CTA Section */}
        <section>
          <div className="bg-primary rounded-2xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h2 
                className="text-2xl md:text-3xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Ready to experience the future of eye care?
              </motion.h2>
              <motion.p 
                className="text-primary-light mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Upload your eye scan today and receive a comprehensive analysis powered by our advanced AI.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <a 
                  href="/#upload" 
                  className="inline-block px-6 py-3 bg-white text-primary font-medium rounded-md transition-colors hover:bg-gray-100"
                >
                  Get Started
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;