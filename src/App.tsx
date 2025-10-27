import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import AnimalProfile from "./pages/AnimalProfile";
import ShelterProfile from "./pages/ShelterProfile";
import HowToAdopt from "./pages/HowToAdopt";
import ForShelters from "./pages/ForShelters";
import About from "./pages/About";
import AdopterDashboard from "./pages/AdopterDashboard";
import ShelterDashboard from "./pages/ShelterDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/animal/:id" element={<AnimalProfile />} />
          <Route path="/shelter/:id" element={<ShelterProfile />} />
          <Route path="/how-to-adopt" element={<HowToAdopt />} />
          <Route path="/for-shelters" element={<ForShelters />} />
          <Route path="/about" element={<About />} />
          <Route path="/adopter-dashboard" element={<AdopterDashboard />} />
          <Route path="/shelter-dashboard" element={<ShelterDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;