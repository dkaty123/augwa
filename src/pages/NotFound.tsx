
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-augwa-50/10">
      <div className="text-center max-w-md px-4">
        <div className="mb-6 flex items-center justify-center">
          <div className="relative h-16 w-16">
            <div className="absolute inset-0 bg-augwa rounded-lg rotate-6 opacity-70"></div>
            <div className="absolute inset-0 bg-augwa-600 rounded-lg -rotate-6"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl">A</div>
          </div>
        </div>
        
        <h1 className="text-6xl font-bold mb-4 text-gray-900">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! This page seems to have been swept away.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 justify-center">
          <a 
            href="/" 
            className="inline-flex items-center justify-center px-5 py-3 bg-augwa text-white font-medium rounded-full shadow-sm hover:bg-augwa-600 transition-colors"
          >
            <Home className="mr-2 h-5 w-5" />
            Return to Home
          </a>
          <button 
            onClick={() => window.history.back()} 
            className="inline-flex items-center justify-center px-5 py-3 bg-white text-gray-700 font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
