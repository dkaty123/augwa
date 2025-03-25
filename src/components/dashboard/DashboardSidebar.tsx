
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Users,
  Calendar,
  Home,
  ClipboardList,
  FileText,
  Receipt,
  CreditCard,
  Clock,
  User,
  Briefcase,
  Building,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type SidebarItem = {
  title: string;
  icon: React.ElementType;
  path: string;
  section?: string;
};

const primaryItems: SidebarItem[] = [
  { title: "Dashboard", icon: Home, path: "/dashboard" },
  { title: "Clients", icon: Users, path: "/dashboard/clients" },
  { title: "Bookings", icon: Calendar, path: "/dashboard/bookings" },
  { title: "Booking Schedules", icon: ClipboardList, path: "/dashboard/schedules" },
  { title: "Quotes", icon: FileText, path: "/dashboard/quotes" },
  { title: "Invoices", icon: Receipt, path: "/dashboard/invoices" },
  { title: "Transactions", icon: CreditCard, path: "/dashboard/transactions" },
];

const staffItems: SidebarItem[] = [
  { title: "Staff", icon: Users, path: "/dashboard/staff", section: "header" },
  { title: "Punch clock", icon: Clock, path: "/dashboard/staff/punch-clock" },
  { title: "My profile", icon: User, path: "/dashboard/staff/profile" },
  { title: "My bookings", icon: Calendar, path: "/dashboard/staff/bookings" },
  { title: "Work log", icon: Briefcase, path: "/dashboard/staff/work-log" },
  { title: "Time off", icon: Calendar, path: "/dashboard/staff/time-off" },
];

const accountItems: SidebarItem[] = [
  { title: "Company Profile", icon: Building, path: "/dashboard/company" },
  { title: "Payment Account", icon: CreditCard, path: "/dashboard/payment" },
];

const DashboardSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile sidebar when changing routes
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  const renderNavItem = (item: SidebarItem) => {
    const isActive = location.pathname === item.path;
    const Icon = item.icon;

    return (
      <li key={item.path}>
        {item.section && !collapsed && (
          <div className="px-3 py-2 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
            {item.section}
          </div>
        )}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to={item.path}
                className={cn(
                  "flex items-center px-3 py-2 my-1 rounded-lg transition-all duration-200",
                  isActive
                    ? "bg-augwa/10 text-augwa dark:bg-augwa-900/20 dark:text-augwa-300"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                )}
              >
                <span className="flex items-center justify-center w-8 h-8">
                  <Icon size={20} className={isActive ? "text-augwa dark:text-augwa-300" : ""} />
                </span>
                {!collapsed && <span className="ml-2 font-medium">{item.title}</span>}
              </Link>
            </TooltipTrigger>
            {collapsed && (
              <TooltipContent side="right">
                <p>{item.title}</p>
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      </li>
    );
  };

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-full bg-white dark:bg-gray-800 shadow-md"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <Menu size={24} className="text-gray-700 dark:text-gray-200" />
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full z-40 transition-all duration-300 ease-in-out",
          collapsed ? "w-16" : "w-64",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-r border-gray-200 dark:border-gray-800 shadow-md"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="py-5 px-3 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
            <Link to="/dashboard" className="flex items-center">
              <div className="relative h-8 w-8 mr-2">
                <div className="absolute inset-0 bg-augwa rounded-lg rotate-3 opacity-70"></div>
                <div className="absolute inset-0 bg-augwa-600 rounded-lg -rotate-3"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">A</div>
              </div>
              {!collapsed && <span className="text-xl font-bold dark:text-white">Augwa</span>}
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="hidden lg:flex p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </Button>
          </div>

          {/* User info */}
          <div className={cn(
            "flex items-center p-3 border-b border-gray-200 dark:border-gray-800",
            collapsed ? "justify-center" : "justify-start"
          )}>
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://randomuser.me/api/portraits/women/56.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            {!collapsed && (
              <div className="ml-2 overflow-hidden">
                <p className="text-sm font-medium dark:text-white truncate">Jane Doe</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Admin</p>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-3 px-2">
            <nav>
              <ul className="space-y-1">
                {primaryItems.map(renderNavItem)}
              </ul>

              <div className="mt-6">
                <ul className="space-y-1">
                  {staffItems.map(renderNavItem)}
                </ul>
              </div>

              <div className="mt-6">
                <ul className="space-y-1">
                  {accountItems.map(renderNavItem)}
                </ul>
              </div>
            </nav>
          </div>

          {/* Logout */}
          <div className="p-3 border-t border-gray-200 dark:border-gray-800">
            <Button
              variant="ghost"
              className={cn(
                "w-full flex items-center text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 transition-colors",
                collapsed ? "justify-center px-2" : "justify-start"
              )}
              onClick={handleLogout}
            >
              <LogOut size={20} />
              {!collapsed && <span className="ml-2">Logout</span>}
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
