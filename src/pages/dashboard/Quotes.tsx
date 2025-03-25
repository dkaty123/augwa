
import React from "react";
import PlaceholderPage from "@/components/dashboard/PlaceholderPage";
import { FileText } from "lucide-react";

const Quotes = () => {
  return (
    <PlaceholderPage
      title="Quotes"
      description="Create and manage price quotes for potential clients"
      icon={<FileText className="h-6 w-6 text-augwa dark:text-augwa-400" />}
    />
  );
};

export default Quotes;
