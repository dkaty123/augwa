
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollPosition / windowHeight) * 100;
      
      setScrollProgress(progress);
      
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-height flex flex-col",
        scrolled 
          ? "bg-white/80 dark:bg-gray-900/90 backdrop-blur-lg shadow-sm border-b border-slate-200/50 dark:border-gray-800/50" 
          : "bg-transparent"
      )}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-augwa-400 to-augwa-600 z-50" style={{ width: `${scrollProgress}%` }}></div>
      
      <div className="container mx-auto px-4 flex justify-between items-center h-full">
        <a 
          href="#" 
          className="flex items-center group"
        >
          <div className="relative h-9 w-9 mr-2 transition-transform group-hover:scale-110 duration-300">
            <div className="absolute inset-0 bg-augwa rounded-lg rotate-3 opacity-70 group-hover:rotate-6 transition-all duration-300"></div>
            <div className="absolute inset-0 bg-augwa-600 rounded-lg -rotate-3 group-hover:-rotate-6 transition-all duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold">A</div>
          </div>
          <span className="text-xl font-display font-bold dark:text-white">Augwa</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          <a 
            href="#features" 
            className="px-4 py-2 text-sm font-medium text-foreground/80 dark:text-white/80 hover:text-foreground dark:hover:text-white transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-gray-800 relative overflow-hidden before:absolute before:inset-0 before:bg-augwa-100 dark:before:bg-augwa-900 before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition-transform before:duration-300 before:z-[-1]"
          >
            Features
          </a>
          <a 
            href="#pricing" 
            className="px-4 py-2 text-sm font-medium text-foreground/80 dark:text-white/80 hover:text-foreground dark:hover:text-white transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-gray-800 relative overflow-hidden before:absolute before:inset-0 before:bg-augwa-100 dark:before:bg-augwa-900 before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition-transform before:duration-300 before:z-[-1]"
          >
            Pricing
          </a>
          <a 
            href="#calculator" 
            className="px-4 py-2 text-sm font-medium text-foreground/80 dark:text-white/80 hover:text-foreground dark:hover:text-white transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-gray-800 relative overflow-hidden before:absolute before:inset-0 before:bg-augwa-100 dark:before:bg-augwa-900 before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition-transform before:duration-300 before:z-[-1]"
          >
            Calculator
          </a>
          <a 
            href="#faq" 
            className="px-4 py-2 text-sm font-medium text-foreground/80 dark:text-white/80 hover:text-foreground dark:hover:text-white transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-gray-800 relative overflow-hidden before:absolute before:inset-0 before:bg-augwa-100 dark:before:bg-augwa-900 before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition-transform before:duration-300 before:z-[-1]"
          >
            FAQ
          </a>

          <div className="pl-4 flex items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors relative overflow-hidden"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? 
                <Sun className="h-5 w-5 text-yellow-400 hover:text-yellow-500 transition-transform hover:rotate-12" /> : 
                <Moon className="h-5 w-5 text-gray-600 hover:text-gray-800 transition-transform hover:-rotate-12" />
              }
            </button>
            <Link 
              to="/login" 
              className="px-5 py-2.5 text-sm font-medium text-white bg-augwa hover:bg-augwa-600 transition-all duration-300 rounded-full shadow-sm hover:shadow-md hover:shadow-augwa-400/20 active:scale-95 relative overflow-hidden button-shine"
            >
              Login
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? 
              <Sun className="h-5 w-5 text-yellow-400" /> : 
              <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            }
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-gray-800 dark:text-white" /> : <Menu size={24} className="text-gray-800 dark:text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 top-[5rem] bg-white dark:bg-gray-900 z-40 md:hidden transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <nav className="container mx-auto px-4 py-8 flex flex-col space-y-4">
          <a 
            href="#features" 
            className="px-4 py-3 text-lg font-medium border-b border-slate-100 dark:border-gray-800 dark:text-white"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a 
            href="#pricing" 
            className="px-4 py-3 text-lg font-medium border-b border-slate-100 dark:border-gray-800 dark:text-white"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </a>
          <a 
            href="#calculator" 
            className="px-4 py-3 text-lg font-medium border-b border-slate-100 dark:border-gray-800 dark:text-white"
            onClick={() => setIsOpen(false)}
          >
            Calculator
          </a>
          <a 
            href="#faq" 
            className="px-4 py-3 text-lg font-medium border-b border-slate-100 dark:border-gray-800 dark:text-white"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </a>

          <div className="pt-4">
            <Link 
              to="/login"
              className="block w-full px-4 py-3 text-center font-medium text-white bg-augwa rounded-full shadow-sm hover:bg-augwa-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
