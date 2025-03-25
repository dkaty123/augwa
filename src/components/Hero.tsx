
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Calendar, BellRing, CreditCard, Users } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const parallaxRef = useRef(null);
  const { offset } = useParallax(parallaxRef);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Initialize 3D dashboard rotation
    const dashboardCard = document.querySelector('.dashboard-card');
    if (dashboardCard) {
      dashboardCard.addEventListener('mousemove', handleCardMove);
      
      return () => {
        dashboardCard.removeEventListener('mousemove', handleCardMove);
      };
    }
  }, []);
  
  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const handleCardLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    card.style.transition = 'transform 0.5s ease';
  };

  return (
    <section ref={parallaxRef} className="relative min-h-screen pt-28 lg:pt-36 overflow-hidden">
      {/* Full-width background image with parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-10 dark:opacity-5"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          transform: `translateY(${offset * 0.5}px)`
        }}
      ></div>
      
      {/* Animated background gradient */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 right-0 w-[800px] h-[800px] bg-augwa-100 dark:bg-augwa-900/30 rounded-full opacity-50 dark:opacity-30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-40 -right-20 w-[600px] h-[600px] bg-augwa-200 dark:bg-augwa-800/40 rounded-full opacity-30 dark:opacity-20 blur-3xl animate-pulse-slow" style={{animationDelay: "1.5s"}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-6 items-center">
          <div className="w-full lg:w-1/2 lg:pr-8 space-y-6 stagger-children">
            <div className="inline-flex items-center rounded-full bg-augwa-50 dark:bg-augwa-900/40 px-3 py-1 text-sm font-medium text-augwa-600 dark:text-augwa-300 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-augwa-400 mr-2"></span>
              <span>Simplify your cleaning business</span>
            </div>

            <h1 className="title-text leading-tight text-gray-900 dark:text-white">
              Manage Your Cleaning Business <span className="text-gradient">Efficiently</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
              Running your cleaning business is about to get easier and more affordable! Augwa simplifies everything from scheduling to payments, crew management, and customer reminders — so you can focus on what matters.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-augwa-500 dark:text-augwa-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Automated scheduling</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-augwa-500 dark:text-augwa-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Client reminders</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-augwa-500 dark:text-augwa-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Payment processing</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-augwa-500 dark:text-augwa-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Staff coordination</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#" 
                className="group inline-flex items-center justify-center px-6 py-3 bg-augwa text-white text-base font-medium rounded-full shadow-lg shadow-augwa-400/20 hover:bg-augwa-600 hover:shadow-augwa-500/30 transition-all duration-300 active:scale-95 relative overflow-hidden button-shine"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span className="absolute inset-0 bg-gradient-to-r from-augwa to-augwa-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
              </a>
              <a 
                href="#features" 
                className="group inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-base font-medium rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 active:scale-95"
              >
                Learn More
                <span className="ml-1 text-augwa group-hover:ml-2 transition-all duration-300">→</span>
              </a>
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                <span className="flex -space-x-2 mr-3">
                  {[1, 2, 3, 4].map((i) => (
                    <span key={i} className="inline-block h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 ring-2 ring-white dark:ring-gray-800 overflow-hidden animate-fade-in" style={{animationDelay: `${i * 0.1}s`}}>
                      <div className="h-full w-full bg-gradient-to-br from-augwa-300 to-augwa-500 dark:from-augwa-600 dark:to-augwa-800 opacity-60 dark:opacity-80"></div>
                    </span>
                  ))}
                </span>
                <span>Trusted by over <b className="text-augwa-600 dark:text-augwa-400">500+</b> cleaning businesses</span>
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Decorative elements with animations */}
              <div className="absolute top-0 -left-4 w-72 h-72 bg-augwa-200 dark:bg-augwa-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light opacity-10 filter blur-3xl animate-pulse-slow"></div>
              <div className="absolute -bottom-8 right-4 w-72 h-72 bg-augwa-200 dark:bg-augwa-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light opacity-10 filter blur-3xl animate-pulse-slow" style={{animationDelay: "1s"}}></div>

              {/* 3D floating dashboard card */}
              <div 
                className={`dashboard-card relative glass-card p-6 sm:p-8 w-full shadow-xl transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                onMouseMove={handleCardMove}
                onMouseLeave={handleCardLeave}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `perspective(1000px) translateZ(0) rotateX(0) rotateY(0)`,
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-augwa via-augwa-400 to-augwa"></div>
                <div className="transform-style-3d" style={{ transform: 'translateZ(20px)' }}>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Dashboard Overview</h3>
                    <span className="text-xs font-medium pill-tag bg-augwa-50 dark:bg-augwa-900/60 text-augwa-600 dark:text-augwa-300 transform transition-transform hover:scale-105" style={{ transform: 'translateZ(30px)' }}>Live Demo</span>
                  </div>

                  <div className="space-y-5">
                    <div className="flex items-center justify-between bg-gray-50/80 dark:bg-gray-800/50 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors duration-300" style={{ transform: 'translateZ(15px)' }}>
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-augwa-500 dark:text-augwa-400 mr-3" />
                        <div>
                          <p className="text-sm font-medium dark:text-white">Today's Appointments</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">4 cleanings scheduled</p>
                        </div>
                      </div>
                      <button className="text-xs bg-white dark:bg-gray-700 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-augwa-50 dark:hover:bg-gray-600 transition-colors duration-300">View</button>
                    </div>
                    
                    <div className="flex items-center justify-between bg-augwa-50/60 dark:bg-augwa-900/20 p-3 rounded-lg hover:bg-augwa-50/80 dark:hover:bg-augwa-900/30 transition-colors duration-300" style={{ transform: 'translateZ(25px)' }}>
                      <div className="flex items-center">
                        <BellRing className="h-5 w-5 text-augwa-500 dark:text-augwa-400 mr-3" />
                        <div>
                          <p className="text-sm font-medium dark:text-white">Client Reminders</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">12 reminders sent today</p>
                        </div>
                      </div>
                      <button className="text-xs bg-white dark:bg-gray-700 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-augwa-50 dark:hover:bg-gray-600 transition-colors duration-300">Manage</button>
                    </div>
                    
                    <div className="flex items-center justify-between bg-gray-50/80 dark:bg-gray-800/50 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors duration-300" style={{ transform: 'translateZ(20px)' }}>
                      <div className="flex items-center">
                        <CreditCard className="h-5 w-5 text-augwa-500 dark:text-augwa-400 mr-3" />
                        <div>
                          <p className="text-sm font-medium dark:text-white">Payments</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">$1,240 received this week</p>
                        </div>
                      </div>
                      <button className="text-xs bg-white dark:bg-gray-700 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-augwa-50 dark:hover:bg-gray-600 transition-colors duration-300">Details</button>
                    </div>
                    
                    <div className="flex items-center justify-between bg-gray-50/80 dark:bg-gray-800/50 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors duration-300" style={{ transform: 'translateZ(15px)' }}>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-augwa-500 dark:text-augwa-400 mr-3" />
                        <div>
                          <p className="text-sm font-medium dark:text-white">Crew Management</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">6 active team members</p>
                        </div>
                      </div>
                      <button className="text-xs bg-white dark:bg-gray-700 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-augwa-50 dark:hover:bg-gray-600 transition-colors duration-300">View</button>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700" style={{ transform: 'translateZ(10px)' }}>
                    <div className="flex items-center">
                      <div className="loader-wave">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">Live data updating...</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification elements */}
              <div className="absolute -top-6 -right-6 glass-panel dark:neo-blur px-3 py-2 rounded-lg text-sm font-medium shadow-lg animate-float" style={{animationDelay: "0.7s"}}>
                <div className="flex items-center space-x-2">
                  <span className="flex h-2 w-2 rounded-full bg-green-400"></span>
                  <span className="dark:text-white">New booking received</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 glass-panel dark:neo-blur px-3 py-2 rounded-lg text-sm font-medium shadow-lg animate-float" style={{animationDelay: "1.3s"}}>
                <div className="flex items-center space-x-2">
                  <span className="flex h-2 w-2 rounded-full bg-augwa-400"></span>
                  <span className="dark:text-white">$367 saved this month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 w-full h-32 bg-gradient-to-b from-transparent to-augwa-50/50 dark:to-augwa-900/10"></div>
    </section>
  );
};

export default Hero;
