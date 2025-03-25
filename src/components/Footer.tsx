
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16 pb-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-augwa-50 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-augwa-50/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="relative h-8 w-8 mr-2">
                <div className="absolute inset-0 bg-augwa rounded-lg rotate-3 opacity-70"></div>
                <div className="absolute inset-0 bg-augwa-600 rounded-lg -rotate-3"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">A</div>
              </div>
              <span className="text-xl font-display font-bold">Augwa</span>
            </div>
            
            <p className="text-gray-600 mb-6">
              Simplifying operations for residential cleaning businesses with our all-in-one management platform.
            </p>
            
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="flex items-center justify-center h-10 w-10 bg-white rounded-full border border-gray-200 text-gray-600 hover:bg-augwa hover:text-white hover:border-transparent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center h-10 w-10 bg-white rounded-full border border-gray-200 text-gray-600 hover:bg-augwa hover:text-white hover:border-transparent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center h-10 w-10 bg-white rounded-full border border-gray-200 text-gray-600 hover:bg-augwa hover:text-white hover:border-transparent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center h-10 w-10 bg-white rounded-full border border-gray-200 text-gray-600 hover:bg-augwa hover:text-white hover:border-transparent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {["Features", "Pricing", "Calculator", "Testimonials", "FAQ"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-600 hover:text-augwa transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {["Blog", "Help Center", "Tutorials", "API Documentation", "Partner Program"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-augwa transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:hello@augwa.com" 
                  className="flex items-center text-gray-600 hover:text-augwa transition-colors"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  <span>hello@augwa.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+15556789012" 
                  className="flex items-center text-gray-600 hover:text-augwa transition-colors"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  <span>+1 (555) 678-9012</span>
                </a>
              </li>
              <li className="flex items-start text-gray-600">
                <MapPin className="h-5 w-5 mr-3 mt-0.5" />
                <span>123 Cleaning Avenue, Suite 456<br />Toronto, ON M5V 2N4<br />Canada</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <p className="text-gray-600 text-sm">
              &copy; {currentYear} Augwa. All rights reserved.
            </p>
            
            <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
              <a href="#" className="text-sm text-gray-600 hover:text-augwa transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-augwa transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-augwa transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-augwa transition-colors">
                GDPR
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
