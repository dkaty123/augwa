
import React from "react";
import PlaceholderPage from "@/components/dashboard/PlaceholderPage";
import { ClipboardList } from "lucide-react";

const BookingSchedules = () => {
  return (
    <PlaceholderPage
      title="Booking Schedules"
      description="Organize and plan your cleaning crew schedules"
      icon={<ClipboardList className="h-6 w-6 text-augwa dark:text-augwa-400" />}
    />
  );
};

export default BookingSchedules;
