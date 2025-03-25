
import React, { useState, useEffect } from 'react';
import { Check, Clock, DollarSign, XCircle, Percent, ArrowUpRight, Users, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatProps {
  value: number;
  label: string;
  icon: React.ReactNode;
  prefix?: string;
  suffix?: string;
  color?: string;
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
      icon: <XCircle className="w-8 h-8" />,
      suffix: "%",
      color: "bg-rose-500/10 text-rose-500 dark:bg-rose-500/20 dark:text-rose-400"
    },
    {
      value: 75,
      label: "Less time spent on admin",
      icon: <Clock className="w-8 h-8" />,
      suffix: "%",
      color: "bg-amber-500/10 text-amber-500 dark:bg-amber-500/20 dark:text-amber-400"
    },
    {
      value: 4380,
      label: "Annual savings for small teams",
      icon: <DollarSign className="w-8 h-8" />,
      prefix: "$",
      color: "bg-green-500/10 text-green-500 dark:bg-green-500/20 dark:text-green-400"
    },
    {
      value: 32,
      label: "Increase in repeat clients",
      icon: <Percent className="w-8 h-8" />,
      suffix: "%",
      color: "bg-purple-500/10 text-purple-500 dark:bg-purple-500/20 dark:text-purple-400"
    }
  ];
  
  const additionalStats: StatProps[] = [
    {
      value: 1200,
      label: "Active cleaning businesses",
      icon: <Users className="w-8 h-8" />,
      prefix: "",
      color: "bg-blue-500/10 text-blue-500 dark:bg-blue-500/20 dark:text-blue-400"
    },
    {
      value: 45000,
      label: "Monthly bookings managed",
      icon: <Calendar className="w-8 h-8" />,
      prefix: "",
      color: "bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/20 dark:text-indigo-400"
    }
  ];

  return (
    <section id="stats-banner" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-augwa-50/50 to-augwa-100/30 dark:from-augwa-900/30 dark:to-augwa-800/20 z-0"></div>
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-augwa/10 rounded-full blur-3xl -mr-32 -mb-32 z-0"></div>
      <div className="absolute left-0 top-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -ml-48 -mt-48 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4 border border-gray-200 dark:border-gray-700 shadow-sm">
            <span className="text-sm font-semibold text-augwa-600 dark:text-augwa-400 mr-2">Verified Results</span>
            <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
              <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Real Impact for <span className="text-gradient">Cleaning Businesses</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join hundreds of businesses already increasing their profitability with Augwa's all-in-one management solution
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <StatCard 
              key={index} 
              stat={stat} 
              animate={inView} 
              delay={index * 150} 
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {additionalStats.map((stat, index) => (
            <StatCard 
              key={index} 
              stat={stat} 
              animate={inView} 
              delay={(stats.length + index) * 150}
              large={true}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            className="inline-flex items-center text-augwa-600 dark:text-augwa-400 font-medium hover:underline group"
            to="#calculator"
          >
            Calculate your potential savings
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: StatProps;
  animate: boolean;
  delay: number;
  large?: boolean;
}

const StatCard = ({ stat, animate, delay, large = false }: StatCardProps) => {
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
        animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        large ? "p-8" : ""
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={cn("p-3 rounded-lg shadow-sm", stat.color || "bg-white/80 dark:bg-gray-800/80")}>
          {stat.icon}
        </div>
        <div className="bg-white/50 dark:bg-gray-800/50 px-3 py-1 rounded-full flex items-center">
          <Check className="w-4 h-4 text-green-500 mr-1" />
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Verified</span>
        </div>
      </div>
      
      <h3 className={cn("font-bold text-gray-900 dark:text-white mb-2", 
        large ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"
      )}>
        {stat.prefix}{count.toLocaleString()}{stat.suffix}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
      
      {large && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center text-green-600 dark:text-green-400">
            <ArrowUpRight className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">Growing month over month</span>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper component for Link
const Link = ({ className, to, children }: { className?: string, to: string, children: React.ReactNode }) => (
  <a href={to} className={className}>{children}</a>
);

export default StatisticsBanner;
