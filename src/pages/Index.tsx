import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import DataVisualization from "@/components/DataVisualization";
import TerraFlowchart from "@/components/TerraFlowchart";
import Gallery from "@/components/Gallery";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Stats />
      <DataVisualization />
      <TerraFlowchart />
      <Gallery />
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto text-center space-y-4">
          <div className="text-sm text-muted-foreground">
            NASA Space Apps Challenge 2025 - Terra Data Celebration
          </div>
          <div className="text-xs text-muted-foreground">
            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
