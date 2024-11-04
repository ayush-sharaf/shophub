import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle } from 'lucide-react';

export const PaymentFailure: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <XCircle className="mx-auto h-16 w-16 text-red-500" />
          <h2 className="mt-4 text-3xl font-bold text-gray-900">Payment Failed</h2>
          <p className="mt-2 text-gray-600">
            We couldn't process your payment. Please try again.
          </p>
          <div className="mt-6">
            <Link
              to="/checkout"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-200"
            >
              Try Again
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};