
import React, { useState, useEffect } from 'react';
import { 
  Bell, Calendar, Users, CreditCard, Settings, Home, ArrowRight,
  PieChart, Clock, ClipboardList, ArrowUp, MessageCircle, Briefcase
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface DemoScreen {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  preview: React.ReactNode;
}

const InteractiveDemo = () => {
  const [activeScreen, setActiveScreen] = useState<string>('dashboard');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    const el = document.getElementById('interactive-demo');
    if (el) observer.observe(el);
    
    return () => observer.disconnect();
  }, []);
  
  const screens: DemoScreen[] = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: <Home className="w-5 h-5" />,
      color: 'text-augwa-600 bg-augwa-100 dark:bg-augwa-900/40 dark:text-augwa-400',
      preview: <DashboardPreview />
    },
    {
      id: 'scheduling',
      title: 'Scheduling',
      icon: <Calendar className="w-5 h-5" />,
      color: 'text-blue-600 bg-blue-100 dark:bg-blue-900/40 dark:text-blue-400',
      preview: <SchedulingPreview />
    },
    {
      id: 'clients',
      title: 'Clients',
      icon: <Users className="w-5 h-5" />,
      color: 'text-purple-600 bg-purple-100 dark:bg-purple-900/40 dark:text-purple-400',
      preview: <ClientsPreview />
    },
    {
      id: 'payments',
      title: 'Payments',
      icon: <CreditCard className="w-5 h-5" />,
      color: 'text-emerald-600 bg-emerald-100 dark:bg-emerald-900/40 dark:text-emerald-400',
      preview: <PaymentsPreview />
    }
  ];
  
  const activeScreenData = screens.find(s => s.id === activeScreen) || screens[0];
  
  return (
    <section id="interactive-demo" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm text-augwa-800 dark:text-augwa-200 bg-augwa-100 dark:bg-augwa-900/40 rounded-full font-medium mb-4">
            Interactive Demo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            See How <span className="text-augwa">Augwa</span> Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our intuitive interfaces designed specifically for cleaning businesses
          </p>
        </div>
        
        <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Navigation sidebar */}
            <div className="bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 lg:col-span-3 p-4">
              <div className="flex items-center mb-8 px-4">
                <div className="relative h-9 w-9 mr-2">
                  <div className="absolute inset-0 bg-augwa rounded-lg rotate-3 opacity-70"></div>
                  <div className="absolute inset-0 bg-augwa-600 rounded-lg -rotate-3"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold">A</div>
                </div>
                <span className="text-xl font-display font-bold dark:text-white">Augwa</span>
              </div>
              
              <nav className="space-y-2">
                {screens.map((screen) => (
                  <button
                    key={screen.id}
                    onClick={() => setActiveScreen(screen.id)}
                    className={cn(
                      "w-full flex items-center px-4 py-3 rounded-lg transition-colors duration-200",
                      activeScreen === screen.id
                        ? `bg-white dark:bg-gray-800 shadow-sm ${screen.color.split(' ')[0]}`
                        : "hover:bg-gray-100 dark:hover:bg-gray-800/60 text-gray-700 dark:text-gray-300"
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center mr-3",
                      activeScreen === screen.id ? screen.color : "bg-gray-200/70 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300"
                    )}>
                      {screen.icon}
                    </div>
                    <span className="font-medium">{screen.title}</span>
                  </button>
                ))}
              </nav>
              
              <div className="mt-8 px-4">
                <Link
                  to="/login"
                  className="block w-full text-center py-3 px-4 rounded-lg bg-augwa hover:bg-augwa-600 text-white font-medium transition-colors"
                >
                  Login to Dashboard
                </Link>
              </div>
            </div>
            
            {/* Preview area */}
            <div className="lg:col-span-9 p-6 min-h-[600px]">
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4">
                <div className="flex items-center mb-4">
                  <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center mr-3", activeScreenData.color)}>
                    {activeScreenData.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{activeScreenData.title}</h3>
                </div>
                
                <div className="transition-opacity duration-300">
                  {activeScreenData.preview}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DashboardPreview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
      {/* Stats cards */}
      {[
        { title: "Today's Bookings", value: "8", icon: <Calendar className="w-5 h-5" />, color: "text-augwa-600 bg-augwa-100/70 dark:bg-augwa-900/40", change: "+2" },
        { title: "New Clients", value: "12", icon: <Users className="w-5 h-5" />, color: "text-purple-600 bg-purple-100/70 dark:bg-purple-900/40", change: "+5" },
        { title: "Revenue", value: "$1,450", icon: <CreditCard className="w-5 h-5" />, color: "text-emerald-600 bg-emerald-100/70 dark:bg-emerald-900/40", change: "+$350" },
      ].map((stat, i) => (
        <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
              <h4 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{stat.value}</h4>
            </div>
            <div className={`p-2 rounded-lg ${stat.color}`}>
              {stat.icon}
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500 flex items-center">
              <ArrowUp className="w-3 h-3 mr-1" />
              {stat.change}
            </span>
            <span className="text-gray-500 dark:text-gray-400 ml-2">vs yesterday</span>
          </div>
        </div>
      ))}
      
      {/* Chart */}
      <div className="col-span-full bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700 mt-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-gray-900 dark:text-white">Weekly Revenue</h3>
          <div className="text-sm text-gray-500 dark:text-gray-400">Last 7 days</div>
        </div>
        
        <div className="h-64 w-full">
          <div className="grid grid-cols-7 gap-2 h-48">
            {[30, 45, 25, 60, 80, 65, 75].map((height, i) => (
              <div key={i} className="flex items-end justify-center">
                <div 
                  className={`w-full max-w-[30px] bg-augwa/80 hover:bg-augwa rounded-t-md transition-all duration-200 cursor-pointer group relative`} 
                  style={{ height: `${height}%` }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-augwa text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    ${Math.floor(height * 25)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-2 mt-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
              <div key={i} className="text-xs text-gray-500 text-center">
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Recent Activities */}
      <div className="col-span-full bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700 mt-4">
        <h3 className="font-medium text-gray-900 dark:text-white mb-4">Recent Activities</h3>
        <div className="space-y-4">
          {[
            { icon: <Calendar className="w-4 h-4" />, color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400", text: "New booking scheduled for tomorrow", time: "10 min ago" },
            { icon: <MessageCircle className="w-4 h-4" />, color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400", text: "Message from client Jane Smith", time: "35 min ago" },
            { icon: <CreditCard className="w-4 h-4" />, color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400", text: "Payment received from Downtown Office", time: "2 hours ago" },
          ].map((activity, i) => (
            <div key={i} className="flex items-start">
              <div className={`p-2 rounded-full ${activity.color} mr-3`}>
                {activity.icon}
              </div>
              <div>
                <p className="text-sm text-gray-900 dark:text-white">{activity.text}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SchedulingPreview = () => {
  return (
    <div className="p-2">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-gray-900 dark:text-white">September 2023</h3>
          <div className="flex space-x-2">
            <button className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
              <ArrowRight className="w-4 h-4 rotate-180 text-gray-600 dark:text-gray-300" />
            </button>
            <button className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
              <ArrowRight className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-2 text-center">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
            <div key={i} className="text-xs font-medium text-gray-500 dark:text-gray-400 py-2">
              {day}
            </div>
          ))}
          
          {Array.from({ length: 35 }).map((_, i) => {
            const day = i - 4; // Adjust to start on the right day
            const isToday = day === 15;
            const hasEvent = [3, 8, 12, 15, 20, 25].includes(day);
            
            return (
              <div 
                key={i} 
                className={cn(
                  "h-12 flex flex-col items-center justify-center rounded-md text-sm relative cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700",
                  day < 1 || day > 30 ? "text-gray-300 dark:text-gray-600" : "text-gray-800 dark:text-gray-200",
                  isToday ? "bg-augwa text-white" : ""
                )}
              >
                {day > 0 && day <= 30 && (
                  <>
                    <span>{day}</span>
                    {hasEvent && !isToday && (
                      <div className="w-1.5 h-1.5 bg-augwa rounded-full mt-1"></div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
        <h3 className="font-medium text-gray-900 dark:text-white mb-4">Today's Schedule</h3>
        <div className="space-y-3">
          {[
            { time: "08:00 - 10:30", title: "Smith Residence", location: "123 Main St", status: "Completed" },
            { time: "11:00 - 13:00", title: "Johnson Apartment", location: "456 Park Ave", status: "In Progress" },
            { time: "14:30 - 16:30", title: "Downtown Office", location: "789 Business Blvd", status: "Upcoming" },
            { time: "17:00 - 19:00", title: "Wilson Residence", location: "321 Elm St", status: "Upcoming" },
          ].map((appointment, i) => (
            <div key={i} className="flex items-center p-3 border border-gray-100 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750">
              <div className="mr-3">
                <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md text-xs text-center font-medium">
                  <div className="text-augwa-600 dark:text-augwa-400">
                    {appointment.time.split(' - ')[0]}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 mt-1">
                    {appointment.time.split(' - ')[1]}
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">{appointment.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center mt-1">
                  <Clock className="w-3 h-3 mr-1" /> {appointment.location}
                </p>
              </div>
              
              <div className={cn(
                "text-xs font-medium rounded-full px-2 py-1",
                appointment.status === "Completed" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                appointment.status === "In Progress" ? "bg-augwa-100 text-augwa-700 dark:bg-augwa-900/30 dark:text-augwa-400" :
                "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400"
              )}>
                {appointment.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ClientsPreview = () => {
  return (
    <div className="p-2">
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search clients..."
            className="pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-augwa"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        <button className="px-4 py-2 bg-augwa hover:bg-augwa-600 text-white rounded-lg flex items-center">
          <Users className="w-4 h-4 mr-2" />
          Add Client
        </button>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Client</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Property</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Next Service</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {[
              { name: "John Smith", email: "john@example.com", property: "Residential", type: "Weekly", status: "Active", next: "Sep 15, 2023" },
              { name: "Sarah Johnson", email: "sarah@example.com", property: "Apartment", type: "Bi-weekly", status: "Active", next: "Sep 18, 2023" },
              { name: "Tech Innovations", email: "info@techinnovations.com", property: "Commercial", type: "Daily", status: "Inactive", next: "N/A" },
              { name: "Robert Wilson", email: "robert@example.com", property: "Residential", type: "Monthly", status: "Active", next: "Sep 30, 2023" },
            ].map((client, i) => (
              <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 font-medium">
                      {client.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{client.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{client.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-white">{client.property}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{client.type}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={cn(
                    "px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full",
                    client.status === "Active" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400"
                  )}>
                    {client.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {client.next}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-augwa-600 hover:text-augwa-900 dark:text-augwa-400 dark:hover:text-augwa-300 mr-3">
                    Edit
                  </button>
                  <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const PaymentsPreview = () => {
  return (
    <div className="p-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {[
          { title: "Total Revenue", value: "$12,450", change: "+12% from last month", icon: <PieChart className="w-5 h-5" />, color: "text-augwa-600 bg-augwa-100 dark:bg-augwa-900/30" },
          { title: "Outstanding", value: "$3,280", change: "8 unpaid invoices", icon: <ClipboardList className="w-5 h-5" />, color: "text-amber-600 bg-amber-100 dark:bg-amber-900/30" },
          { title: "Avg. Time to Pay", value: "2.3 days", change: "30% faster than avg", icon: <Clock className="w-5 h-5" />, color: "text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30" },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
                <h4 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{stat.value}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.change}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-gray-900 dark:text-white">Recent Transactions</h3>
          <button className="text-augwa-600 hover:text-augwa-700 dark:text-augwa-400 dark:hover:text-augwa-300 text-sm font-medium flex items-center">
            View All
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        
        <div className="space-y-4">
          {[
            { client: "Downtown Office", amount: "$850.00", date: "Sep 10, 2023", method: "Credit Card", status: "Completed" },
            { client: "Sarah Johnson", amount: "$210.00", date: "Sep 9, 2023", method: "Bank Transfer", status: "Completed" },
            { client: "Tech Innovations", amount: "$1,250.00", date: "Sep 5, 2023", method: "Credit Card", status: "Completed" },
            { client: "John Smith", amount: "$145.00", date: "Sep 1, 2023", method: "PayPal", status: "Completed" },
          ].map((transaction, i) => (
            <div key={i} className="flex items-center p-3 border border-gray-100 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750">
              <div className="mr-3">
                <div className="h-10 w-10 bg-augwa-100 dark:bg-augwa-900/30 rounded-full flex items-center justify-center text-augwa-600 dark:text-augwa-400">
                  <Briefcase className="w-5 h-5" />
                </div>
              </div>
              
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">{transaction.client}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center mt-1">
                  {transaction.date} • {transaction.method}
                </p>
              </div>
              
              <div className="text-right">
                <div className="text-sm font-bold text-gray-900 dark:text-white">{transaction.amount}</div>
                <div className={cn(
                  "text-xs mt-1 rounded-full px-2 py-0.5 inline-block",
                  transaction.status === "Completed" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : 
                  "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                )}>
                  {transaction.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <h3 className="font-medium text-gray-900 dark:text-white mb-4">Payment Methods</h3>
          <div className="space-y-4">
            {[
              { name: "Credit Card", percentage: 68 },
              { name: "Bank Transfer", percentage: 23 },
              { name: "PayPal", percentage: 9 },
            ].map((method, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700 dark:text-gray-300">{method.name}</span>
                  <span className="font-medium text-gray-900 dark:text-white">{method.percentage}%</span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-augwa rounded-full" 
                    style={{ width: `${method.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <h3 className="font-medium text-gray-900 dark:text-white mb-4">Invoice Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg text-left hover:bg-gray-50 dark:hover:bg-gray-750">
              <div className="bg-augwa-100 dark:bg-augwa-900/30 p-2 rounded-lg w-10 h-10 flex items-center justify-center text-augwa-600 dark:text-augwa-400 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">Create Invoice</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Generate a new invoice</p>
            </button>
            
            <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg text-left hover:bg-gray-50 dark:hover:bg-gray-750">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg w-10 h-10 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">Send Reminders</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Notify about payments</p>
            </button>
            
            <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg text-left hover:bg-gray-50 dark:hover:bg-gray-750">
              <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-lg w-10 h-10 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">Generate Report</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Financial overview</p>
            </button>
            
            <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg text-left hover:bg-gray-50 dark:hover:bg-gray-750">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg w-10 h-10 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">Settings</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Configure payments</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDemo;
