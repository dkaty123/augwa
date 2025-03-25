
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const DashboardPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
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

  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
      {/* Image overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-augwa/30 to-transparent opacity-70 dark:from-augwa-950/40 dark:to-transparent z-10"></div>
      
      {/* Main dashboard image with loading state */}
      {!isImageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <Loader2 className="h-8 w-8 animate-spin text-augwa" />
        </div>
      )}
      
      <img 
        src="https://images.unsplash.com/photo-1548611716-b7046352db42?q=80&w=2070&auto=format&fit=crop" 
        alt="Augwa dashboard" 
        onLoad={handleImageLoad}
        className={`w-full h-auto object-cover rounded-xl transition-opacity duration-500 ${
          isImageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ height: '550px', objectPosition: 'center 30%' }}
      />
      
      {/* Interactive floating panel - only show when image is loaded */}
      {isImageLoaded && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-6 md:p-8 rounded-xl max-w-md mx-4 shadow-xl border border-gray-200 dark:border-gray-700 transform transition-transform duration-500 hover:scale-105">
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white">Ready to boost your profits?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join over 1,200 cleaning professionals who save <strong className="text-augwa-600 dark:text-augwa-400">15+ hours per week</strong> using Augwa.
            </p>
            <Link
              to="#pricing"
              className="w-full block text-center px-6 py-3 rounded-full bg-augwa text-white font-medium hover:bg-augwa-600 transition-all duration-300 shadow-md hover:shadow-lg button-shine"
            >
              Start Your Free Trial
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default DashboardPreview;
