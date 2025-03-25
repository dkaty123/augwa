
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Owner, Clean Sweep Services",
    content: "Augwa has transformed how we manage our cleaning business. We've reduced no-shows by 80% and saved hours on scheduling and billing every week.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Director, Pristine Home Cleaners",
    content: "After switching to Augwa, our revenue increased by 25% in just three months. The automated reminders and payment processing are game-changers.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Founder, EcoClean Solutions",
    content: "The client management features have helped us build stronger relationships with customers. The ROI on Augwa has been incredible for our small business.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Owner, Thompson Cleaning Co.",
    content: "I was spending 10 hours a week on admin tasks before Augwa. Now it's less than 2 hours, giving me more time to focus on growing my business.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);
  
  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (diff > 50) {
      nextTestimonial();
    } else if (diff < -50) {
      prevTestimonial();
    }
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-augwa-50/50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-augwa-100 dark:bg-augwa-800/30 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-augwa-100 dark:bg-augwa-800/30 rounded-full opacity-50 blur-3xl"></div>
      </div>
      
      <div className="absolute left-10 top-10 opacity-20 dark:opacity-10">
        <Quote className="w-24 h-24 text-augwa-400 dark:text-augwa-600" />
      </div>
      <div className="absolute right-10 bottom-10 opacity-20 dark:opacity-10">
        <Quote className="w-24 h-24 text-augwa-400 dark:text-augwa-600 transform rotate-180" />
      </div>
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join hundreds of cleaning businesses that use Augwa to streamline their operations and improve efficiency.
          </p>
        </div>
        
        <div 
          ref={testimonialRef} 
          className="relative overflow-hidden glass-card dark:neo-blur mx-auto shadow-xl max-w-3xl"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="transition-all duration-500 ease-in-out transform"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              display: 'flex',
              width: `${testimonials.length * 100}%`
            }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 rounded-full p-1 shadow-md">
                        <Quote className="w-5 h-5 text-augwa-500 dark:text-augwa-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 italic mb-4 leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                      <p className="text-augwa-600 dark:text-augwa-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-augwa-500 w-6' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-augwa-300 dark:hover:bg-augwa-700'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
