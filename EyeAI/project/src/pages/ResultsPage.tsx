import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Share2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for API requests

import Prescription from '../components/Prescription';

const ResultsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'results' | 'prescription'>('results');
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // State for selected file
  const [results, setResults] = useState<any | null>(null); // State for API results
  const [error, setError] = useState<string | null>(null); // State for errors

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      setResults(null); // Reset results on new file selection
      setError(null); // Reset error
    }
  };

  // Handle file upload and API call
  const handleFileUpload = async () => {
    if (!selectedFile) {
      setError('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setResults(response.data); // Set API results
    } catch (err) {
      setError('Error occurred while processing the image.');
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Home
          </Link>
        </div>

        {/* File Upload Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Upload Eye Scan</h2>
          <input type="file" onChange={handleFileChange} className="mb-4" />
          <button
            onClick={handleFileUpload}
            className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-white font-medium transition-colors hover:bg-primary-dark"
          >
            Upload and Analyze
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        {/* Display Results */}
        {results ? (
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-6 bg-primary text-white">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">AI Prediction Results</h1>
              <p className="text-primary-light">Label: {results.label}</p>
              <p className="text-primary-light">Confidence: {(results.probability * 100).toFixed(2)}%</p>
            </div>
          </div>
        ) : (
          <div className="text-gray-500">Upload an image to see the results.</div>
        )}

        {/* Results and Prescription Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6 bg-primary text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">Your Eye Scan Analysis</h1>
                <p className="text-primary-light">Analyzed on {new Date().toLocaleDateString()}</p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-3">
                <button className="inline-flex items-center px-3 py-1.5 bg-white/20 rounded text-sm hover:bg-white/30 transition-colors">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </button>
                <button className="inline-flex items-center px-3 py-1.5 bg-white/20 rounded text-sm hover:bg-white/30 transition-colors">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </button>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('results')}
                className={`py-4 px-6 text-sm font-medium border-b-2 ${
                  activeTab === 'results'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Analysis Results
              </button>
              <button
                onClick={() => setActiveTab('prescription')}
                className={`py-4 px-6 text-sm font-medium border-b-2 ${
                  activeTab === 'prescription'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Prescription & Recommendations
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'results' ? (
              <div>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Detected Conditions</h2>
                    <div className="space-y-4">
                      {results && (
                        <motion.div
                          className="border border-gray-200 rounded-lg p-4"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-lg">{results.label}</h3>
                            <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                              Confidence: {(results.probability * 100).toFixed(2)}%
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Prescription
                diagnosis={results?.label || ''}
                history={'Patient history goes here'} // Replace with actual history if available
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;