import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import CleaningTasks from "./pages/CleaningTasks";
import SystemAnalysis from "./pages/SystemAnalysis";
import Performance from "./pages/Performance";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cleaning-tasks" element={<CleaningTasks />} />
            <Route path="/system-analysis" element={<SystemAnalysis />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/tools" element={<div className="p-6">Cleaning Tools Page</div>} />
            <Route path="/schedule" element={<div className="p-6">Schedule Page</div>} />
            <Route path="/trash" element={<div className="p-6">Trash Management Page</div>} />
            <Route path="/settings" element={<div className="p-6">Settings Page</div>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
