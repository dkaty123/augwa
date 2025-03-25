
import React from "react";
import PlaceholderPage from "@/components/dashboard/PlaceholderPage";
import { Users } from "lucide-react";

const Staff = () => {
  return (
    <PlaceholderPage
      title="Staff"
      description="Manage your cleaning team members and permissions"
      icon={<Users className="h-6 w-6 text-augwa dark:text-augwa-400" />}
    />
  );
};

export default Staff;
