import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import dataViz from "@/assets/data-viz.jpg";
import { useState, useMemo } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const DataVisualization = () => {
  const [year, setYear] = useState([2025]);

  // Dynamic stats based on year - simulating historical climate data trends
  const stats = useMemo(() => {
    const yearValue = year[0];
    const yearsSince2000 = yearValue - 2000;
    
    return [
      { 
        label: "Temperature", 
        value: `+${(0.8 + yearsSince2000 * 0.016).toFixed(2)}°C`,
        trend: "up",
        description: "Global avg vs pre-industrial"
      },
      { 
        label: "CO₂ Level", 
        value: `${Math.round(370 + yearsSince2000 * 2.0)} ppm`,
        trend: "up",
        description: "Atmospheric concentration"
      },
      { 
        label: "Sea Level", 
        value: `+${(2.8 + yearsSince2000 * 0.024).toFixed(1)} mm/yr`,
        trend: "up",
        description: "Annual rise rate"
      },
      { 
        label: "Ice Coverage", 
        value: `${(-10.5 - yearsSince2000 * 0.1).toFixed(1)}%/decade`,
        trend: "down",
        description: "Arctic sea ice decline"
      },
      { 
        label: "Forest Loss", 
        value: `${(7.5 + yearsSince2000 * 0.1).toFixed(1)}M ha/yr`,
        trend: "down",
        description: "Annual deforestation"
      },
    ];
  }, [year]);

  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        <Card className="bg-card/50 backdrop-blur-sm border-border shadow-glow overflow-hidden">
          <CardHeader className="text-center space-y-2 pb-8">
            <CardTitle className="text-4xl md:text-5xl font-bold">
              Data at a Glance
            </CardTitle>
            <p className="text-xl text-muted-foreground">
              Real-time insights from Terra's comprehensive Earth monitoring systems
            </p>
          </CardHeader>
          
          <CardContent className="space-y-8 p-8">
            {/* Timeline Info */}
            <div className="text-center space-y-2">
              <div className="text-sm text-muted-foreground">
                Showing data for 25 years
              </div>
              <div className="text-lg font-semibold">
                Jan 01, 2000 - Oct 05, 2025
              </div>
            </div>

            {/* Year Slider */}
            <div className="space-y-4 px-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Selected Year:</span>
                <span className="text-2xl font-bold text-primary">{year[0]}</span>
              </div>
              <Slider
                value={year}
                onValueChange={setYear}
                min={2000}
                max={2025}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>2000</span>
                <span>2010</span>
                <span>2020</span>
                <span>2025</span>
              </div>
            </div>

            {/* Visualization Image */}
            <div className="relative rounded-lg overflow-hidden shadow-glow">
              <img 
                src={dataViz} 
                alt="Terra data visualization" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>

            {/* Dynamic Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg bg-gradient-to-br from-card to-muted/30 text-center space-y-2 hover:shadow-card transition-smooth border border-border/50 animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                  <div className="flex items-center justify-center gap-1">
                    <div className={`text-lg font-bold ${stat.trend === 'down' ? 'text-destructive' : 'text-primary'}`}>
                      {stat.value}
                    </div>
                    {stat.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-destructive group-hover:animate-pulse" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-destructive group-hover:animate-pulse" />
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground/80">{stat.description}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DataVisualization;
