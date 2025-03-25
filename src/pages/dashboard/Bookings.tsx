
import React from "react";
import PlaceholderPage from "@/components/dashboard/PlaceholderPage";
import { Calendar } from "lucide-react";

const Bookings = () => {
  return (
    <PlaceholderPage
      title="Bookings"
      description="Schedule and manage client appointments"
      icon={<Calendar className="h-6 w-6 text-augwa dark:text-augwa-400" />}
    />
  );
};

export default Bookings;
