
import React, { useState, useEffect } from 'react';
import { Check, Clock, DollarSign, XCircle, Percent } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatProps {
  value: number;
  label: string;
  icon: React.ReactNode;
  prefix?: string;
  suffix?: string;
}

const StatisticsBanner = () => {
  const [inView, setInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    const element = document.getElementById('stats-banner');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const stats: StatProps[] = [
    {
      value: 93,
      label: "Reduction in no-shows",
      icon: <XCircle className="w-8 h-8 text-rose-500" />,
      suffix: "%"
    },
    {
      value: 75,
      label: "Less time spent on admin",
      icon: <Clock className="w-8 h-8 text-amber-500" />,
      suffix: "%"
    },
    {
      value: 4380,
      label: "Annual savings for small teams",
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      prefix: "$"
    },
    {
      value: 32,
      label: "Increase in repeat clients",
      icon: <Percent className="w-8 h-8 text-purple-500" />,
      suffix: "%"
    }
  ];

  return (
    <section id="stats-banner" className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-augwa-50/50 to-augwa-100/30 dark:from-augwa-900/30 dark:to-augwa-800/20 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Proven Results for Cleaning Businesses
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Join hundreds of businesses already increasing their profitability with Augwa
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard 
              key={index} 
              stat={stat} 
              animate={inView} 
              delay={index * 150} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, animate, delay }: { stat: StatProps; animate: boolean; delay: number }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (animate) {
      const duration = 2000; // Animation duration in ms
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      const incrementPerFrame = stat.value / totalFrames;
      
      let frame = 0;
      const timer = setTimeout(() => {
        const counter = setInterval(() => {
          frame++;
          const progress = Math.min(frame / totalFrames, 1);
          setCount(Math.floor(stat.value * progress));
          
          if (frame === totalFrames) {
            clearInterval(counter);
          }
        }, frameDuration);
        
        return () => clearInterval(counter);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [animate, stat.value, delay]);
  
  return (
    <div 
      className={cn(
        "glass-card p-6 transition-all duration-700 transform",
        animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="bg-white/80 dark:bg-gray-800/80 p-3 rounded-lg shadow-sm">
          {stat.icon}
        </div>
        <div className="bg-white/50 dark:bg-gray-800/50 px-3 py-1 rounded-full flex items-center">
          <Check className="w-4 h-4 text-green-500 mr-1" />
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Verified</span>
        </div>
      </div>
      
      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
        {stat.prefix}{count.toLocaleString()}{stat.suffix}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
    </div>
  );
};

export default StatisticsBanner;
