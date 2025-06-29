import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { RainbowKitProvider } from "@/components/RainbowKitProvider";
import { useEffect } from "react";
import { AppKitProvider } from "./AppKitProvider";

import Index from "./pages/Index";
import AppPage from "./pages/AppPage";
import NotFound from "./pages/NotFound";
import Docs from "./pages/Docs";

const App = () => {
  useEffect(() => {
    if (window.ArenaAppStoreSdk && !window.arenaAppStoreSdk) {
      window.arenaAppStoreSdk = new window.ArenaAppStoreSdk({
        projectId: "YOUR_PROJECT_ID",
        metadata: {
          name: "Your App Name",
          description: "Your App Description",
          url: window.location.href,
          icons: ["https://your-app.com/icon.png"],
        },
      });
    }
  }, []);

  return (
    <AppKitProvider>
      <ThemeProvider defaultTheme="dark">
        <RainbowKitProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/app" element={<AppPage />} />
                <Route path="/docs" element={<Docs />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </RainbowKitProvider>
      </ThemeProvider>
    </AppKitProvider>
  );
};

export default App;
