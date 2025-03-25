
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Users, Receipt, CreditCard, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// Sample data for charts
const revenueData = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 6000 },
  { name: "May", revenue: 4000 },
  { name: "Jun", revenue: 7000 },
  { name: "Jul", revenue: 8000 },
];

const bookingsData = [
  { name: "Mon", bookings: 10 },
  { name: "Tue", bookings: 15 },
  { name: "Wed", bookings: 12 },
  { name: "Thu", bookings: 18 },
  { name: "Fri", bookings: 20 },
  { name: "Sat", bookings: 8 },
  { name: "Sun", bookings: 5 },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight dark:text-white">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Last update: Today, 9:45 AM</span>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <CreditCard className="h-4 w-4 text-augwa" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,583.00</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Monthly</p>
            <div className="flex items-center pt-1">
              <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
              <span className="text-xs text-green-500">+12.5%</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Bookings</CardTitle>
            <CalendarDays className="h-4 w-4 text-augwa" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">184</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Monthly</p>
            <div className="flex items-center pt-1">
              <ArrowUpRight className="w-3 h-3 text-green-500 mr-1" />
              <span className="text-xs text-green-500">+8.2%</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
            <Users className="h-4 w-4 text-augwa" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">43</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Total</p>
            <div className="flex items-center pt-1">
              <ArrowUpRight className="w-3 h-3 text-green-500 mr-1" />
              <span className="text-xs text-green-500">+2</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">new this month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Pending Invoices</CardTitle>
            <Receipt className="h-4 w-4 text-augwa" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">$3,420.00</p>
            <div className="flex items-center pt-1">
              <ArrowDownRight className="w-3 h-3 text-amber-500 mr-1" />
              <span className="text-xs text-amber-500">4 overdue</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">need attention</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-sm">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue for the current year</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                  <XAxis dataKey="name" className="text-xs text-gray-500 dark:text-gray-400" />
                  <YAxis className="text-xs text-gray-500 dark:text-gray-400" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      borderColor: '#e2e8f0',
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }} 
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    name="Revenue ($)" 
                    stroke="#0095ff" 
                    activeDot={{ r: 8 }} 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-sm">
          <CardHeader>
            <CardTitle>Weekly Bookings</CardTitle>
            <CardDescription>Number of bookings per day this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={bookingsData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                  <XAxis dataKey="name" className="text-xs text-gray-500 dark:text-gray-400" />
                  <YAxis className="text-xs text-gray-500 dark:text-gray-400" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      borderColor: '#e2e8f0',
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }} 
                  />
                  <Legend />
                  <Bar 
                    dataKey="bookings" 
                    name="Bookings" 
                    fill="#0095ff" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent Activity and Upcoming */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-sm">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest transactions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-4 border-b border-gray-100 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
                  <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium dark:text-white truncate">
                      {i % 2 === 0 ? 'Payment received' : 'New booking confirmed'}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {i % 2 === 0 ? 'Invoice #10045 paid by John Smith' : 'House cleaning for Lisa Johnson'}
                    </p>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    {i === 1 ? '5 min ago' : i === 2 ? '2 hours ago' : i === 3 ? 'Yesterday' : '2 days ago'}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-sm">
          <CardHeader>
            <CardTitle>Upcoming Bookings</CardTitle>
            <CardDescription>Next scheduled appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-4 border-b border-gray-100 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-md p-2 flex items-center justify-center">
                    <CalendarDays className="h-4 w-4 text-augwa" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium dark:text-white truncate">
                      {i === 1 ? 'Regular Cleaning' : i === 2 ? 'Deep Cleaning' : i === 3 ? 'Move-out Cleaning' : 'Window Cleaning'}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {i === 1 ? '123 Main St, Apt 4B' : i === 2 ? '456 Oak Ave' : i === 3 ? '789 Pine Rd' : '101 Elm Blvd'}
                    </p>
                  </div>
                  <div className="text-xs font-medium whitespace-nowrap">
                    <div className={`px-2 py-1 rounded-full ${i === 1 ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-500' : 'bg-augwa-100 text-augwa-800 dark:bg-augwa-900/30 dark:text-augwa-500'}`}>
                      {i === 1 ? 'Today, 2PM' : i === 2 ? 'Tomorrow, 10AM' : i === 3 ? 'Wed, 1PM' : 'Thu, 9AM'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
