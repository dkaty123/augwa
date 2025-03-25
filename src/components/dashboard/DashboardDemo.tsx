
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, BarChart3, Clock, DollarSign, CheckCircle, X, Phone, Mail, Home, Menu, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DashboardDemo = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAppointment, setSelectedAppointment] = useState<number | null>(null);
  
  // Demo appointments data
  const appointments = [
    { id: 1, client: 'Jennifer Smith', time: '9:00 AM', duration: '3 hours', address: '123 Main St', status: 'confirmed' },
    { id: 2, client: 'Robert Jones', time: '1:30 PM', duration: '2.5 hours', address: '456 Oak Ave', status: 'pending' },
    { id: 3, client: 'Sarah Williams', time: '4:00 PM', duration: '2 hours', address: '789 Pine Rd', status: 'confirmed' },
    { id: 4, client: 'Michael Brown', time: '10:00 AM', duration: '4 hours', address: '101 Cedar Lane', status: 'confirmed' },
  ];
  
  const clients = [
    { id: 1, name: 'Jennifer Smith', email: 'jennifer@example.com', phone: '(555) 123-4567', address: '123 Main St', status: 'active' },
    { id: 2, name: 'Robert Jones', email: 'robert@example.com', phone: '(555) 234-5678', address: '456 Oak Ave', status: 'active' },
    { id: 3, name: 'Sarah Williams', email: 'sarah@example.com', phone: '(555) 345-6789', address: '789 Pine Rd', status: 'active' },
    { id: 4, name: 'Michael Brown', email: 'michael@example.com', phone: '(555) 456-7890', address: '101 Cedar Lane', status: 'inactive' },
  ];
  
  // Filter appointments/clients based on search query
  const filteredAppointments = appointments.filter(appt => 
    appt.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
    appt.address.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.phone.includes(searchQuery)
  );
  
  // Handler functions
  const handleAppointmentConfirm = (id: number) => {
    setSelectedAppointment(id);
    // This would normally update the appointment in your database
  };
  
  const handleAppointmentCancel = (id: number) => {
    // This would normally update the appointment in your database
  };
  
  return (
    <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
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
      
      {/* Dashboard search */}
      <div className="border-b border-gray-200 dark:border-gray-700 p-4">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              className="pl-9 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              placeholder="Search clients, appointments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="default" className="bg-augwa hover:bg-augwa-600">
            <Menu className="mr-2 h-4 w-4" />
            Menu
          </Button>
        </div>
      </div>
      
      {/* Dashboard navigation */}
      <Tabs defaultValue="overview" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-gray-100 dark:bg-gray-900/50 p-1">
          <TabsTrigger value="overview" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">
            <BarChart3 className="h-4 w-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="schedule" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule
          </TabsTrigger>
          <TabsTrigger value="clients" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">
            <Users className="h-4 w-4 mr-2" />
            Clients
          </TabsTrigger>
          <TabsTrigger value="income" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">
            <DollarSign className="h-4 w-4 mr-2" />
            Income
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="p-4">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Summary cards */}
              <Card className="bg-white dark:bg-gray-800/70">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center">
                    <Calendar className="h-4 w-4 text-blue-500 mr-2" />
                    Today's Appointments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Next: 10:30 AM</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white dark:bg-gray-800/70">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center">
                    <DollarSign className="h-4 w-4 text-green-500 mr-2" />
                    Today's Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$1,280</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">+12% from yesterday</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white dark:bg-gray-800/70">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center">
                    <Users className="h-4 w-4 text-purple-500 mr-2" />
                    Active Clients
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">247</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">3 new this week</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Upcoming appointments */}
            <Card className="bg-white dark:bg-gray-800/70">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Upcoming Appointments</CardTitle>
                <CardDescription>Today's scheduled services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {filteredAppointments.map((appointment) => (
                    <motion.div 
                      key={appointment.id}
                      className={`p-3 rounded-lg border ${
                        selectedAppointment === appointment.id 
                          ? 'border-augwa bg-augwa-50 dark:bg-augwa-900/20' 
                          : 'border-gray-200 dark:border-gray-700'
                      } hover:border-augwa dark:hover:border-augwa-600 transition-colors`}
                      whileHover={{ scale: 1.01 }}
                      layout
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`h-2.5 w-2.5 rounded-full ${
                            appointment.status === 'confirmed' ? 'bg-green-500' : 'bg-yellow-500'
                          }`}></div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">{appointment.client}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{appointment.time} · {appointment.duration}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{appointment.address}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleAppointmentConfirm(appointment.id)}
                            className="text-green-500 hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20"
                          >
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleAppointmentCancel(appointment.id)}
                            className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="schedule" className="p-4">
          <div className="flex flex-col">
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-center py-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 35 }).map((_, i) => {
                const date = i - 3; // Offset to start the month correctly
                return (
                  <div 
                    key={i} 
                    className={`
                      p-2 h-20 border rounded-md transition-colors 
                      ${date < 1 || date > 30 ? 'bg-gray-100 dark:bg-gray-800/40 text-gray-400' : 'bg-white dark:bg-gray-800'} 
                      ${date === 15 ? 'border-augwa dark:border-augwa-600 bg-augwa-50 dark:bg-augwa-900/20' : 'border-gray-200 dark:border-gray-700'}
                      hover:border-augwa dark:hover:border-augwa-600
                    `}
                  >
                    <div className="text-right text-sm mb-1">{date < 1 || date > 30 ? (date < 1 ? 31 + date : date - 30) : date}</div>
                    {date === 15 && (
                      <div className="text-xs p-1 bg-augwa text-white rounded">
                        3 bookings
                      </div>
                    )}
                    {date === 18 && (
                      <div className="text-xs p-1 bg-green-500 text-white rounded">
                        2 bookings
                      </div>
                    )}
                    {date === 22 && (
                      <div className="text-xs p-1 bg-amber-500 text-white rounded">
                        1 booking
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="clients" className="p-4">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Client Directory</h3>
              <Button className="bg-augwa hover:bg-augwa-600">
                Add New Client
              </Button>
            </div>
            
            <div className="grid gap-3">
              {filteredClients.map((client) => (
                <Card key={client.id} className="bg-white dark:bg-gray-800/70">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`https://ui-avatars.com/api/?name=${client.name.replace(' ', '+')}&background=random`} />
                        <AvatarFallback>{client.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-gray-900 dark:text-white truncate">{client.name}</p>
                          <Badge variant={client.status === 'active' ? 'default' : 'secondary'}>
                            {client.status}
                          </Badge>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-1">
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Mail className="h-3 w-3 mr-1 flex-shrink-0" />
                            <span className="truncate">{client.email}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Phone className="h-3 w-3 mr-1 flex-shrink-0" />
                            <span>{client.phone}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Home className="h-3 w-3 mr-1 flex-shrink-0" />
                            <span className="truncate">{client.address}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">Details</Button>
                        <Button variant="outline" size="sm" className="bg-augwa/10 border-augwa/20 text-augwa hover:bg-augwa/20 dark:bg-augwa-900/20 dark:border-augwa-800/30 dark:text-augwa-300">
                          Book
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="income" className="p-4">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Monthly Revenue</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Export
                </Button>
                <Button variant="outline" size="sm" className="bg-augwa/10 border-augwa/20 text-augwa hover:bg-augwa/20 dark:bg-augwa-900/20 dark:border-augwa-800/30 dark:text-augwa-300">
                  Reports
                </Button>
              </div>
            </div>
            
            <div className="h-64 bg-gray-100 dark:bg-gray-800/50 rounded-lg flex items-center justify-center">
              <div className="text-center p-6">
                <BarChart3 className="h-12 w-12 mx-auto text-augwa-500 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Interactive Revenue Chart</h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-md">
                  Track your business performance with beautiful, easy-to-understand visualizations
                </p>
                <Button className="mt-4 bg-augwa hover:bg-augwa-600">
                  Generate Report
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-white dark:bg-gray-800/70">
                <CardHeader>
                  <CardTitle>Unpaid Invoices</CardTitle>
                  <CardDescription>Invoices awaiting payment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i} 
                        className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-augwa dark:hover:border-augwa-600 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">Invoice #{1000 + i}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {i === 1 ? 'Jennifer Smith' : i === 2 ? 'Robert Jones' : 'Sarah Williams'}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-gray-900 dark:text-white">${i * 120}.00</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Due: {i === 1 ? 'Today' : i === 2 ? 'Tomorrow' : 'In 3 days'}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white dark:bg-gray-800/70">
                <CardHeader>
                  <CardTitle>Recent Payments</CardTitle>
                  <CardDescription>Last 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i} 
                        className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-augwa dark:hover:border-augwa-600 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {i === 1 ? 'Michael Brown' : i === 2 ? 'Emily Davis' : 'David Wilson'}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {i === 1 ? 'Credit Card' : i === 2 ? 'Bank Transfer' : 'PayPal'}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-gray-900 dark:text-white">${i * 150}.00</p>
                            <p className="text-xs text-green-500">Paid</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardDemo;
