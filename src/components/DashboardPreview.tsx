
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { 
  Loader2, 
  Check, 
  ChevronRight, 
  Calendar, 
  Clock, 
  Users, 
  Briefcase, 
  Phone, 
  Mail, 
  PieChart,
  TrendingUp,
  ArrowUpRight,
  Bell
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  Legend 
} from 'recharts';

// Sample data for dashboard charts
const revenueData = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 5000 },
  { name: 'Thu', value: 2780 },
  { name: 'Fri', value: 1890 },
  { name: 'Sat', value: 2390 },
  { name: 'Sun', value: 3490 },
];

const bookingsData = [
  { name: 'Jan', residential: 30, commercial: 20 },
  { name: 'Feb', residential: 25, commercial: 15 },
  { name: 'Mar', residential: 35, commercial: 25 },
  { name: 'Apr', residential: 45, commercial: 30 },
  { name: 'May', residential: 40, commercial: 35 },
  { name: 'Jun', residential: 50, commercial: 40 },
];

const DashboardPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    // Start animation after component mounts
    setIsVisible(true);
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });

    // Start counter animation
    const interval = setInterval(() => {
      setCount(prevCount => {
        const newCount = prevCount + 1;
        return newCount > 15 ? 15 : newCount;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [controls]);

  useEffect(() => {
    // Simulate dashboard loading after a short delay
    const timer = setTimeout(() => {
      setIsImageLoaded(true);
      
      // Set animation complete after another delay
      const completeTimer = setTimeout(() => {
        setAnimationComplete(true);
      }, 800);
      
      return () => clearTimeout(completeTimer);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Custom tooltip component for charts
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg">
          <p className="text-xs font-medium text-gray-700 dark:text-gray-300">{`${label}`}</p>
          <p className="text-sm font-bold text-augwa-600 dark:text-augwa-400">
            ${payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 transform transition-all duration-500 hover:shadow-augwa/20 hover:shadow-xl bg-white dark:bg-gray-800">
      {/* Image overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-augwa/30 to-transparent opacity-70 dark:from-augwa-950/40 dark:to-transparent z-10"></div>
      
      {/* Loading indicator */}
      {!isImageLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
          <Loader2 className="h-12 w-12 animate-spin text-augwa mb-3" />
          <span className="text-gray-500 dark:text-gray-400 text-sm animate-pulse">Loading dashboard preview...</span>
        </div>
      )}
      
      {/* Complex Dashboard UI */}
      <div className={`w-full h-[550px] bg-gray-50 dark:bg-gray-900 transition-opacity duration-700 ${
        isImageLoaded ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* Dashboard Header */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-augwa rounded-lg flex items-center justify-center text-white font-bold">A</div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Augwa Dashboard</h2>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative">
              <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">JD</span>
            </div>
          </div>
        </div>
        
        {/* Dashboard Content */}
        <div className="p-4 grid grid-cols-12 gap-4 h-[calc(550px-64px)] overflow-hidden">
          {/* Stats Cards */}
          <div className="col-span-12 grid grid-cols-4 gap-4">
            {[
              { 
                title: "Today's Bookings", 
                value: animationComplete ? "8" : count > 8 ? "8" : count.toString(), 
                icon: <Calendar className="h-5 w-5" />, 
                color: "bg-augwa-100 text-augwa-600 dark:bg-augwa-900/30 dark:text-augwa-400",
                change: "+2"
              },
              { 
                title: "New Clients", 
                value: animationComplete ? "12" : count > 12 ? "12" : count.toString(), 
                icon: <Users className="h-5 w-5" />, 
                color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
                change: "+5"
              },
              { 
                title: "Hours Saved", 
                value: animationComplete ? "15" : count.toString(), 
                icon: <Clock className="h-5 w-5" />, 
                color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
                change: "+3"
              },
              { 
                title: "Revenue", 
                value: animationComplete ? "$1,450" : `$${count * 100}`, 
                icon: <TrendingUp className="h-5 w-5" />, 
                color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
                change: "+$350"
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isImageLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
                    <h4 className="text-xl font-bold mt-1 text-gray-900 dark:text-white">{stat.value}</h4>
                  </div>
                  <div className={`p-2 rounded-lg ${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
                <div className="mt-3 flex items-center text-xs">
                  <span className="text-green-500 flex items-center">
                    <ArrowUpRight className="w-3 h-3 mr-1" />
                    {stat.change}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">vs yesterday</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isImageLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="col-span-8 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Revenue Overview</h3>
              <div className="flex items-center space-x-2">
                <button className="text-xs bg-augwa/10 text-augwa-600 dark:text-augwa-400 px-2 py-1 rounded-md">Weekly</button>
                <button className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 rounded-md">Monthly</button>
                <button className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 rounded-md">Yearly</button>
              </div>
            </div>
            <div className="h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={revenueData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#48BB78" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#48BB78" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#48BB78" 
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                    animationDuration={1500}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          
          {/* Bookings Charts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isImageLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="col-span-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Bookings by Type</h3>
              <PieChart className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={bookingsData}
                  margin={{ top: 5, right: 10, left: -15, bottom: 5 }}
                  barSize={10}
                >
                  <XAxis 
                    dataKey="name" 
                    scale="point" 
                    padding={{ left: 10, right: 10 }} 
                    tick={{ fontSize: 10 }}
                  />
                  <YAxis tick={{ fontSize: 10 }} />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <Tooltip />
                  <Legend wrapperStyle={{ fontSize: '10px' }} />
                  <Bar 
                    dataKey="residential" 
                    fill="#805AD5" 
                    radius={[5, 5, 0, 0]} 
                    animationDuration={1500}
                  />
                  <Bar 
                    dataKey="commercial" 
                    fill="#3182CE" 
                    radius={[5, 5, 0, 0]} 
                    animationDuration={1500}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          
          {/* Recent Clients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isImageLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="col-span-6 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Recent Clients</h3>
            <div className="space-y-3 overflow-hidden">
              {[
                { name: "Sarah Johnson", type: "Residential", location: "243 Maple Drive" },
                { name: "Tech Innovations", type: "Commercial", location: "510 Business Plaza" },
                { name: "Robert Wilson", type: "Residential", location: "78 Sunset Avenue" },
              ].map((client, i) => (
                <motion.div 
                  key={i}
                  initial={{ x: -50, opacity: 0 }}
                  animate={isImageLoaded ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.8 + (i * 0.1) }}
                  className="flex items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-750 rounded-lg"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{client.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900 dark:text-white">{client.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{client.type} • {client.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Upcoming Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isImageLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="col-span-6 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Today's Schedule</h3>
            <div className="space-y-3 overflow-hidden">
              {[
                { time: "10:00 AM", client: "Downtown Office", duration: "2 hours", status: "Upcoming" },
                { time: "01:30 PM", client: "Lakeside Apartments", duration: "3 hours", status: "Upcoming" },
                { time: "04:45 PM", client: "Sarah Johnson", duration: "1.5 hours", status: "Upcoming" },
              ].map((appointment, i) => (
                <motion.div 
                  key={i}
                  initial={{ x: 50, opacity: 0 }}
                  animate={isImageLoaded ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.9 + (i * 0.1) }}
                  className="flex items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-750 rounded-lg"
                >
                  <div className="mr-3 bg-gray-100 dark:bg-gray-700 p-2 rounded-lg w-14 text-center">
                    <span className="text-xs font-medium text-augwa-600 dark:text-augwa-400">{appointment.time}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-900 dark:text-white truncate">{appointment.client}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{appointment.duration}</p>
                  </div>
                  <div className="bg-augwa-100 text-augwa-800 dark:bg-augwa-900/30 dark:text-augwa-400 text-xs rounded-full px-2 py-0.5">
                    {appointment.status}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Interactive floating panel - only show when image is loaded */}
      {isImageLoaded && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-6 md:p-8 rounded-xl max-w-md mx-4 shadow-xl border border-gray-200 dark:border-gray-700 transform transition-transform duration-500 hover:scale-105">
            <div className="bg-augwa/10 dark:bg-augwa/20 p-2 rounded-full inline-flex items-center mb-4">
              <span className="text-xs font-semibold text-augwa-600 dark:text-augwa-400">Premium Software</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white">Ready to boost your profits?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join over 1,200 cleaning professionals who save <strong className="text-augwa-600 dark:text-augwa-400">15+ hours per week</strong> using Augwa.
            </p>
            
            <div className="mb-6 space-y-2">
              {[
                "Automated scheduling & reminders",
                "Client management & communication",
                "Digital payments & invoicing",
                "Detailed business insights"
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="mr-2 bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
                    <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            
            <Link
              to="#pricing"
              className="w-full block text-center px-6 py-3 rounded-full bg-augwa text-white font-medium hover:bg-augwa-600 transition-all duration-300 shadow-md hover:shadow-lg button-shine group"
            >
              Start Your Free Trial
              <ChevronRight className="inline-block ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-3">
              No credit card required • 14-day free trial
            </p>
          </div>
        </motion.div>
      )}
      
      {/* Decorative elements */}
      <div className="absolute top-4 left-4 bg-white/80 dark:bg-gray-800/80 p-2 rounded-lg shadow-md z-20 backdrop-blur-sm hidden md:block">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-rose-500"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
