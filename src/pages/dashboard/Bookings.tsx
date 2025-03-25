
import React, { useState } from "react";
import { 
  Calendar, Search, Filter, Plus, MapPin, Clock, Users, 
  MoreHorizontal, CheckCircle, XCircle, Trash2, ChevronLeft, 
  ChevronRight, ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const mockBookings = [
  {
    id: 1,
    client: "Jennifer Wilson",
    address: "1234 Maple Avenue, Seattle, WA",
    date: "Today",
    time: "09:00 AM - 12:00 PM",
    status: "confirmed",
    staff: ["Michael R.", "Sarah L."],
    type: "Deep Clean",
    total: "$225.00"
  },
  {
    id: 2,
    client: "Robert Thompson",
    address: "567 Pine Street, Seattle, WA",
    date: "Today",
    time: "01:30 PM - 03:30 PM",
    status: "in-progress",
    staff: ["David S."],
    type: "Standard Clean",
    total: "$120.00"
  },
  {
    id: 3,
    client: "Jessica Brown",
    address: "890 Oak Drive, Bellevue, WA",
    date: "Today",
    time: "04:00 PM - 07:00 PM",
    status: "scheduled",
    staff: ["Michael R.", "Emma T."],
    type: "Move-Out Clean",
    total: "$320.00"
  },
  {
    id: 4,
    client: "Daniel Miller",
    address: "2345 Cedar Lane, Redmond, WA",
    date: "Tomorrow",
    time: "10:00 AM - 12:30 PM",
    status: "scheduled",
    staff: ["Sarah L."],
    type: "Standard Clean",
    total: "$150.00"
  },
  {
    id: 5,
    client: "Samantha Davis",
    address: "6789 Elm Boulevard, Kirkland, WA",
    date: "Tomorrow",
    time: "02:00 PM - 05:00 PM",
    status: "pending",
    staff: ["David S.", "Emma T."],
    type: "Deep Clean",
    total: "$240.00"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "confirmed":
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    case "scheduled":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
    case "pending":
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
    case "in-progress":
      return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
    case "completed":
      return "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300";
    case "cancelled":
      return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
    default:
      return "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300";
  }
};

const StatusBadge = ({ status }: { status: string }) => {
  const colorClass = getStatusColor(status);
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClass}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

const Bookings = () => {
  const [activeView, setActiveView] = useState("list");
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const incrementDate = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 1);
    setCurrentDate(newDate);
  };
  
  const decrementDate = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 1);
    setCurrentDate(newDate);
  };
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };
  
  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };
  
  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Bookings</h1>
          <p className="text-muted-foreground">Manage and schedule your client appointments</p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Tabs defaultValue="upcoming" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <Button className="ml-4">
            <Plus className="h-4 w-4 mr-2" />
            New Booking
          </Button>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row items-start gap-4">
        <div className="w-full md:w-64 space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Calendar</h3>
                <Button variant="ghost" size="sm">
                  <Calendar className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="text-center p-2 border rounded-lg bg-gray-50 dark:bg-gray-800">
                {/* Calendar placeholder */}
                <div className="font-semibold mb-1 text-sm text-muted-foreground">
                  AUGUST 2023
                </div>
                <div className="grid grid-cols-7 gap-1 text-xs mb-2">
                  {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                    <div key={i} className="p-1">{day}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1 text-xs">
                  {Array.from({ length: 31 }, (_, i) => (
                    <div 
                      key={i} 
                      className={`p-1 rounded-full ${i === 14 ? 'bg-augwa text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'} cursor-pointer`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Filters</h3>
              
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium mb-1 block">Status</label>
                  <select className="w-full p-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm">
                    <option>All Statuses</option>
                    <option>Confirmed</option>
                    <option>Scheduled</option>
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                    <option>Cancelled</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Staff</label>
                  <select className="w-full p-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm">
                    <option>All Staff</option>
                    <option>Michael R.</option>
                    <option>Sarah L.</option>
                    <option>David S.</option>
                    <option>Emma T.</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Service Type</label>
                  <select className="w-full p-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm">
                    <option>All Types</option>
                    <option>Standard Clean</option>
                    <option>Deep Clean</option>
                    <option>Move-In Clean</option>
                    <option>Move-Out Clean</option>
                  </select>
                </div>
                
                <Button className="w-full">
                  <Filter className="h-4 w-4 mr-2" />
                  Apply Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex-1 w-full">
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <div className="flex items-center mb-4 sm:mb-0">
                  <Button variant="outline" size="icon" onClick={decrementDate}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <div className="mx-4 text-center">
                    <h3 className="font-bold text-lg">{formatDate(currentDate)}</h3>
                    {isToday(currentDate) && (
                      <span className="text-xs text-muted-foreground">Today</span>
                    )}
                  </div>
                  <Button variant="outline" size="icon" onClick={incrementDate}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex items-center w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-64">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="Search bookings..." 
                      className="pl-8"
                    />
                  </div>
                  <div className="flex ml-2">
                    <Button 
                      variant={activeView === "list" ? "default" : "outline"}
                      size="icon"
                      onClick={() => setActiveView("list")}
                      className="rounded-r-none"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="h-4 w-4"
                      >
                        <line x1="8" y1="6" x2="21" y2="6" />
                        <line x1="8" y1="12" x2="21" y2="12" />
                        <line x1="8" y1="18" x2="21" y2="18" />
                        <line x1="3" y1="6" x2="3.01" y2="6" />
                        <line x1="3" y1="12" x2="3.01" y2="12" />
                        <line x1="3" y1="18" x2="3.01" y2="18" />
                      </svg>
                    </Button>
                    <Button 
                      variant={activeView === "calendar" ? "default" : "outline"}
                      size="icon"
                      onClick={() => setActiveView("calendar")}
                      className="rounded-l-none"
                    >
                      <Calendar className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {activeView === "list" ? (
                <div className="space-y-4">
                  {mockBookings.map(booking => (
                    <div 
                      key={booking.id}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow bg-white dark:bg-gray-800"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-lg">{booking.client}</h4>
                            <StatusBadge status={booking.status} />
                          </div>
                          
                          <div className="flex flex-col mt-2 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{booking.address}</span>
                            </div>
                            <div className="flex items-center mt-1">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{booking.date}, {booking.time}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-row sm:flex-col items-end gap-2">
                          <Badge variant="outline" className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-augwa"></div>
                            <span>{booking.type}</span>
                          </Badge>
                          <div className="text-lg font-bold">{booking.total}</div>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex flex-wrap justify-between items-center">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1 text-gray-500 dark:text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">Staff:</span>
                          <div className="flex -space-x-2">
                            {booking.staff.map((name, index) => (
                              <div 
                                key={index} 
                                className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-medium border border-white dark:border-gray-800"
                                title={name}
                              >
                                {name.charAt(0)}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex gap-1 mt-2 sm:mt-0">
                          <Button size="sm" variant="outline" className="h-8">
                            View Details
                          </Button>
                          
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <CheckCircle className="h-4 w-4 mr-2" />
                                <span>Complete</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <XCircle className="h-4 w-4 mr-2" />
                                <span>Cancel</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Calendar className="h-4 w-4 mr-2" />
                                <span>Reschedule</span>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-500 dark:text-red-400">
                                <Trash2 className="h-4 w-4 mr-2" />
                                <span>Delete</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="flex justify-center mt-6">
                    <Button variant="outline" className="mr-2">
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Previous
                    </Button>
                    <Button>
                      Next
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="border rounded-lg p-6 bg-white dark:bg-gray-800 min-h-[500px] flex flex-col items-center justify-center">
                  <Calendar className="h-16 w-16 text-augwa mb-4 opacity-70" />
                  <h3 className="text-xl font-medium mb-2">Calendar View</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400 max-w-md mb-6">
                    The calendar view gives you a visual overview of all your scheduled bookings.
                  </p>
                  <Button>
                    Switch to Calendar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
