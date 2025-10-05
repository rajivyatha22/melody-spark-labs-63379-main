import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Orbit, Globe, BookOpen } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Calendar,
      value: "25+",
      label: "Years of Continuous Data",
      subtitle: "Since December 1999",
    },
    {
      icon: Orbit,
      value: "14",
      label: "Daily Orbits Around Earth",
      subtitle: "705km Altitude",
    },
    {
      icon: Globe,
      value: "100%",
      label: "Global Coverage Every 1-2 Days",
      subtitle: "2330km Swath Width",
    },
    {
      icon: BookOpen,
      value: "10,000+",
      label: "Scientific Publications",
      subtitle: "Global Research Impact",
    },
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Mission by the Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Terra's remarkable achievements in Earth observation have transformed our understanding of global climate systems and environmental change over more than two decades of continuous operation
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border shadow-card hover:shadow-glow transition-smooth group overflow-hidden relative"
              >
                <CardContent className="p-8 space-y-4 relative z-10">
                  <Icon className="w-10 h-10 text-primary group-hover:animate-pulse" />
                  <div className="space-y-2">
                    <div className="text-5xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold">
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.subtitle}
                    </div>
                  </div>
                </CardContent>
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
