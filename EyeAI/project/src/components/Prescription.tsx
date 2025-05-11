import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

interface Recommendation {
  causes: string[];
  treatments: string[];
}

interface PrescriptionProps {
  diagnosis: string; // Diagnosis passed as a prop
  history: string;   // Patient history passed as a prop
}

const Prescription: React.FC<PrescriptionProps> = ({ diagnosis, history }) => {
  const [recommendations, setRecommendations] = useState<Recommendation | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('http://127.0.0.1:5000/api/do_all', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            diagnosis,
            history,
            language: 'en',
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch recommendations');
        }

        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }

        setRecommendations({
          causes: data.causes.split('\n'), // Split causes into an array
          treatments: data.treatments.split('\n'), // Split treatments into an array
        });
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [diagnosis, history]);

  return (
    <div>
      <div className="border border-gray-200 rounded-lg p-6 mb-6">
        <h4 className="text-md font-semibold mb-3">Treatment Recommendations</h4>
        {loading ? (
          <p>Loading recommendations...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : recommendations ? (
          <div className="space-y-6">
            <motion.div
              className="border border-gray-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="p-4">
                <div className="mb-3">
                  <h6 className="text-sm font-medium mb-2">Likely Causes:</h6>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 pl-1">
                    {recommendations.causes.map((cause, i) => (
                      <li key={i}>{cause}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h6 className="text-sm font-medium mb-2">Recommended Treatment:</h6>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 pl-1">
                    {recommendations.treatments.map((treatment, i) => (
                      <li key={i}>{treatment}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          <p>No recommendations available.</p>
        )}
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start">
          <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 mr-2" />
          <div>
            <p className="text-sm text-yellow-700 font-medium">Important Medical Disclaimer</p>
            <p className="text-sm text-yellow-600 mt-1">
              This AI-generated prescription is for informational purposes only and is not a substitute for professional 
              medical advice, diagnosis, or treatment. Always seek the advice of your ophthalmologist or other qualified 
              health provider with any questions you may have regarding your eye condition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prescription;