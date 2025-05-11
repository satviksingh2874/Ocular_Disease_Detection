import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Link,Check, Eye, Shield, Clock, Award } from 'lucide-react';

import Hero from '../components/Hero';
import ImageUpload from '../components/ImageUpload';
import FeatureCard from '../components/FeatureCard';

const HomePage: React.FC = () => {
  const navigate = useNavigate(); // React Router's navigation hook

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const features = [
    {
      icon: <Eye className="h-10 w-10 text-primary" />,
      title: "Advanced Detection",
      description: "Our AI analyzes eye scans with a 97% accuracy rate to detect cataracts, glaucoma, and other common conditions."
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Early Diagnosis",
      description: "Identify potential eye issues in their earliest stages, when treatment is most effective and often less invasive."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Privacy Focused",
      description: "Your medical data is encrypted and secure, adhering to HIPAA and international privacy standards."
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Clinically Validated",
      description: "Developed with leading ophthalmologists and validated through clinical studies across diverse patient populations."
    }
  ];

  const testimonials = [
    {
      quote: "EyeAI detected early signs of glaucoma that might have gone unnoticed. The personalized treatment plan has been incredibly helpful.",
      author: "Sarah Johnson",
      title: "Patient"
    },
    {
      quote: "As an ophthalmologist, I've found EyeAI to be an invaluable tool in my practice. It helps streamline diagnostics and gives me more time with patients.",
      author: "Dr. Michael Chen",
      title: "Ophthalmologist"
    },
    {
      quote: "The accuracy of EyeAI's diagnostics is impressive. It's helped us provide better care, especially in underserved communities.",
      author: "Dr. Elena Rodriguez",
      title: "Medical Director"
    }
  ];

  const handleUploadClick = () => {
    navigate('/results'); // Redirect to the results page
  };

  return (
    <div className="pt-16">
      <Hero />
      
      {/* Image Upload Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Your Eye Analysis in Minutes
            </h2>
            <p className="text-xl text-gray-600">
              Upload your eye scan and receive a detailed diagnostic report with personalized recommendations.
            </p>
          </div>
          
          <div className="text-center">
            <button
              onClick={handleUploadClick}
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-white font-medium transition-colors hover:bg-primary-dark"
            >
              Upload Eye Scan
            </button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Your privacy is our priority. All images are encrypted and processed securely.
            </p>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How EyeAI Benefits You
            </h2>
            <p className="text-xl text-gray-600">
              Our AI-powered diagnostic tool is designed to make eye care more accessible, accurate, and efficient.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50" id="how-it-works">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get actionable insights about your eye health in three simple steps.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary-light text-primary mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload Your Scan</h3>
              <p className="text-gray-600">
                Simply upload a recent eye scan or retinal image through our secure interface.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary-light text-primary mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-600">
                Our advanced AI analyzes the image for signs of common eye conditions with clinical-grade accuracy.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary-light text-primary mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Report</h3>
              <p className="text-gray-600">
                Receive a detailed report with condition insights and personalized next steps.
              </p>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/about" 
              className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
            >
              Learn more about our technology
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What People Are Saying
            </h2>
            <p className="text-xl text-primary-light">
              Discover how EyeAI is changing lives with early detection and personalized care.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gray-100 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Ready to prioritize your eye health?
                </h2>
                <p className="text-gray-600">
                  Start with an AI-powered analysis today and take control of your vision.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={handleUploadClick}
                  className="px-6 py-3 rounded-md bg-primary text-white font-medium text-center transition-colors hover:bg-primary-dark"
                >
                  Upload Eye Scan
                </button>
                <Link 
                  to="/about" 
                  className="px-6 py-3 rounded-md bg-white border border-gray-300 text-gray-600 font-medium text-center transition-colors hover:bg-gray-50"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;