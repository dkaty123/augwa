
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { Loader2, Check, ChevronRight } from 'lucide-react';

const DashboardPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // Start animation after component mounts
    setIsVisible(true);
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    // Fallback to a more reliable image source
    setIsImageLoaded(true);
  };

  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 transform transition-all duration-500 hover:shadow-augwa/20 hover:shadow-xl">
      {/* Image overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-augwa/30 to-transparent opacity-70 dark:from-augwa-950/40 dark:to-transparent z-10"></div>
      
      {/* Loading indicator */}
      {!isImageLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
          <Loader2 className="h-12 w-12 animate-spin text-augwa mb-3" />
          <span className="text-gray-500 dark:text-gray-400 text-sm animate-pulse">Loading dashboard preview...</span>
        </div>
      )}
      
      {/* Main dashboard image with fallback */}
      {!imageError ? (
        <img 
          src="https://images.unsplash.com/photo-1548611716-b7046352db42?q=80&w=2070&auto=format&fit=crop" 
          alt="Augwa dashboard" 
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={`w-full h-auto object-cover rounded-xl transition-opacity duration-500 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ height: '550px', objectPosition: 'center 30%' }}
        />
      ) : (
        // Fallback image if original fails to load
        <img 
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
          alt="Augwa dashboard" 
          className="w-full h-auto object-cover rounded-xl"
          style={{ height: '550px', objectPosition: 'center 30%' }}
        />
      )}
      
      {/* Interactive floating panel - only show when image is loaded */}
      {isImageLoaded && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-6 md:p-8 rounded-xl max-w-md mx-4 shadow-xl border border-gray-200 dark:border-gray-700 transform transition-transform duration-500 hover:scale-105">
            <div className="bg-augwa/10 dark:bg-augwa/20 p-2 rounded-full inline-flex items-center mb-4">
              <span className="text-xs font-semibold text-augwa-600 dark:text-augwa-400">Premium Software</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white">Ready to boost your profits?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join over 1,200 cleaning professionals who save <strong className="text-augwa-600 dark:text-augwa-400">15+ hours per week</strong> using Augwa.
            </p>
            
            <div className="mb-6 space-y-2">
              {[
                "Automated scheduling & reminders",
                "Client management & communication",
                "Digital payments & invoicing",
                "Detailed business insights"
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="mr-2 bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
                    <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            
            <Link
              to="#pricing"
              className="w-full block text-center px-6 py-3 rounded-full bg-augwa text-white font-medium hover:bg-augwa-600 transition-all duration-300 shadow-md hover:shadow-lg button-shine group"
            >
              Start Your Free Trial
              <ChevronRight className="inline-block ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-3">
              No credit card required • 14-day free trial
            </p>
          </div>
        </motion.div>
      )}
      
      {/* Decorative elements */}
      <div className="absolute top-4 left-4 bg-white/80 dark:bg-gray-800/80 p-2 rounded-lg shadow-md z-20 backdrop-blur-sm hidden md:block">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-rose-500"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
