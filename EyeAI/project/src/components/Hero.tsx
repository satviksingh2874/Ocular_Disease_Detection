import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-50 pt-16 pb-12 md:pt-24 md:pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1610886411410-93f9a5a8fe4b?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                AI-Powered <span className="text-primary">Eye Disease</span> Detection
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Advanced diagnostic technology that detects cataracts, glaucoma, and other eye conditions with clinical-grade accuracy.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="#upload"
                  className="px-6 py-3 rounded-md bg-primary text-white font-medium text-center transition-colors hover:bg-primary-dark"
                >
                  Upload Eye Scan
                </Link>
                <Link
                  to="/about"
                  className="px-6 py-3 rounded-md bg-white border border-gray-300 text-gray-600 font-medium text-center transition-colors hover:bg-gray-50 group"
                >
                  <span className="flex items-center justify-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
              
              <div className="mt-8 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((index) => (
                    <div key={index} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
                      {String.fromCharCode(64 + index)}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Trusted by 1000+ Medical Professionals</p>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-sm text-gray-600">4.9/5</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/5752287/pexels-photo-5752287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Eye examination with advanced technology" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { number: '97%', label: 'Accuracy Rate' },
            { number: '15+', label: 'Detectable Conditions' },
            { number: '3 min', label: 'Average Analysis Time' },
            { number: '50k+', label: 'Successful Diagnoses' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
            >
              <span className="block text-3xl font-bold text-primary mb-1">{stat.number}</span>
              <span className="text-sm text-gray-600">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;