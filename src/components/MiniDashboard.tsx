import React, { useState, useEffect } from 'react';
import { Calendar, Users, BarChart3, Clock, DollarSign, CheckCircle, X, ChevronDown } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import DashboardDemo from './dashboard/DashboardDemo';
import { cn } from '@/lib/utils';

const MiniDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    const element = document.getElementById('mini-dashboard');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);
  
  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'schedule', label: 'Schedule', icon: <Calendar className="w-4 h-4" /> },
    { id: 'clients', label: 'Clients', icon: <Users className="w-4 h-4" /> },
    { id: 'income', label: 'Income', icon: <DollarSign className="w-4 h-4" /> }
  ];

  // Mobile app screenshots
  const mobileScreens = [
    {
      title: "Dashboard Overview",
      image: "https://images.unsplash.com/photo-1551650992-ee4fd47df41f?w=248",
      description: "Track your business performance at a glance"
    },
    {
      title: "Booking Management",
      image: "https://images.unsplash.com/photo-1638913971251-832d29947de6?w=248",
      description: "Manage appointments with ease"
    },
    {
      title: "Client Portal",
      image: "https://images.unsplash.com/photo-1638913970675-b5ec36292665?w=248",
      description: "Keep your clients happy and engaged"
    }
  ];

  return (
    <section id="mini-dashboard" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.02] z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-augwa-400/20 dark:bg-augwa-400/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-augwa-400/20 dark:bg-augwa-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center rounded-full bg-augwa-50 dark:bg-augwa-900/30 px-3 py-1 text-sm font-medium text-augwa-600 dark:text-augwa-400 mb-4">
            <span>Interactive Demo</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            See How <span className="bg-gradient-to-r from-augwa to-blue-600 bg-clip-text text-transparent">Augwa Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Manage your entire cleaning business from one intuitive dashboard. Everything you need at your fingertips.
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-5xl mx-auto relative"
        >
          {/* Interactive Dashboard Demo */}
          <div className="relative z-10">
            <DashboardDemo />
            
            {/* Floating UI elements */}
            <motion.div 
              className="absolute -top-6 -left-6 z-20"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 transform rotate-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-amber-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Reminder Sent</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">2 clients confirmed</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -right-6 z-20"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 transform -rotate-3 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Payment Received</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">$150 from Sarah W.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a 
              href="#pricing" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-augwa text-white font-medium hover:bg-augwa-600 transition-all duration-300 shadow-lg hover:shadow-augwa-400/20 relative overflow-hidden group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full opacity-10 group-hover:w-56 group-hover:h-56"></span>
              <span className="relative">Start Saving Time & Money Today</span>
            </a>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              30-day free trial. No credit card required.
            </p>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Mobile app showcase */}
      <div className="mt-24 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-augwa-50 dark:bg-augwa-900/30 px-3 py-1 text-sm font-medium text-augwa-600 dark:text-augwa-400 mb-4">
              <span>Mobile Access</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Manage Your Business <span className="bg-gradient-to-r from-augwa to-blue-600 bg-clip-text text-transparent">On The Go</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Access Augwa from anywhere, anytime. Check schedules, confirm bookings, and process payments right from your phone.
            </p>
          </div>
          
          <div className="relative px-12">
            <Carousel className="max-w-3xl mx-auto">
              <CarouselContent>
                {mobileScreens.map((screen, index) => (
                  <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="p-4">
                      <motion.div 
                        className="overflow-hidden rounded-xl border-8 border-gray-800 dark:border-gray-700 shadow-2xl relative bg-gray-900"
                        whileHover={{ scale: 1.05, rotate: [-1, 1, 0], transition: { rotate: { duration: 0.3 } } }}
                      >
                        {/* Phone top notch */}
                        <div className="absolute top-0 left-1/2 -translate-x1/2 w-1/3 h-6 bg-gray-800 dark:bg-gray-700 rounded-b-xl z-10"></div>
                        
                        <div className="relative aspect-[9/19.5] overflow-hidden">
                          {/* We'll replace unsplash images with screenshots of our dashboard */}
                          <div className="absolute inset-0 w-full h-full bg-augwa-800 flex flex-col">
                            {/* Mobile app header */}
                            <div className="bg-augwa-600 p-3 flex items-center justify-between">
                              <div className="text-white font-semibold text-sm">Augwa Mobile</div>
                              <Badge variant="outline" className="bg-white/10 text-white border-white/20 text-xs">
                                {index === 0 ? "Dashboard" : index === 1 ? "Bookings" : "Clients"}
                              </Badge>
                            </div>
                            
                            {/* Mobile app content */}
                            <div className="flex-1 bg-white p-2 overflow-hidden">
                              {index === 0 && (
                                <div className="space-y-2">
                                  <div className="bg-augwa-50 rounded-lg p-2 text-xs">
                                    <div className="font-medium text-augwa-800">Today's Overview</div>
                                    <div className="flex justify-between mt-1">
                                      <div>Bookings: 5</div>
                                      <div>Revenue: $840</div>
                                    </div>
                                  </div>
                                  <div className="bg-gray-100 rounded-lg p-2 h-24 flex items-center justify-center">
                                    <div className="text-gray-400 text-xs text-center">
                                      <BarChart3 className="h-5 w-5 mx-auto mb-1" />
                                      Weekly Stats Chart
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-2 gap-2">
                                    <div className="bg-green-50 rounded-lg p-2 text-xs text-green-800">
                                      <CheckCircle className="h-3 w-3 mb-1" />
                                      <div>17 Completed</div>
                                    </div>
                                    <div className="bg-amber-50 rounded-lg p-2 text-xs text-amber-800">
                                      <Clock className="h-3 w-3 mb-1" />
                                      <div>3 Pending</div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              
                              {index === 1 && (
                                <div className="space-y-2">
                                  <div className="bg-gray-100 rounded-lg p-2 text-xs font-medium">
                                    Today, June 15
                                  </div>
                                  {[1, 2, 3].map(i => (
                                    <div key={i} className="bg-white border border-gray-200 rounded-lg p-2 text-xs">
                                      <div className="font-medium">Client {i}</div>
                                      <div className="flex justify-between mt-1 text-gray-500">
                                        <div>{i + 8}:00 AM</div>
                                        <div className="text-augwa-600 font-medium">Details →</div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                              
                              {index === 2 && (
                                <div className="space-y-2">
                                  <div className="relative">
                                    <input 
                                      type="text" 
                                      placeholder="Search clients..." 
                                      className="w-full border border-gray-200 rounded-lg text-xs p-2 pl-7"
                                    />
                                    <div className="absolute left-2 top-2 text-gray-400">
                                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                      </svg>
                                    </div>
                                  </div>
                                  {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="border border-gray-200 rounded-lg p-2 text-xs flex items-center">
                                      <div className="w-6 h-6 rounded-full bg-gray-200 mr-2 flex items-center justify-center font-medium">
                                        {i}
                                      </div>
                                      <div>
                                        <div className="font-medium">Client Name {i}</div>
                                        <div className="text-gray-500">Last service: {i} days ago</div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                            
                            {/* Mobile app bottom nav */}
                            <div className="bg-white border-t border-gray-200 py-2 px-4 flex justify-around">
                              <div className={cn("p-1 rounded-full", index === 0 ? "bg-augwa-100 text-augwa-600" : "text-gray-400")}>
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                              </div>
                              <div className={cn("p-1 rounded-full", index === 1 ? "bg-augwa-100 text-augwa-600" : "text-gray-400")}>
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <div className={cn("p-1 rounded-full", index === 2 ? "bg-augwa-100 text-augwa-600" : "text-gray-400")}>
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                              </div>
                              <div className="p-1 rounded-full text-gray-400">
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                              </div>
                              <div className="p-1 rounded-full text-gray-400">
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      <div className="text-center mt-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{screen.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{screen.description}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute -left-8 top-1/2 -translate-y-1/2">
                <CarouselPrevious className="h-10 w-10" />
              </div>
              <div className="absolute -right-8 top-1/2 -translate-y-1/2">
                <CarouselNext className="h-10 w-10" />
              </div>
            </Carousel>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <motion.a 
              href="https://apps.apple.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.433 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.619.25-1.118.381-1.498.396-.579.025-1.156-.229-1.73-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.337.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.014.128.019.255.019.381z"/>
              </svg>
              Download for iOS
            </motion.a>
            <motion.a 
              href="https://play.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5V3.5c0-.827.673-1.5 1.5-1.5.357 0 .687.126.944.336L19.5 12l-14.056 9.664A1.5 1.5 0 0 1 3 20.5zm2-2.494L16.51 12 5 5.994v12.012z"/>
              </svg>
              Download for Android
            </motion.a>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      
    </section>
  );
};

export default MiniDashboard;
