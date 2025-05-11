import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Twitter, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Eye className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">EyeAI</span>
            </div>
            <p className="text-gray-400 text-sm">
              Advanced AI-powered diagnostics for early detection and treatment of eye diseases.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://twitter.com" className="text-gray-400 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">Eye Disease Detection</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">Personalized Treatment Plans</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">Early Condition Detection</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">For Ophthalmologists</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">For Patients</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="text-gray-400 flex items-start">
                <Mail className="h-5 w-5 mr-2 text-primary mt-0.5" />
                <span>support@eyeai-diagnostics.com</span>
              </p>
              <p className="text-gray-400">
                123 Medical Center Dr.<br />
                Suite 456<br />
                San Francisco, CA 94123
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} EyeAI Diagnostics. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-500 text-sm hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-500 text-sm hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;