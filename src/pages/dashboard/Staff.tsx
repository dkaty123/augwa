
import React, { useState } from "react";
import { 
  Users, Search, Plus, Edit, Trash2, MoreVertical, User, Mail, 
  Phone, Calendar, BarChart2, Clock, MapPin, Star, UserCheck
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mockStaff = [
  {
    id: 1,
    name: "Michael Rodriguez",
    role: "Team Lead",
    email: "michael@example.com",
    phone: "(555) 123-4567",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    status: "active",
    experience: "5 years",
    weeklyHours: 38,
    rating: 4.9,
    specialties: ["Deep Clean", "Move Out"],
    scheduledToday: 3,
    earnings: {
      weekly: "$950",
      monthly: "$3,850"
    }
  },
  {
    id: 2,
    name: "Sarah Lewis",
    role: "Cleaner",
    email: "sarah@example.com",
    phone: "(555) 234-5678",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    status: "active",
    experience: "3 years",
    weeklyHours: 32,
    rating: 4.8,
    specialties: ["Standard Clean", "Carpet Cleaning"],
    scheduledToday: 2,
    earnings: {
      weekly: "$820",
      monthly: "$3,280"
    }
  },
  {
    id: 3,
    name: "David Smith",
    role: "Cleaner",
    email: "david@example.com",
    phone: "(555) 345-6789",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    status: "active",
    experience: "2 years",
    weeklyHours: 28,
    rating: 4.7,
    specialties: ["Standard Clean", "Window Cleaning"],
    scheduledToday: 2,
    earnings: {
      weekly: "$730",
      monthly: "$2,920"
    }
  },
  {
    id: 4,
    name: "Emma Thompson",
    role: "Cleaner",
    email: "emma@example.com",
    phone: "(555) 456-7890",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    status: "inactive",
    experience: "1 year",
    weeklyHours: 20,
    rating: 4.5,
    specialties: ["Standard Clean"],
    scheduledToday: 0,
    earnings: {
      weekly: "$520",
      monthly: "$2,080"
    }
  },
  {
    id: 5,
    name: "Jason Brown",
    role: "Team Lead",
    email: "jason@example.com",
    phone: "(555) 567-8901",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    status: "active",
    experience: "4 years",
    weeklyHours: 36,
    rating: 4.8,
    specialties: ["Deep Clean", "Move Out", "Move In"],
    scheduledToday: 3,
    earnings: {
      weekly: "$910",
      monthly: "$3,640"
    }
  }
];

const staffMetrics = {
  activeMembers: 4,
  totalHoursThisWeek: 154,
  averageRating: 4.7,
  totalBookingsToday: 10
};

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "active":
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    case "inactive":
      return "bg-gray-100 text-gray-700 dark:bg-gray-700/50 dark:text-gray-400";
    case "pending":
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
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

const Staff = () => {
  const [activeView, setActiveView] = useState("grid");
  
  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Staff Management</h1>
          <p className="text-muted-foreground">Manage your cleaning team members and permissions</p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Staff Member
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-augwa-100 dark:bg-augwa-900/30 p-3 rounded-xl">
                <Users className="h-6 w-6 text-augwa-600 dark:text-augwa-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Members</p>
                <p className="text-2xl font-bold">{staffMetrics.activeMembers}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-xl">
                <Clock className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Hours This Week</p>
                <p className="text-2xl font-bold">{staffMetrics.totalHoursThisWeek}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl">
                <Star className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Average Rating</p>
                <p className="text-2xl font-bold">{staffMetrics.averageRating}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl">
                <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Today's Bookings</p>
                <p className="text-2xl font-bold">{staffMetrics.totalBookingsToday}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>Team Members</CardTitle>
            <Tabs 
              defaultValue="all" 
              className="w-[300px]"
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="inactive">Inactive</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <CardDescription>
            Manage staff, schedules, and performance tracking
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex items-center justify-between mb-6">
            <div className="relative w-72">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search staff members..." 
                className="pl-8"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant={activeView === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setActiveView("grid")}
                className="h-8 w-8"
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
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              </Button>
              <Button 
                variant={activeView === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setActiveView("list")}
                className="h-8 w-8"
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
            </div>
          </div>
          
          {activeView === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockStaff.map(staff => (
                <div 
                  key={staff.id}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={staff.avatar} 
                        alt={staff.name} 
                        className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-sm"
                      />
                      <div>
                        <h3 className="font-semibold">{staff.name}</h3>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">{staff.role}</Badge>
                          <StatusBadge status={staff.status} />
                        </div>
                      </div>
                    </div>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <UserCheck className="h-4 w-4 mr-2" />
                          <span>View Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>View Schedule</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          <span>Edit Details</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-500">
                          <Trash2 className="h-4 w-4 mr-2" />
                          <span>Remove</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>{staff.email}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>{staff.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Experience: {staff.experience}</span>
                    </div>
                  </div>
                  
                  <div className="mt-5 pt-5 border-t border-gray-100 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg text-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Today's Jobs</p>
                        <p className="text-lg font-semibold">{staff.scheduledToday}</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg text-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Weekly Hours</p>
                        <p className="text-lg font-semibold">{staff.weeklyHours}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Specialties:</p>
                      <div className="flex flex-wrap gap-1">
                        {staff.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left font-medium p-3">Staff Member</th>
                    <th className="text-left font-medium p-3">Contact Info</th>
                    <th className="text-left font-medium p-3">Status</th>
                    <th className="text-left font-medium p-3">Experience</th>
                    <th className="text-left font-medium p-3">Today's Jobs</th>
                    <th className="text-center font-medium p-3">Rating</th>
                    <th className="text-right font-medium p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockStaff.map(staff => (
                    <tr 
                      key={staff.id}
                      className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    >
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img 
                            src={staff.avatar} 
                            alt={staff.name} 
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-medium">{staff.name}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{staff.role}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <p>{staff.email}</p>
                        <p className="text-gray-500 dark:text-gray-400">{staff.phone}</p>
                      </td>
                      <td className="p-3">
                        <StatusBadge status={staff.status} />
                      </td>
                      <td className="p-3">{staff.experience}</td>
                      <td className="p-3">{staff.scheduledToday}</td>
                      <td className="p-3 text-center">
                        <div className="flex items-center justify-center">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                          <span>{staff.rating}</span>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <UserCheck className="h-4 w-4 mr-2" />
                                <span>View Profile</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Calendar className="h-4 w-4 mr-2" />
                                <span>View Schedule</span>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-500">
                                <Trash2 className="h-4 w-4 mr-2" />
                                <span>Remove</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Staff;
