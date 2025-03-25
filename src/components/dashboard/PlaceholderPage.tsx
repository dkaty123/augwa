
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

type PlaceholderPageProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, description, icon }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight dark:text-white">{title}</h1>
        <Button className="bg-augwa hover:bg-augwa-600 transition-all duration-300">
          <Plus className="h-4 w-4 mr-2" /> Add New {title.slice(0, -1)}
        </Button>
      </div>
      
      <Card className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>{title} Management</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
            {icon && <div>{icon}</div>}
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="rounded-full bg-augwa-100 dark:bg-augwa-900/30 p-6 mb-4">
              {icon || <Plus className="h-12 w-12 text-augwa dark:text-augwa-400" />}
            </div>
            <h3 className="text-xl font-medium mb-2 dark:text-white">No {title.toLowerCase()} yet</h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mb-6">
              Get started by creating your first {title.toLowerCase().slice(0, -1)} to begin managing your cleaning business.
            </p>
            <Button className="bg-augwa hover:bg-augwa-600 transition-all duration-300">
              <Plus className="h-4 w-4 mr-2" /> Create {title.slice(0, -1)}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlaceholderPage;
