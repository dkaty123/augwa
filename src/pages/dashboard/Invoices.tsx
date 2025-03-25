
import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  FileText, 
  Filter, 
  MoreVertical, 
  Plus, 
  Search,
  XCircle 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

// Sample invoice data
const invoices = [
  {
    id: "INV-001",
    client: "Green Valley Homes",
    amount: 230.00,
    date: "2023-06-01",
    status: "paid",
    service: "Regular Cleaning"
  },
  {
    id: "INV-002",
    client: "Blue Ocean Properties",
    amount: 450.00,
    date: "2023-06-05",
    status: "pending",
    service: "Deep Cleaning"
  },
  {
    id: "INV-003",
    client: "Sunset Apartments",
    amount: 180.00,
    date: "2023-06-10",
    status: "overdue",
    service: "Regular Cleaning"
  },
  {
    id: "INV-004",
    client: "Mountain View Condos",
    amount: 350.00,
    date: "2023-06-15",
    status: "paid",
    service: "Window Cleaning"
  },
  {
    id: "INV-005",
    client: "City Center Office Complex",
    amount: 1200.00,
    date: "2023-06-20",
    status: "pending",
    service: "Commercial Cleaning"
  }
];

const Invoices = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [filteredStatus, setFilteredStatus] = useState("all");
  const [invoiceData, setInvoiceData] = useState(invoices);
  const [newInvoice, setNewInvoice] = useState({
    id: `INV-00${invoiceData.length + 1}`,
    client: "",
    amount: 0,
    date: new Date().toISOString().split('T')[0],
    status: "pending",
    service: "Regular Cleaning"
  });
  
  const { toast } = useToast();
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const handleStatusFilter = (status) => {
    setFilteredStatus(status);
  };
  
  const handleAddInvoice = () => {
    if (!newInvoice.client || newInvoice.amount <= 0) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    const updatedInvoices = [...invoiceData, newInvoice];
    setInvoiceData(updatedInvoices);
    setIsDialogOpen(false);
    
    // Reset form
    setNewInvoice({
      id: `INV-00${updatedInvoices.length + 1}`,
      client: "",
      amount: 0,
      date: new Date().toISOString().split('T')[0],
      status: "pending",
      service: "Regular Cleaning"
    });
    
    toast({
      title: "Invoice Created",
      description: `Invoice ${newInvoice.id} has been created successfully`,
    });
  };
  
  const handleDeleteInvoice = (id) => {
    const updatedInvoices = invoiceData.filter(invoice => invoice.id !== id);
    setInvoiceData(updatedInvoices);
    
    toast({
      title: "Invoice Deleted",
      description: `Invoice ${id} has been deleted`,
    });
  };
  
  const filteredInvoices = invoiceData.filter(invoice => {
    const matchesSearch = invoice.client.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          invoice.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filteredStatus === "all" || invoice.status === filteredStatus;
    
    return matchesSearch && matchesStatus;
  });
  
  // Calculate total amounts
  const totalPending = invoiceData
    .filter(inv => inv.status === "pending")
    .reduce((sum, inv) => sum + inv.amount, 0);
    
  const totalOverdue = invoiceData
    .filter(inv => inv.status === "overdue")
    .reduce((sum, inv) => sum + inv.amount, 0);
    
  const totalPaid = invoiceData
    .filter(inv => inv.status === "paid")
    .reduce((sum, inv) => sum + inv.amount, 0);
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight dark:text-white">Invoices</h1>
        <Button 
          onClick={() => setIsDialogOpen(true)}
          className="mt-4 sm:mt-0"
        >
          <Plus className="mr-2 h-4 w-4" />
          New Invoice
        </Button>
      </div>
      
      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className={cn(
          "bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-sm",
          "hover:shadow-md transition-all duration-300"
        )}>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-500">${totalPending.toFixed(2)}</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {invoiceData.filter(inv => inv.status === "pending").length} invoices
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Overdue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">${totalOverdue.toFixed(2)}</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {invoiceData.filter(inv => inv.status === "overdue").length} invoices
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Paid</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">${totalPaid.toFixed(2)}</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {invoiceData.filter(inv => inv.status === "paid").length} invoices
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-sm">
        <CardHeader>
          <CardTitle>All Invoices</CardTitle>
          <CardDescription>Manage and view your invoices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input 
                placeholder="Search invoices..." 
                className="pl-10" 
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => handleStatusFilter("all")}>
                    All
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleStatusFilter("paid")}>
                    Paid
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleStatusFilter("pending")}>
                    Pending
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleStatusFilter("overdue")}>
                    Overdue
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
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
                    <TableCell>{invoice.service}</TableCell>
                    <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                    <TableCell>{invoice.date}</TableCell>
                    <TableCell>
                      <Badge 
                        variant="outline" 
                        className={cn(
                          invoice.status === 'paid' && "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
                          invoice.status === 'pending' && "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
                          invoice.status === 'overdue' && "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                        )}
                      >
                        {invoice.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0" aria-label="Open menu">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem className="cursor-pointer">
                            <FileText className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem 
                            className="cursor-pointer text-red-600 focus:text-red-600"
                            onClick={() => handleDeleteInvoice(invoice.id)}
                          >
                            <XCircle className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-6 text-muted-foreground">
                    No invoices found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      {/* Add Invoice Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Create New Invoice</DialogTitle>
            <DialogDescription>
              Fill in the details to create a new invoice. Click submit when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="invoice-id" className="text-right">
                ID
              </Label>
              <Input
                id="invoice-id"
                value={newInvoice.id}
                className="col-span-3"
                disabled
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="client" className="text-right">
                Client
              </Label>
              <Input
                id="client"
                placeholder="Client name"
                className="col-span-3"
                value={newInvoice.client}
                onChange={(e) => setNewInvoice({...newInvoice, client: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="service" className="text-right">
                Service
              </Label>
              <Select 
                onValueChange={(value) => setNewInvoice({...newInvoice, service: value})}
                defaultValue={newInvoice.service}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Regular Cleaning">Regular Cleaning</SelectItem>
                  <SelectItem value="Deep Cleaning">Deep Cleaning</SelectItem>
                  <SelectItem value="Window Cleaning">Window Cleaning</SelectItem>
                  <SelectItem value="Commercial Cleaning">Commercial Cleaning</SelectItem>
                  <SelectItem value="Move-out Cleaning">Move-out Cleaning</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">
                Amount ($)
              </Label>
              <Input
                id="amount"
                placeholder="0.00"
                type="number"
                className="col-span-3"
                value={newInvoice.amount || ""}
                onChange={(e) => setNewInvoice({...newInvoice, amount: parseFloat(e.target.value)})}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                Date
              </Label>
              <Input
                id="date"
                type="date"
                className="col-span-3"
                value={newInvoice.date}
                onChange={(e) => setNewInvoice({...newInvoice, date: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">
                Status
              </Label>
              <Select 
                onValueChange={(value) => setNewInvoice({...newInvoice, status: value})}
                defaultValue={newInvoice.status}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" onClick={handleAddInvoice}>
              Create Invoice
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Invoices;
