
import React from "react";
import PlaceholderPage from "@/components/dashboard/PlaceholderPage";
import { CreditCard } from "lucide-react";

const Transactions = () => {
  return (
    <PlaceholderPage
      title="Transactions"
      description="Track financial transactions and payment history"
      icon={<CreditCard className="h-6 w-6 text-augwa dark:text-augwa-400" />}
    />
  );
};

export default Transactions;
