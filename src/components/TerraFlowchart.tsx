import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Satellite, Radio, Database, LineChart, Users, Globe2 } from "lucide-react";

const TerraFlowchart = () => {
  const flowSteps = [
    {
      icon: Satellite,
      title: "Data Collection",
      description: "Terra orbits Earth 14 times daily at 705km altitude, capturing data through 5 advanced instruments",
      details: "MODIS, ASTER, MISR, CERES, MOPITT",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Radio,
      title: "Data Transmission",
      description: "Raw data transmitted to ground stations via X-band at 150 Mbps, processing 194 GB daily",
      details: "150 Mbps downlink speed",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Database,
      title: "Processing & Archive",
      description: "NASA's EOS Data and Information System processes and archives data at multiple levels",
      details: "Level 0 to Level 4 products",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: LineChart,
      title: "Analysis & Research",
      description: "Scientists worldwide analyze Terra data for climate studies, disaster monitoring, and Earth system research",
      details: "10,000+ publications",
      color: "from-orange-500/20 to-yellow-500/20"
    },
    {
      icon: Users,
      title: "Community Distribution",
      description: "Free public access through NASA Earthdata, serving researchers, policymakers, and educators globally",
      details: "Open access policy",
      color: "from-red-500/20 to-rose-500/20"
    },
    {
      icon: Globe2,
      title: "Global Impact",
      description: "Insights drive climate policy, disaster response, resource management, and environmental conservation",
      details: "Worldwide applications",
      color: "from-indigo-500/20 to-violet-500/20"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Terra Data Flow
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From orbital observation to global impact: Follow Terra's data journey through collection, processing, and application
          </p>
        </div>

        {/* Flowchart */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {flowSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <Card className={`bg-gradient-to-br ${step.color} backdrop-blur-sm border-border shadow-card hover:shadow-glow transition-smooth group h-full`}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary/10 border border-primary/30 group-hover:scale-110 transition-smooth">
                        <Icon className="w-8 h-8 text-primary group-hover:animate-pulse" />
                      </div>
                      <div>
                        <div className="text-sm font-mono text-muted-foreground mb-1">Step {index + 1}</div>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    <div className="pt-2 px-3 py-2 bg-muted/50 rounded-lg border border-border/50">
                      <div className="text-xs text-muted-foreground mb-1">Key Metric</div>
                      <div className="text-sm font-semibold text-primary">{step.details}</div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Connection arrow - only show on larger screens and not on last item in row */}
                {index < flowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent animate-pulse"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-accent border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mermaid-style visual summary */}
        <div className="mt-16 p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border shadow-glow">
          <h3 className="text-2xl font-bold text-center mb-8">Data Processing Pipeline</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <div className="flex-1 space-y-2 animate-fade-in">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Satellite className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm font-semibold">Satellite</div>
              <div className="text-xs text-muted-foreground">Orbit & Capture</div>
            </div>
            
            <div className="text-2xl text-primary animate-pulse">→</div>
            
            <div className="flex-1 space-y-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Radio className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm font-semibold">Transmission</div>
              <div className="text-xs text-muted-foreground">Downlink Data</div>
            </div>
            
            <div className="text-2xl text-primary animate-pulse">→</div>
            
            <div className="flex-1 space-y-2 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <Database className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm font-semibold">Processing</div>
              <div className="text-xs text-muted-foreground">Archive & Format</div>
            </div>
            
            <div className="text-2xl text-primary animate-pulse">→</div>
            
            <div className="flex-1 space-y-2 animate-fade-in" style={{ animationDelay: '600ms' }}>
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
                <Globe2 className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm font-semibold">Distribution</div>
              <div className="text-xs text-muted-foreground">Global Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerraFlowchart;
