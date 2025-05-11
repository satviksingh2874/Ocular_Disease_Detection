import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're committed to protecting your medical data with the highest standards of security and privacy.
          </motion.p>
        </div>
        
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="flex items-start">
              <Shield className="h-10 w-10 text-primary mr-4 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-3">Our Commitment to Your Privacy</h2>
                <p className="text-gray-600 mb-4">
                  At EyeAI, we understand the sensitive nature of medical data. This privacy policy outlines how we collect, 
                  use, and protect your information when you use our AI-powered eye disease diagnostic services.
                </p>
                <p className="text-gray-600">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Key Privacy Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">How We Protect Your Data</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Lock className="h-10 w-10 text-primary" />,
                title: "End-to-End Encryption",
                description: "All data transmissions are secured with AES-256 encryption, ensuring your information remains private."
              },
              {
                icon: <Shield className="h-10 w-10 text-primary" />,
                title: "HIPAA Compliance",
                description: "Our systems adhere to healthcare privacy standards with regular security audits and assessments."
              },
              {
                icon: <Eye className="h-10 w-10 text-primary" />,
                title: "Data Minimization",
                description: "We only collect the information necessary to provide our diagnostic services."
              },
              {
                icon: <FileCheck className="h-10 w-10 text-primary" />,
                title: "Secure Data Storage",
                description: "Your data is stored in secure, access-controlled cloud environments with regular backups."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Privacy Policy Sections */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="border-b border-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Information We Collect</h3>
                <div className="space-y-3 text-gray-600">
                  <p>
                    When you use EyeAI, we collect the following types of information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><span className="font-medium">Personal Information:</span> Name, email address, and contact details when you create an account.</li>
                    <li><span className="font-medium">Medical Information:</span> Eye scan images and related medical history that you choose to upload for analysis.</li>
                    <li><span className="font-medium">Usage Information:</span> How you interact with our platform, including features used and time spent.</li>
                    <li><span className="font-medium">Device Information:</span> Browser type, IP address, and device identifiers to ensure security and service optimization.</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="border-b border-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">How We Use Your Information</h3>
                <div className="space-y-3 text-gray-600">
                  <p>We use your information for the following purposes:</p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>To provide AI-powered diagnostic analysis of your eye scans</li>
                    <li>To generate personalized treatment recommendations</li>
                    <li>To improve our AI models and diagnostic accuracy</li>
                    <li>To communicate with you about your results and account</li>
                    <li>To ensure the security and integrity of our platform</li>
                    <li>To comply with applicable laws and regulations</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="border-b border-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Data Sharing and Disclosure</h3>
                <div className="space-y-3 text-gray-600">
                  <p>
                    We are committed to maintaining the confidentiality of your information and do not sell your personal data. 
                    We may share your information in the following limited circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><span className="font-medium">Healthcare Providers:</span> With your explicit consent, we may share your diagnostic results with your healthcare provider.</li>
                    <li><span className="font-medium">Service Providers:</span> We work with trusted third parties who provide services such as hosting, data analysis, and customer support.</li>
                    <li><span className="font-medium">Legal Requirements:</span> When required by law, such as in response to a valid legal process or to protect our rights.</li>
                    <li><span className="font-medium">Research Partners:</span> When you opt-in, anonymized and aggregated data may be shared with research institutions to advance eye health research.</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="border-b border-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Your Rights and Choices</h3>
                <div className="space-y-3 text-gray-600">
                  <p>You have several rights regarding your personal information:</p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><span className="font-medium">Access:</span> You can request access to the personal information we have about you.</li>
                    <li><span className="font-medium">Correction:</span> You can ask us to correct inaccurate or incomplete information.</li>
                    <li><span className="font-medium">Deletion:</span> You can request that we delete your personal information.</li>
                    <li><span className="font-medium">Restriction:</span> You can ask us to restrict the processing of your information.</li>
                    <li><span className="font-medium">Data Portability:</span> You can request a copy of your information in a structured, machine-readable format.</li>
                    <li><span className="font-medium">Objection:</span> You can object to our processing of your information in certain circumstances.</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us at privacy@eyeai-diagnostics.com.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-b border-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Data Retention</h3>
                <p className="text-gray-600">
                  We retain your personal information for as long as necessary to provide our services, comply with legal obligations, 
                  resolve disputes, and enforce our agreements. The specific retention period depends on the type of information and applicable legal requirements.
                </p>
              </div>
            </div>
            
            <div className="border-b border-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">International Data Transfers</h3>
                <p className="text-gray-600">
                  We process data in the United States and other countries. When we transfer personal information from the European Economic Area, 
                  United Kingdom, or Switzerland, we use approved data transfer mechanisms, such as Standard Contractual Clauses, to ensure adequate protection.
                </p>
              </div>
            </div>
            
            <div className="border-b border-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Children's Privacy</h3>
                <p className="text-gray-600">
                  Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. 
                  If you believe we have collected information from a child, please contact us immediately.
                </p>
              </div>
            </div>
            
            <div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Changes to This Privacy Policy</h3>
                <p className="text-gray-600">
                  We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. 
                  We will notify you of any material changes through our website or via email.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">Contact Us About Privacy</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this privacy policy or our data practices, please contact our Data Protection Officer:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">By Email</h3>
                <p className="text-gray-600">privacy@eyeai-diagnostics.com</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">By Mail</h3>
                <p className="text-gray-600">
                  Data Protection Officer<br />
                  EyeAI Diagnostics<br />
                  123 Medical Center Dr.<br />
                  San Francisco, CA 94123
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;