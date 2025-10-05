import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import terraVideo from "@/assets/terra-background.mp4";
import exploreData from "@/assets/explore-data.jpg";
import learnMore from "@/assets/learn-more.jpg";
import { Satellite, Globe, Database, TrendingUp, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={terraVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background"></div>
        {/* Animated lighting overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm shadow-glow animate-fade-in">
            <Satellite className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium">NASA Space Apps Challenge 2025</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-scale-in">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(66,153,225,0.5)]">
              Terra Data
            </span>
            <br />
            <span className="text-foreground drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">Celebration</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            25 years of revolutionary Earth observation data from NASA's Terra satellite, 
            transforming our understanding of climate and environmental change.
          </p>

          {/* CTA Cards with Images */}
          <div className="grid md:grid-cols-2 gap-6 pt-6 max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-border shadow-glow hover:shadow-[0_0_60px_rgba(66,153,225,0.6)] transition-smooth group overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-smooth">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img src={exploreData} alt="Explore Terra data" className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                  <Database className="absolute top-4 right-4 w-8 h-8 text-primary group-hover:animate-pulse" />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    Explore the Data
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Access 25 years of comprehensive Earth observation data. Analyze temperature trends, vegetation indices, atmospheric conditions, and more through interactive visualizations.
                  </p>
                  <Button variant="hero" className="w-full group">
                    Start Exploring
                    <Database className="w-4 h-4 ml-2 group-hover:animate-pulse" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border shadow-glow hover:shadow-[0_0_60px_rgba(196,106,228,0.6)] transition-smooth group overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-accent/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-smooth">
              <CardContent className="p-0 relative z-10">
                <div className="relative h-48 overflow-hidden">
                  <img src={learnMore} alt="Learn about Terra" className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                  <Globe className="absolute top-4 right-4 w-8 h-8 text-accent group-hover:animate-pulse" />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-accent" />
                    Learn More
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Discover Terra's scientific instruments, mission objectives, and the groundbreaking research enabled by its unprecedented Earth observation capabilities.
                  </p>
                  <Button variant="outline" className="w-full group">
                    Discover Terra
                    <Globe className="w-4 h-4 ml-2 group-hover:rotate-12 transition-smooth" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
            {[
              { value: "25+", label: "Years" },
              { value: "14", label: "Daily Orbits" },
              { value: "100%", label: "Global Coverage" },
              { value: "10,000+", label: "Publications" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border shadow-card hover:shadow-glow transition-smooth group relative overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2 drop-shadow-[0_0_10px_rgba(66,153,225,0.5)]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Animation Elements with Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-float opacity-80 shadow-[0_0_20px_rgba(66,153,225,0.8)]"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-accent rounded-full animate-float opacity-60 shadow-[0_0_25px_rgba(196,106,228,0.8)]" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-secondary rounded-full animate-float opacity-70 shadow-[0_0_20px_rgba(139,92,246,0.8)]" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-primary rounded-full animate-float opacity-50 shadow-[0_0_15px_rgba(66,153,225,0.6)]" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-accent rounded-full animate-float opacity-60 shadow-[0_0_20px_rgba(196,106,228,0.7)]" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
