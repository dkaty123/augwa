
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Clients from "./pages/dashboard/Clients";
import Bookings from "./pages/dashboard/Bookings";
import BookingSchedules from "./pages/dashboard/BookingSchedules";
import Quotes from "./pages/dashboard/Quotes";
import Invoices from "./pages/dashboard/Invoices";
import Transactions from "./pages/dashboard/Transactions";
import Staff from "./pages/dashboard/Staff";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="clients" element={<Clients />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="schedules" element={<BookingSchedules />} />
            <Route path="quotes" element={<Quotes />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="staff" element={<Staff />} />
            
            {/* Staff routes would be nested here */}
            <Route path="staff/*" element={<Staff />} />
            
            {/* Company and Payment routes */}
            <Route path="company" element={<Staff />} />
            <Route path="payment" element={<Staff />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
