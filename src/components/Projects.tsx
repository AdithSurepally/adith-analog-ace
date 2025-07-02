
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Zap, Cpu, Layers } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Operational Amplifier Layout",
      description: "Design and layout of a high-precision two-stage operational amplifier with compensation network. Achieved excellent matching and low offset voltage through careful device placement and routing.",
      technologies: ["Cadence Virtuoso", "CMOS 180nm", "DRC/LVS", "Parasitic Extraction"],
      features: [
        "Gain: 80dB",
        "Offset: <1mV",
        "Power: 2.5mW",
        "Area: 0.12mm²"
      ],
      icon: Zap,
      color: "blue"
    },
    {
      title: "ADC Layout Design",
      description: "Complete layout implementation of a 10-bit SAR ADC including comparator, DAC array, and control logic. Focused on minimizing noise coupling and optimizing settling time.",
      technologies: ["Mixed-Signal Design", "Cadence", "SPICE", "Layout Verification"],
      features: [
        "Resolution: 10-bit",
        "Sampling: 1MSPS",
        "INL: <0.5LSB",
        "Power: 5mW"
      ],
      icon: Cpu,
      color: "purple"
    },
    {
      title: "Power Management Unit",
      description: "Layout design for a complete PMU including linear regulators, switching converters, and reference circuits. Emphasis on thermal management and EMI reduction.",
      technologies: ["Power Electronics", "Thermal Analysis", "EMI/EMC", "Multi-layer Routing"],
      features: [
        "Efficiency: >85%",
        "Load Reg: <1%",
        "Thermal: <5°C/W",
        "Area: 2.5mm²"
      ],
      icon: Layers,
      color: "green"
    }
  ];

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-500",
      purple: "text-purple-500",
      green: "text-green-500"
    };
    return colors[color as keyof typeof colors];
  };

  const getBgColor = (color: string) => {
    const colors = {
      blue: "from-blue-50 to-blue-100",
      purple: "from-purple-50 to-purple-100",
      green: "from-green-50 to-green-100"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="projects" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
          Training Projects
        </h2>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${getBgColor(project.color)}`}></div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <IconComponent className={`h-8 w-8 ${getIconColor(project.color)} mr-3`} />
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Specifications:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="bg-gray-50 rounded px-2 py-1 text-xs text-gray-700">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Details
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <Github className="h-3 w-3 mr-1" />
                      Files
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready for New Challenges</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              These training projects have equipped me with solid fundamentals in analog layout design. 
              I'm excited to apply these skills to real-world challenges and contribute to innovative semiconductor solutions.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Discuss Your Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
