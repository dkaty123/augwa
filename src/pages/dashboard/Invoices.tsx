
import React from "react";
import PlaceholderPage from "@/components/dashboard/PlaceholderPage";
import { Receipt } from "lucide-react";

const Invoices = () => {
  return (
    <PlaceholderPage
      title="Invoices"
      description="Generate and track invoices for your services"
      icon={<Receipt className="h-6 w-6 text-augwa dark:text-augwa-400" />}
    />
  );
};

export default Invoices;
