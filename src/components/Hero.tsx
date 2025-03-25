import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParallax } from '@/hooks/useParallax';
import { ArrowRight, Calendar, CreditCard, Bell, Users, ChevronDown, Star, Shield, Sparkles } from 'lucide-react';
import DashboardPreview from './DashboardPreview';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { offset } = useParallax(heroRef);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  
  // Calculate parallax effects
  const translateY = offset * 0.4;
  const translateYSlow = offset * 0.2;
  const translateYFast = offset * 0.6;
  const rotate = offset * 0.02;
  
  useEffect(() => {
    // Trigger animations after a short delay for a smoother entry
    const timer = setTimeout(() => {
      setIsLoaded(true);
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
        <div
          className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-augwa/10 dark:bg-augwa/5 blur-3xl z-0"
          style={{ transform: `translate3d(${translateY * -0.5}px, ${translateY * 0.5}px, 0)` }}
        ></div>
        
        {/* Circle 2 */}
        <div
          className="absolute top-[40%] right-[15%] w-96 h-96 rounded-full bg-augwa-100 dark:bg-augwa-900/20 blur-3xl z-0"
          style={{ transform: `translate3d(${translateY * 0.3}px, ${translateY * -0.3}px, 0)` }}
        ></div>
        
        {/* Blob */}
        <div
          className="absolute bottom-[10%] left-[20%] w-72 h-72 rounded-full bg-blue-200/50 dark:bg-blue-900/10 blur-3xl z-0"
          style={{ transform: `translate3d(${translateYFast * 0.2}px, ${translateYFast * -0.2}px, 0)` }}
        ></div>

        {/* New floating elements */}
        <div className="absolute top-[30%] right-[30%] opacity-70 animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 transform rotate-12">
            <Calendar className="h-8 w-8 text-augwa-500" />
          </div>
        </div>
        
        <div className="absolute bottom-[35%] left-[35%] opacity-70 animate-float" style={{ animationDelay: '1.2s' }}>
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 transform -rotate-6">
            <CreditCard className="h-8 w-8 text-green-500" />
          </div>
        </div>
        
        <div className="absolute top-[25%] left-[25%] opacity-70 animate-float" style={{ animationDelay: '0.8s' }}>
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 transform rotate-3">
            <Star className="h-8 w-8 text-amber-500" />
          </div>
        </div>
        
        <div className="absolute bottom-[20%] right-[20%] opacity-70 animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 transform -rotate-12">
            <Users className="h-8 w-8 text-purple-500" />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm">
            <Shield className="w-5 h-5 text-green-500 mr-2" />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Trusted by 1,200+ cleaning businesses</span>
            <div className="ml-2 flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white dark:border-gray-800 flex items-center justify-center overflow-hidden">
                  <img 
                    src={`https://randomuser.me/api/portraits/thumb/men/${30 + i}.jpg`} 
                    alt={`User ${i}`}
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="w-6 h-6 rounded-full bg-augwa flex items-center justify-center text-xs text-white border-2 border-white dark:border-gray-800">
                +
              </div>
            </div>
          </div>
          
          <h1 
            className={getAnimationClass(100)}
            style={{ transform: `translateY(${translateYSlow * -0.3}px)` }}
          >
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 pb-2">
              Manage Your Cleaning Business
            </span>
            <span className="block mt-2 text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-augwa to-augwa-dark dark:from-augwa-300 dark:to-augwa-500">
              Without The Headaches
            </span>
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto ${getAnimationClass(200)}`}
            style={{ transform: `translateY(${translateYSlow * -0.2}px)` }}
          >
            <span className="font-semibold">Stop wasting $4,380/year</span> on admin tasks! Augwa automates scheduling, 
            payments, staff management, and client communications so you can focus on growing your cleaning business.
          </p>
          
          <div 
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
          </div>
          
          {/* New Trust indicators */}
          <div className={`mt-10 flex flex-wrap justify-center gap-6 ${getAnimationClass(400)}`}>
            <div className="flex items-center">
              <Sparkles className="h-5 w-5 text-amber-500 mr-2" />
              <span className="text-sm text-gray-600 dark:text-gray-300">5-star rated</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-sm text-gray-600 dark:text-gray-300">GDPR Compliant</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-purple-500 mr-2" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Award winning</span>
            </div>
          </div>
          
          {/* Feature highlights */}
          <div className={`mt-16 max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 ${getAnimationClass(400)}`}>
            {[
              { icon: Calendar, title: "Scheduling", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
              { icon: Bell, title: "Reminders", color: "bg-amber-500/10 text-amber-600 dark:text-amber-400" },
              { icon: CreditCard, title: "Payments", color: "bg-green-500/10 text-green-600 dark:text-green-400" },
              { icon: Users, title: "Staff Mgmt", color: "bg-purple-500/10 text-purple-600 dark:text-purple-400" }
            ].map((feature, i) => (
              <div 
                key={feature.title} 
                className="flex flex-col items-center p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  transitionDelay: `${i * 100}ms`,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isLoaded ? 1 : 0
                }}
              >
                <div className={`w-10 h-10 rounded-full ${feature.color} flex items-center justify-center mb-2`}>
                  <feature.icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* 3D Dashboard Preview */}
        <div 
          className={`relative mt-16 md:mt-24 max-w-5xl mx-auto ${getAnimationClass(500)}`}
          style={{ 
            transform: `translateY(${translateYSlow * -0.05}px) rotateX(${rotate}deg)`, 
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
        >
          <DashboardPreview />
          
          {/* Floating UI elements */}
          <div
            className="absolute -top-8 -left-8 md:top-auto md:-bottom-12 md:-left-12 animate-float z-20"
            style={{ transform: `translateZ(40px)` }}
          >
            <div className="glass-card p-4 border border-white/30 dark:border-white/10 shadow-xl transform rotate-6">
              <div className="flex items-center">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">New Booking Received</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Lakeside Estate, 4 bedrooms</p>
                </div>
              </div>
            </div>
          </div>
          
          <div
            className="absolute -bottom-8 -right-8 md:-top-12 md:-right-12 animate-float animation-delay-150 z-20"
            style={{ transform: `translateZ(30px)` }}
          >
            <div className="glass-card p-4 border border-white/30 dark:border-white/10 shadow-xl transform -rotate-3">
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Monthly Revenue</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">$14,835 <span className="text-green-500">↑ 23%</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* New floating card */}
          <div
            className="absolute -top-4 right-[20%] animate-float animation-delay-200 z-20 hidden md:block"
            style={{ transform: `translateZ(25px)`, animationDelay: '1.8s' }}
          >
            <div className="glass-card p-4 border border-white/30 dark:border-white/10 shadow-xl transform rotate-6">
              <div className="flex items-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                  <Star className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Customer Review</p>
                  <div className="flex items-center text-amber-500">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator - Only show when at top of page */}
        {showScrollIndicator && (
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 dark:text-gray-400 animate-bounce-soft">
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="h-5 w-5" />
          </div>
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
