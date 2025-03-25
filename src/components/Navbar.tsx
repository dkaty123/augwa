
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-height flex items-center",
        scrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-slate-200/50" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          className="flex items-center"
        >
          <div className="relative h-9 w-9 mr-2">
            <div className="absolute inset-0 bg-augwa rounded-lg rotate-3 opacity-70"></div>
            <div className="absolute inset-0 bg-augwa-600 rounded-lg -rotate-3"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold">A</div>
          </div>
          <span className="text-xl font-display font-bold">Augwa</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          <a 
            href="#features" 
            className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-full hover:bg-slate-100"
          >
            Features
          </a>
          <a 
            href="#pricing" 
            className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-full hover:bg-slate-100"
          >
            Pricing
          </a>
          <a 
            href="#calculator" 
            className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-full hover:bg-slate-100"
          >
            Calculator
          </a>
          <a 
            href="#faq" 
            className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-full hover:bg-slate-100"
          >
            FAQ
          </a>

          <div className="pl-4 flex items-center space-x-4">
            <a 
              href="#" 
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-full hover:bg-slate-100"
            >
              Login
            </a>
            <a 
              href="#" 
              className="px-5 py-2.5 text-sm font-medium text-white bg-augwa hover:bg-augwa-600 transition-colors rounded-full shadow-sm hover:shadow button-shine"
            >
              Get Started
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 top-[5rem] bg-white z-40 md:hidden transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <nav className="container mx-auto px-4 py-8 flex flex-col space-y-4">
          <a 
            href="#features" 
            className="px-4 py-3 text-lg font-medium border-b border-slate-100"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a 
            href="#pricing" 
            className="px-4 py-3 text-lg font-medium border-b border-slate-100"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </a>
          <a 
            href="#calculator" 
            className="px-4 py-3 text-lg font-medium border-b border-slate-100"
            onClick={() => setIsOpen(false)}
          >
            Calculator
          </a>
          <a 
            href="#faq" 
            className="px-4 py-3 text-lg font-medium border-b border-slate-100"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </a>

          <div className="pt-4 flex flex-col space-y-3">
            <a 
              href="#" 
              className="px-4 py-3 text-center font-medium border border-slate-200 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              Login
            </a>
            <a 
              href="#" 
              className="px-4 py-3 text-center font-medium text-white bg-augwa rounded-full shadow-sm"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
