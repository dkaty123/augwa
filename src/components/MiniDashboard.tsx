import React, { useState, useEffect } from 'react';
import { Calendar, Users, BarChart3, Clock, DollarSign, CheckCircle, X } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

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

  // Mock data for dashboard
  const upcomingAppointments = [
    { id: 1, client: 'Jennifer Smith', time: '9:00 AM', duration: '3 hours', address: '123 Main St', status: 'confirmed' },
    { id: 2, client: 'Robert Jones', time: '1:30 PM', duration: '2.5 hours', address: '456 Oak Ave', status: 'pending' },
    { id: 3, client: 'Sarah Williams', time: '4:00 PM', duration: '2 hours', address: '789 Pine Rd', status: 'confirmed' }
  ];

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
          <h2 className="title-text mb-4">
            See How <span className="text-gradient">Augwa Works</span>
          </h2>
          <p className="subtitle-text text-gray-600 dark:text-gray-300">
            Manage your entire cleaning business from one intuitive dashboard. Everything you need at your fingertips.
          </p>
        </div>
        
        <div 
          className={`max-w-5xl mx-auto transition-all duration-1000 ${
            isInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative">
            {/* Dashboard mockup */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              {/* Dashboard header */}
              <div className="bg-augwa-600 dark:bg-augwa-800 p-4 flex items-center justify-between text-white">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm font-medium">Augwa Dashboard</div>
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-white/30"></div>
                  <div className="h-3 w-3 rounded-full bg-white/30"></div>
                </div>
              </div>
              
              {/* Dashboard navigation */}
              <div className="flex border-b border-gray-200 dark:border-gray-700">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`flex items-center py-3 px-4 text-sm font-medium transition-colors ${
                      activeTab === tab.id 
                        ? "text-augwa-600 dark:text-augwa-400 border-b-2 border-augwa-600 dark:border-augwa-400" 
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
              
              {/* Dashboard content */}
              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      {/* Summary cards */}
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 flex-1 shadow-sm">
                        <div className="flex items-center">
                          <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                            <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="ml-4">
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Today's Appointments</p>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">8</h3>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 flex-1 shadow-sm">
                        <div className="flex items-center">
                          <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                            <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
                          </div>
                          <div className="ml-4">
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Today's Revenue</p>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">$1,280</h3>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 flex-1 shadow-sm">
                        <div className="flex items-center">
                          <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                            <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div className="ml-4">
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Active Clients</p>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">247</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Upcoming appointments */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                      <div className="border-b border-gray-200 dark:border-gray-700 p-4">
                        <h4 className="font-medium text-gray-900 dark:text-white">Upcoming Appointments</h4>
                      </div>
                      <div className="divide-y divide-gray-200 dark:divide-gray-700">
                        {upcomingAppointments.map((appointment) => (
                          <div key={appointment.id} className="p-4 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`h-2.5 w-2.5 rounded-full ${
                                appointment.status === 'confirmed' ? 'bg-green-500' : 'bg-yellow-500'
                              }`}></div>
                              <div>
                                <p className="font-medium text-gray-900 dark:text-white">{appointment.client}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{appointment.time} · {appointment.duration}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button className="p-1 text-gray-500 hover:text-augwa-500 dark:text-gray-400 dark:hover:text-augwa-400">
                                <CheckCircle className="h-5 w-5" />
                              </button>
                              <button className="p-1 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400">
                                <X className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'schedule' && (
                  <div className="flex items-center justify-center h-64">
                    <div className="text-center">
                      <Calendar className="h-12 w-12 mx-auto text-augwa-500 dark:text-augwa-400 mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Calendar & Scheduling</h3>
                      <p className="text-gray-500 dark:text-gray-400 max-w-md">
                        View and manage all your appointments in a beautiful, easy-to-use calendar.
                      </p>
                    </div>
                  </div>
                )}
                
                {activeTab === 'clients' && (
                  <div className="flex items-center justify-center h-64">
                    <div className="text-center">
                      <Users className="h-12 w-12 mx-auto text-augwa-500 dark:text-augwa-400 mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Client Management</h3>
                      <p className="text-gray-500 dark:text-gray-400 max-w-md">
                        Keep track of all your clients, their properties, and service history in one place.
                      </p>
                    </div>
                  </div>
                )}
                
                {activeTab === 'income' && (
                  <div className="flex items-center justify-center h-64">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 mx-auto text-augwa-500 dark:text-augwa-400 mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Income Analytics</h3>
                      <p className="text-gray-500 dark:text-gray-400 max-w-md">
                        Track your revenue, payments, and business performance with detailed reports.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Floating UI elements */}
            <div className="absolute -top-6 -left-6 animate-float">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 transform rotate-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-amber-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Reminder Sent</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">2 clients confirmed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 animate-float animation-delay-200">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 transform -rotate-3 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Payment Received</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">$150 from Sarah W.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="#pricing" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-augwa text-white font-medium hover:bg-augwa-600 transition-all duration-300 shadow-lg hover:shadow-augwa-400/20 button-shine"
            >
              Start Saving Time & Money Today
            </a>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              30-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </div>
      
      {/* Mobile app showcase */}
      <div className="mt-24 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-augwa-50 dark:bg-augwa-900/30 px-3 py-1 text-sm font-medium text-augwa-600 dark:text-augwa-400 mb-4">
              <span>Mobile Access</span>
            </div>
            <h2 className="title-text mb-4">
              Manage Your Business <span className="text-gradient">On The Go</span>
            </h2>
            <p className="subtitle-text text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Access Augwa from anywhere, anytime. Check schedules, confirm bookings, and process payments right from your phone.
            </p>
          </div>
          
          <div className="relative px-12">
            <Carousel className="max-w-3xl mx-auto">
              <CarouselContent>
                {mobileScreens.map((screen, index) => (
                  <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="p-4">
                      <div className="overflow-hidden rounded-xl border-8 border-gray-800 dark:border-gray-700 shadow-2xl relative bg-gray-900">
                        {/* Phone top notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-800 dark:bg-gray-700 rounded-b-xl z-10"></div>
                        
                        <div className="relative aspect-[9/19.5] overflow-hidden">
                          <img 
                            src={screen.image}
                            alt={screen.title}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                              <h4 className="text-lg font-semibold mb-1">{screen.title}</h4>
                              <p className="text-sm opacity-80">{screen.description}</p>
                            </div>
                          </div>
                        </div>
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

          <div className="mt-12 flex justify-center gap-4">
            <a 
              href="https://apps.apple.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-all duration-300"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.433 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.619.25-1.118.381-1.498.396-.579.025-1.156-.229-1.73-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.337.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.014.128.019.255.019.381z"/>
              </svg>
              Download for iOS
            </a>
            <a 
              href="https://play.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-all duration-300"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5V3.5c0-.827.673-1.5 1.5-1.5.357 0 .687.126.944.336L19.5 12l-14.056 9.664A1.5 1.5 0 0 1 3 20.5zm2-2.494L16.51 12 5 5.994v12.012z"/>
              </svg>
              Download for Android
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 dark:text-gray-400 animate-bounce-soft">
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown className="h-5 w-5" />
      </div>
    </section>
  );
};

export default MiniDashboard;
