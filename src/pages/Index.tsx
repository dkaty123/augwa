
import React, { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import PricingCalculator from "@/components/PricingCalculator";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import MiniDashboard from "@/components/MiniDashboard";
import StatisticsBanner from "@/components/StatisticsBanner";
import InteractiveDemo from "@/components/InteractiveDemo";
import { useParallax } from "@/hooks/useParallax";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const parallaxRef = useRef(null);
  
  // Use the parallax effect
  useParallax(parallaxRef);
  
  // Add smooth scrolling for anchor links and lazy loading
  useEffect(() => {
    // Mark page as loaded
    setIsLoaded(true);

    // Lazy load images as they come into view
    const lazyImages = document.querySelectorAll('.lazy-image');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy-image');
            img.classList.add('animate-fade-in');
            observer.unobserve(img);
          }
        });
      });

      lazyImages.forEach(img => {
        imageObserver.observe(img);
      });
    } else {
      // Fallback for browsers without intersection observer
      lazyImages.forEach(img => {
        const image = img as HTMLImageElement;
        image.src = image.dataset.src || '';
      });
    }

    // Enhance scroll animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-active');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        
        if (element) {
          // Create smooth scrolling with easing
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - 80;
          const startPosition = window.scrollY;
          const distance = offsetPosition - startPosition;
          let startTime: number | null = null;
          
          const duration = 800;
          
          const easeInOutQuad = (t: number) => {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
          };
          
          const animateScroll = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(Math.min(timeElapsed / duration, 1));
            window.scrollTo(0, startPosition + distance * run);
            
            if (timeElapsed < duration) {
              requestAnimationFrame(animateScroll);
            }
          };
          
          requestAnimationFrame(animateScroll);
          
          // Update URL without page reload
          window.history.pushState(null, '', target.getAttribute('href') || '');
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div 
      ref={parallaxRef} 
      className={`min-h-screen bg-gradient-to-b from-white to-augwa-50/30 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <div className="fixed top-0 left-0 w-full h-full bg-grid-pattern opacity-5 pointer-events-none z-0"></div>
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300">
          <StatisticsBanner />
        </div>
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-500">
          <Features />
        </div>
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-700">
          <InteractiveDemo />
        </div>
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-900">
          <MiniDashboard />
        </div>
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-1100">
          <Testimonials />
        </div>
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-1300">
          <Pricing />
        </div>
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-1500">
          <PricingCalculator />
        </div>
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-1700">
          <FAQ />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
