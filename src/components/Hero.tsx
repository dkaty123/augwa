
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useParallax } from '@/hooks/useParallax';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { offset } = useParallax(heroRef);
  
  // Calculate parallax effects
  const translateY = offset * 0.4;
  const translateYSlow = offset * 0.2;
  const translateYFast = offset * 0.6;
  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center py-20 md:py-32 overflow-hidden"
      id="hero"
    >
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
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 pb-2 mb-6 animate-fade-in"
            style={{ transform: `translateY(${translateYSlow * -0.3}px)` }}
          >
            Manage Your Cleaning Business
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-augwa to-augwa-dark dark:from-augwa-300 dark:to-augwa-500 block mt-2">
              Efficiently
            </span>
          </h1>
          <p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in animation-delay-100"
            style={{ transform: `translateY(${translateYSlow * -0.2}px)` }}
          >
            Running your cleaning business is about to get easier and more affordable! 
            Augwa simplifies everything from scheduling to payments, crew management, and customer reminders — so you can focus on what matters.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-200"
            style={{ transform: `translateY(${translateYSlow * -0.1}px)` }}
          >
            <Link
              to="/login"
              className="px-8 py-3 rounded-full bg-augwa text-white font-medium hover:bg-augwa-600 active:bg-augwa-700 transition-all duration-300 shadow-lg hover:shadow-augwa-400/20 hover:scale-105 active:scale-95 flex items-center button-shine"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a 
              href="#calculator" 
              className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Calculate Savings
            </a>
          </div>
        </div>
        
        {/* Floating cleaning illustration */}
        <div 
          className="relative mt-16 md:mt-24 max-w-5xl mx-auto animate-fade-in animation-delay-300"
          style={{ transform: `translateY(${translateYSlow * -0.05}px)` }}
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
            <div className="absolute inset-0 bg-gradient-to-t from-augwa/20 to-transparent opacity-70 dark:from-augwa-950/40 dark:to-transparent"></div>
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Cleaning professional using Augwa app" 
              className="w-full h-auto object-cover rounded-xl"
              style={{ height: '450px', objectPosition: 'center 40%' }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-6 md:p-8 rounded-xl max-w-md mx-4 shadow-xl border border-gray-200 dark:border-gray-700 transform transition-transform duration-500 hover:scale-105">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white">Ready to simplify your operations?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Join over 1,000 cleaning professionals who use Augwa to save time, reduce costs, and improve customer satisfaction.
                </p>
                <Link
                  to="/login"
                  className="w-full block text-center px-6 py-3 rounded-full bg-augwa text-white font-medium hover:bg-augwa-600 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Start Your Free Trial
                </Link>
              </div>
            </div>
          </div>
          
          {/* Floating UI elements */}
          <div className="absolute -top-8 -left-8 md:top-auto md:-bottom-12 md:-left-12 animate-float">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 border border-gray-200 dark:border-gray-700 transform rotate-6">
              <div className="flex items-center">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Appointment Confirmed</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Tomorrow at 10:00 AM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-8 -right-8 md:-top-12 md:-right-12 animate-float animation-delay-150">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 border border-gray-200 dark:border-gray-700 transform -rotate-3">
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Payment Received</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">$249.00 from John Smith</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
