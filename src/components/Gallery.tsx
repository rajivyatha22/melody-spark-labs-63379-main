import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mountain, Droplets, Cloud, Flame, Trees } from "lucide-react";
import himalayanGlaciers from "@/assets/gallery/himalayan-glaciers.jpg";
import oceanTemperature from "@/assets/gallery/ocean-temperature.jpg";
import cloudFormation from "@/assets/gallery/cloud-formation.jpg";
import wildfireDetection from "@/assets/gallery/wildfire-detection.jpg";
import rainforestCoverage from "@/assets/gallery/rainforest-coverage.jpg";
import desertExpansion from "@/assets/gallery/desert-expansion.jpg";

const Gallery = () => {
  const categories = [
    { id: "all", label: "All", icon: null },
    { id: "land", label: "Land", icon: Mountain },
    { id: "ocean", label: "Ocean", icon: Droplets },
    { id: "atmosphere", label: "Atmosphere", icon: Cloud },
    { id: "fire", label: "Fire", icon: Flame },
    { id: "vegetation", label: "Vegetation", icon: Trees },
  ];

  const images = [
    { 
      category: "land", 
      title: "Himalayan Glaciers", 
      description: "High-resolution ASTER imagery reveals dramatic glacier retreat patterns across the Himalayan range, providing crucial data for water resource management",
      image: himalayanGlaciers,
      stats: "15% reduction since 2000"
    },
    { 
      category: "ocean", 
      title: "Ocean Temperature", 
      description: "MODIS sea surface temperature data showing warming anomalies and El Niño patterns critical for climate modeling and marine ecosystem health",
      image: oceanTemperature,
      stats: "+0.18°C per decade"
    },
    { 
      category: "atmosphere", 
      title: "Cloud Formation", 
      description: "Multi-angle MISR observations capture atmospheric moisture dynamics and cloud formation processes essential for weather prediction",
      image: cloudFormation,
      stats: "9 viewing angles"
    },
    { 
      category: "fire", 
      title: "Wildfire Detection", 
      description: "MODIS thermal bands detect active fires and burn scars in near real-time, supporting wildfire response teams and emissions monitoring",
      image: wildfireDetection,
      stats: "Daily global coverage"
    },
    { 
      category: "vegetation", 
      title: "Rainforest Coverage", 
      description: "Terra's vegetation indices track photosynthetic activity and deforestation patterns across tropical rainforests, monitoring Earth's lungs",
      image: rainforestCoverage,
      stats: "250m resolution"
    },
    { 
      category: "land", 
      title: "Desert Expansion", 
      description: "Long-term MODIS data reveals desertification trends and land degradation, informing sustainable land management policies",
      image: desertExpansion,
      stats: "25-year time series"
    },
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Earth Observations Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stunning imagery capturing our planet's dynamic systems from 705km above Earth
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center gap-2 h-auto bg-transparent mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:shadow-card transition-smooth"
                >
                  {Icon && <Icon className="w-4 h-4 mr-2" />}
                  {category.label}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <Card 
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border shadow-card hover:shadow-glow transition-smooth group overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={image.image} 
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
                      <div className="absolute bottom-4 right-4 px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-semibold">
                        {image.stats}
                      </div>
                    </div>
                    <div className="p-6 space-y-2">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">{image.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{image.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {categories.slice(1).map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images
                  .filter((img) => img.category === category.id)
                  .map((image, index) => (
                    <Card 
                      key={index}
                      className="bg-card/50 backdrop-blur-sm border-border shadow-card hover:shadow-glow transition-smooth group overflow-hidden"
                    >
                      <CardContent className="p-0">
                        <div className="aspect-video relative overflow-hidden">
                          <img 
                            src={image.image} 
                            alt={image.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
                          <div className="absolute bottom-4 right-4 px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-semibold">
                            {image.stats}
                          </div>
                        </div>
                        <div className="p-6 space-y-2">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">{image.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{image.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;
