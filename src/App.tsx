import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Index from "./pages/Index";
import Purpose from "./pages/Purpose";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";


import BiotechMotif from "@/components/BiotechMotif";

const queryClient = new QueryClient();

function AppShell() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-background via-background-secondary to-background-tertiary text-foreground">
      <Toaster />
      <Sonner />

      {/* staple motif: consistent across pages; only animated on home */}
      <BiotechMotif
        animated={isHome}
        opacity={isHome ? 0.18 : 0.12}
        className="pointer-events-none select-none fixed z-0 right-6 top-16 h-28 w-28 md:h-36 md:w-36 text-foreground/70 blur-[0.2px]"
      />

      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/purpose" element={<Purpose />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <AppShell />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
