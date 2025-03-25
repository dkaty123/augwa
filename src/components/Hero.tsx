
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParallax } from '@/hooks/useParallax';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, CreditCard, Bell, Users, ChevronDown, Star, Shield, Sparkles } from 'lucide-react';
import DashboardPreview from './DashboardPreview';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

// Counter animation for numbers
const AnimatedCounter = ({ value, duration = 2000, className = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef(null);
  
  useEffect(() => {
    // Reset animation when value changes
    countRef.current = 0;
    startTimeRef.current = null;
    
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuad = t => t * (2 - t);
      const easedProgress = easeOutQuad(percentage);
      
      countRef.current = Math.floor(easedProgress * value);
      setCount(countRef.current);
      
      if (percentage < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value); // Ensure we end at the exact value
      }
    };
    
    requestAnimationFrame(animate);
    
    return () => {
      startTimeRef.current = null;
    };
  }, [value, duration]);
  
  return <span className={className}>{count.toLocaleString()}</span>;
};

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { offset } = useParallax(heroRef);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  
  // Calculate parallax effects
  const translateY = offset * 0.4;
  const translateYSlow = offset * 0.2;
  const translateYFast = offset * 0.6;
  const rotate = offset * 0.02;
  
  useEffect(() => {
    // Trigger animations after a short delay for a smoother entry
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setIsVisible(true);
    }, 300);
    
    // Hide scroll indicator after user scrolls
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Animation classes with staggered timing
  const getAnimationClass = (delay: number) => {
    return `opacity-0 translate-y-8 ${isLoaded ? 'animate-fade-up' : ''} transition-all duration-1000 ease-out` + 
           (isLoaded ? ` animation-delay-${delay}` : '');
  };
  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-16" /* Added pt-16 to account for navbar */
      id="hero"
    >
      {/* Dynamic video background with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-augwa-600/20 via-augwa-500/5 to-white dark:from-augwa-900/40 dark:via-augwa-800/10 dark:to-gray-900 z-10"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 object-cover w-full h-full opacity-25 dark:opacity-15"
        >
          <source src="https://assets.codepen.io/2018358/lava-lamp.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Background grid pattern with parallax effect */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.02] z-0"
        style={{ transform: `translateY(${translateYSlow}px)` }}
      ></div>
      
      {/* Floating shapes with parallax effect */}
      <div className="absolute w-full h-full overflow-hidden pointer-events-none">
        {/* Circle 1 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-augwa/10 dark:bg-augwa/5 blur-3xl z-0"
          style={{ transform: `translate3d(${translateY * -0.5}px, ${translateY * 0.5}px, 0)` }}
        ></motion.div>
        
        {/* Circle 2 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute top-[40%] right-[15%] w-96 h-96 rounded-full bg-augwa-100 dark:bg-augwa-900/20 blur-3xl z-0"
          style={{ transform: `translate3d(${translateY * 0.3}px, ${translateY * -0.3}px, 0)` }}
        ></motion.div>
        
        {/* Blob */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          className="absolute bottom-[10%] left-[20%] w-72 h-72 rounded-full bg-blue-200/50 dark:bg-blue-900/10 blur-3xl z-0"
          style={{ transform: `translate3d(${translateYFast * 0.2}px, ${translateYFast * -0.2}px, 0)` }}
        ></motion.div>

        {/* New floating elements with motion */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="absolute top-[30%] right-[30%] animate-float" 
          style={{ animationDelay: '0.5s' }}
        >
          <motion.div 
            animate={{ rotate: [12, 8, 12] }} 
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 transform"
          >
            <Calendar className="h-8 w-8 text-augwa-500" />
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.7 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="absolute bottom-[35%] left-[35%] animate-float" 
          style={{ animationDelay: '1.2s' }}
        >
          <motion.div 
            animate={{ rotate: [-6, -10, -6] }} 
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 transform"
          >
            <CreditCard className="h-8 w-8 text-green-500" />
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="absolute top-[25%] left-[25%] animate-float" 
          style={{ animationDelay: '0.8s' }}
        >
          <motion.div 
            animate={{ rotate: [3, 6, 3] }} 
            transition={{ duration: 4.5, repeat: Infinity, repeatType: "reverse" }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 transform"
          >
            <Star className="h-8 w-8 text-amber-500" />
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.7 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          className="absolute bottom-[20%] right-[20%] animate-float" 
          style={{ animationDelay: '1.5s' }}
        >
          <motion.div 
            animate={{ rotate: [-12, -15, -12] }} 
            transition={{ duration: 5.5, repeat: Infinity, repeatType: "reverse" }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 transform"
          >
            <Users className="h-8 w-8 text-purple-500" />
          </motion.div>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative py-20 md:py-32">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div 
            variants={itemVariants}
            className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <Shield className="w-5 h-5 text-green-500 mr-2" />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Trusted by <AnimatedCounter value={1200} className="font-bold text-augwa" />+ cleaning businesses</span>
            <div className="ml-2 flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <motion.div 
                  key={i} 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1 + (i * 0.2) }}
                  className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white dark:border-gray-800 flex items-center justify-center overflow-hidden"
                >
                  <img 
                    src={`https://randomuser.me/api/portraits/thumb/men/${30 + i}.jpg`} 
                    alt={`User ${i}`}
                    className="object-cover"
                  />
                </motion.div>
              ))}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="w-6 h-6 rounded-full bg-augwa flex items-center justify-center text-xs text-white border-2 border-white dark:border-gray-800"
              >
                +
              </motion.div>
            </div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className={getAnimationClass(100)}
            style={{ transform: `translateY(${translateYSlow * -0.3}px)` }}
          >
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 pb-2">
              Manage Your Cleaning Business
            </span>
            <span className="block mt-2 text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-augwa to-augwa-dark dark:from-augwa-300 dark:to-augwa-500">
              Without The Headaches
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className={`text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto ${getAnimationClass(200)}`}
            style={{ transform: `translateY(${translateYSlow * -0.2}px)` }}
          >
            <span className="font-semibold">Stop wasting $<AnimatedCounter value={4380} className="font-bold text-augwa-600 dark:text-augwa-400" />/year</span> on admin tasks! Augwa automates scheduling, 
            payments, staff management, and client communications so you can focus on growing your cleaning business.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${getAnimationClass(300)}`}
            style={{ transform: `translateY(${translateYSlow * -0.1}px)` }}
          >
            <Link
              to="#pricing"
              className="group px-8 py-3 rounded-full bg-augwa text-white font-medium hover:bg-augwa-600 active:bg-augwa-700 transition-all duration-300 shadow-lg hover:shadow-augwa-400/20 hover:scale-105 active:scale-95 flex items-center button-shine"
            >
              Start Saving Today
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a 
              href="#calculator" 
              className="px-8 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-300 dark:bg-gray-800/80 dark:border-gray-700 text-gray-800 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-200 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Calculate Your Savings
            </a>
          </motion.div>
          
          {/* Trust indicators with motion */}
          <motion.div 
            variants={itemVariants}
            className={`mt-10 flex flex-wrap justify-center gap-6 ${getAnimationClass(400)}`}
          >
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Sparkles className="h-5 w-5 text-amber-500 mr-2" />
              <span className="text-sm text-gray-600 dark:text-gray-300">5-star rated</span>
            </motion.div>
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Shield className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-sm text-gray-600 dark:text-gray-300">GDPR Compliant</span>
            </motion.div>
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Star className="h-5 w-5 text-purple-500 mr-2" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Award winning</span>
            </motion.div>
          </motion.div>
          
          {/* Feature highlights with motion */}
          <motion.div 
            className={`mt-16 max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 ${getAnimationClass(400)}`}
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {[
              { icon: Calendar, title: "Scheduling", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
              { icon: Bell, title: "Reminders", color: "bg-amber-500/10 text-amber-600 dark:text-amber-400" },
              { icon: CreditCard, title: "Payments", color: "bg-green-500/10 text-green-600 dark:text-green-400" },
              { icon: Users, title: "Staff Mgmt", color: "bg-purple-500/10 text-purple-600 dark:text-purple-400" }
            ].map((feature, i) => (
              <motion.div 
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="flex flex-col items-center p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-full ${feature.color} flex items-center justify-center mb-2`}>
                  <feature.icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{feature.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* 3D Dashboard Preview with motion */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={`relative mt-16 md:mt-24 max-w-5xl mx-auto ${getAnimationClass(500)}`}
          style={{ 
            transform: `translateY(${translateYSlow * -0.05}px) rotateX(${rotate}deg)`, 
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
        >
          <DashboardPreview />
        </motion.div>
        
        {/* Scroll down indicator with motion - Only show when at top of page */}
        {showScrollIndicator && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 dark:text-gray-400 animate-bounce-soft"
          >
            <motion.span 
              animate={{ y: [0, 5, 0] }} 
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="text-sm mb-2"
            >
              Scroll Down
            </motion.span>
            <motion.div
              animate={{ y: [0, 5, 0] }} 
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", delay: 0.2 }}
            >
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </motion.div>
        )}
      </div>
      
      {/* Curved divider at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0Z" 
            className="fill-white dark:fill-gray-900"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
