
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Download, Send, FileText, Filter, ArrowUpDown, MoreHorizontal, CheckCircle2, Clock, XCircle, Search } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

// Sample invoice data
const invoiceData = [
  { id: "INV-001", client: "John Smith", date: "2023-09-15", amount: "$245.00", status: "paid" },
  { id: "INV-002", client: "Downtown Office", date: "2023-09-10", amount: "$850.00", status: "paid" },
  { id: "INV-003", client: "Sarah Johnson", date: "2023-09-05", amount: "$320.00", status: "pending" },
  { id: "INV-004", client: "Wilson Residence", date: "2023-09-01", amount: "$175.00", status: "pending" },
  { id: "INV-005", client: "Tech Innovations", date: "2023-08-25", amount: "$1,250.00", status: "paid" },
  { id: "INV-006", client: "Lakeside Apartments", date: "2023-08-20", amount: "$580.00", status: "overdue" },
  { id: "INV-007", client: "Robert Wilson", date: "2023-08-15", amount: "$340.00", status: "overdue" },
  { id: "INV-008", client: "Green Gardens", date: "2023-08-10", amount: "$420.00", status: "draft" },
];

const Invoices = () => {
  const [invoices, setInvoices] = useState(invoiceData);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddInvoiceOpen, setIsAddInvoiceOpen] = useState(false);
  const [newInvoice, setNewInvoice] = useState({
    client: "",
    amount: "",
    status: "draft"
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredInvoices = invoices.filter(invoice => 
    invoice.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
    invoice.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddInvoice = () => {
    if (!newInvoice.client || !newInvoice.amount) {
      toast.error("Please fill in all required fields");
      return;
    }

    const newId = `INV-00${invoices.length + 1}`;
    const currentDate = new Date().toISOString().split('T')[0];
    
    setInvoices([
      {
        id: newId,
        client: newInvoice.client,
        date: currentDate,
        amount: `$${newInvoice.amount}`,
        status: newInvoice.status
      },
      ...invoices
    ]);

    setNewInvoice({
      client: "",
      amount: "",
      status: "draft"
    });

    setIsAddInvoiceOpen(false);
    toast.success("Invoice created successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight dark:text-white">Invoices</h1>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <Dialog open={isAddInvoiceOpen} onOpenChange={setIsAddInvoiceOpen}>
            <DialogTrigger asChild>
              <Button className="bg-augwa hover:bg-augwa-600">
                <Plus className="h-4 w-4 mr-2" />
                Add Invoice
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Invoice</DialogTitle>
                <DialogDescription>
                  Add a new invoice to your dashboard. Fill in all the required information.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="client">Client Name</Label>
                  <Input 
                    id="client" 
                    value={newInvoice.client}
                    onChange={(e) => setNewInvoice({...newInvoice, client: e.target.value})}
                    placeholder="Enter client name"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="amount">Amount ($)</Label>
                  <Input 
                    id="amount" 
                    type="number" 
                    value={newInvoice.amount}
                    onChange={(e) => setNewInvoice({...newInvoice, amount: e.target.value})}
                    placeholder="0.00"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="status">Status</Label>
                  <Select 
                    value={newInvoice.status}
                    onValueChange={(value) => setNewInvoice({...newInvoice, status: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="paid">Paid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddInvoiceOpen(false)}>Cancel</Button>
                <Button className="bg-augwa hover:bg-augwa-600" onClick={handleAddInvoice}>Create Invoice</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-medium dark:text-white">All Invoices</h2>
          <div className="flex items-center mt-4 sm:mt-0 space-x-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                type="search"
                placeholder="Search invoices..."
                className="pl-8 w-[250px]"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice ID</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInvoices.length > 0 ? (
                filteredInvoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">{invoice.id}</TableCell>
                    <TableCell>{invoice.client}</TableCell>
                    <TableCell>{invoice.date}</TableCell>
                    <TableCell>{invoice.amount}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={cn(
                          "px-2 py-1",
                          invoice.status === "paid" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" :
                          invoice.status === "pending" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400" :
                          invoice.status === "overdue" ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400" :
                          "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"
                        )}
                      >
                        {invoice.status === "paid" ? (
                          <CheckCircle2 className="w-3.5 h-3.5 mr-1 inline" />
                        ) : invoice.status === "pending" ? (
                          <Clock className="w-3.5 h-3.5 mr-1 inline" />
                        ) : invoice.status === "overdue" ? (
                          <XCircle className="w-3.5 h-3.5 mr-1 inline" />
                        ) : (
                          <FileText className="w-3.5 h-3.5 mr-1 inline" />
                        )}
                        {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => toast.info(`Viewing invoice ${invoice.id}`)}>
                            <FileText className="h-4 w-4 mr-2" />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => toast.info(`Downloading invoice ${invoice.id}`)}>
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => toast.success(`Email sent to client for invoice ${invoice.id}`)}>
                            <Send className="h-4 w-4 mr-2" />
                            Send Email
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => {
                              const newInvoices = invoices.filter(inv => inv.id !== invoice.id);
                              setInvoices(newInvoices);
                              toast.success(`Invoice ${invoice.id} deleted successfully`);
                            }}
                            className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                          >
                            <X className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-gray-500 dark:text-gray-400">
                    No invoices found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing <strong>{filteredInvoices.length}</strong> of <strong>{invoices.length}</strong> invoices
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm" disabled>Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
