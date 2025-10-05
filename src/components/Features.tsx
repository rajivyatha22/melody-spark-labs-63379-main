import { Card, CardContent } from "@/components/ui/card";
import { Eye, Camera, Scan, Trees, Waves, Wind } from "lucide-react";

const Features = () => {
  const instruments = [
    {
      icon: Eye,
      name: "MODIS",
      fullName: "Moderate Resolution Imaging Spectroradiometer",
      description: "Captures data in 36 spectral bands spanning visible to thermal infrared wavelengths. Monitors large-scale global dynamics including cloud formation, water vapor distribution, ocean phytoplankton, vegetation health, land surface cover, and fire activity across Earth's entire surface every 1-2 days.",
      specs: "2330km swath | 36 bands | 250m-1km resolution"
    },
    {
      icon: Camera,
      name: "ASTER",
      fullName: "Advanced Spaceborne Thermal Emission and Reflection Radiometer",
      description: "Creates highly detailed maps of land surface temperature, emissivity, reflectance, and elevation with exceptional 15-90m spatial resolution. Essential for studying volcanic activity, glacier dynamics, land use change, natural hazards, and creating precise digital elevation models for scientific research.",
      specs: "60km swath | 14 bands | 15-90m resolution"
    },
    {
      icon: Scan,
      name: "MISR",
      fullName: "Multi-angle Imaging SpectroRadiometer",
      description: "Views Earth with cameras pointed at 9 different angles spanning ±70° to study clouds, aerosols, surface properties, and atmospheric particle characteristics. Unique multi-angle capability enables advanced 3D mapping of clouds, plume heights, and aerosol optical properties impossible from single-view satellites.",
      specs: "360km swath | 9 angles | 275m-1.1km resolution"
    },
  ];

  const dataCategories = [
    {
      icon: Trees,
      label: "Land",
      color: "from-green-500 to-emerald-600",
      image: "/images/terra-land.jpg",
      description: "Monitoring terrestrial ecosystems, vegetation health, and land surface changes",
      metrics: [
        { label: "Forest Coverage", value: "31% of Earth", change: "-10M ha/year" },
        { label: "Surface Temperature", value: "15.5°C avg", change: "+1.2°C since 1880" },
        { label: "Vegetation Index", value: "NDVI 0.6", change: "Seasonal variation" },
        { label: "Land Use Change", value: "~1% annually", change: "Agriculture expansion" }
      ]
    },
    {
      icon: Waves,
      label: "Ocean",
      color: "from-blue-500 to-cyan-600",
      image: "/images/terra-ocean.jpg",
      description: "Tracking sea surface temperatures, ocean color, and marine ecosystems",
      metrics: [
        { label: "Surface Temperature", value: "17.5°C avg", change: "+0.13°C/decade" },
        { label: "Ocean Coverage", value: "71% of Earth", change: "Stable" },
        { label: "Chlorophyll Level", value: "0.2 mg/m³", change: "Phytoplankton health" },
        { label: "Sea Level Rise", value: "3.4mm/year", change: "Accelerating" }
      ]
    },
    {
      icon: Wind,
      label: "Atmosphere",
      color: "from-purple-500 to-indigo-600",
      image: "/images/terra-atmosphere.jpg",
      description: "Observing cloud patterns, aerosols, and atmospheric composition",
      metrics: [
        { label: "Cloud Coverage", value: "67% global", change: "Variable patterns" },
        { label: "CO₂ Concentration", value: "420 ppm", change: "+2.5 ppm/year" },
        { label: "Aerosol Optical Depth", value: "0.15 avg", change: "Air quality indicator" },
        { label: "Ozone Layer", value: "300 DU", change: "Recovering slowly" }
      ]
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Scientific Instruments
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Terra's five cutting-edge scientific instruments work in perfect harmony, capturing data across 36 spectral bands to provide unprecedented, multi-dimensional insights into Earth's interconnected climate systems and environmental processes
          </p>
        </div>

        {/* Instruments Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {instruments.map((instrument, index) => {
            const Icon = instrument.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border shadow-card hover:shadow-glow transition-smooth group"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-smooth">
                    <Icon className="w-10 h-10 text-primary group-hover:animate-pulse" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {instrument.name}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    {instrument.fullName}
                  </div>
                  <p className="text-sm leading-relaxed mb-4">
                    {instrument.description}
                  </p>
                  <div className="pt-3 border-t border-border/50">
                    <div className="text-xs font-mono text-primary/80">{instrument.specs}</div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Data Categories - Land, Ocean, Atmosphere */}
        <div className="mt-24 space-y-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Earth System Monitoring
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive data collection across Earth's interconnected systems
            </p>
          </div>

          {dataCategories.map((category, index) => {
            const Icon = category.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Image Section */}
                <div className={`relative group ${!isEven ? 'md:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-glow">
                    <img 
                      src={category.image}
                      alt={`Terra ${category.label} monitoring`}
                      className="w-full h-[400px] object-cover group-hover:scale-110 transition-smooth duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 group-hover:opacity-30 transition-smooth`}></div>
                    <div className="absolute top-6 left-6">
                      <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${category.color} shadow-glow`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Section */}
                <div className={`space-y-6 ${!isEven ? 'md:order-1' : ''}`}>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3">
                      <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                        {category.label}
                      </span>
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {category.metrics.map((metric, idx) => (
                      <Card 
                        key={idx}
                        className="bg-card/50 backdrop-blur-sm border-border hover:shadow-glow transition-smooth group"
                      >
                        <CardContent className="p-4">
                          <div className="text-xs text-muted-foreground mb-1">{metric.label}</div>
                          <div className="text-xl font-bold text-primary mb-1">{metric.value}</div>
                          <div className="text-xs text-muted-foreground/80">{metric.change}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="pt-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} animate-pulse`}></div>
                      <span className="text-sm">Real-time monitoring active</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
