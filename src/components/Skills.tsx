
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Zap, Layers, Code, Target, Award } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "EDA Mastery",
      skills: ["Cadence Virtuoso", "Mentor Graphics", "Synopsys IC Compiler", "HSPICE", "Spectre", "ADS"],
      color: "blue",
      icon: Code,
      proficiency: 90
    },
    {
      title: "Layout Excellence",
      skills: ["Analog Layout", "Mixed-Signal Layout", "Floor Planning", "Routing", "DRC/LVS", "Parasitic Extraction"],
      color: "teal",
      icon: Layers,
      proficiency: 95
    },
    {
      title: "Circuit Design",
      skills: ["Op-Amps", "ADC/DAC", "PLLs", "Bandgap References", "Power Management", "RF Circuits"],
      color: "purple",
      icon: Zap,
      proficiency: 85
    },
    {
      title: "Technology",
      skills: ["CMOS Technology", "FinFET", "Process Corners", "Device Modeling", "Layout Rules", "Technology Files"],
      color: "green",
      icon: Cpu,
      proficiency: 88
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      teal: "from-teal-500 to-teal-600",
      purple: "from-purple-500 to-purple-600",
      green: "from-green-500 to-green-600"
    };
    return colors[color as keyof typeof colors];
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-600",
      teal: "text-teal-600",
      purple: "text-purple-600",
      green: "text-green-600"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-teal-500/10 backdrop-blur-sm rounded-full border border-blue-200/20 mb-6">
            <Target className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-700">Technical Expertise</span>
          </div>
          <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Skills That Deliver
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cutting-edge technical skills backed by intensive Moschip training and hands-on project experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${getColorClasses(category.color)}`}></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-center mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-r ${getColorClasses(category.color)} rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
                      <div className="flex items-center mt-1">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                          <div 
                            className={`h-2 bg-gradient-to-r ${getColorClasses(category.color)} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${category.proficiency}%` }}
                          ></div>
                        </div>
                        <span className={`text-sm font-bold ${getIconColor(category.color)}`}>
                          {category.proficiency}%
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:from-gray-100 hover:to-gray-200 transition-all transform hover:scale-105 cursor-default shadow-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 text-white text-center">
          <Award className="h-16 w-16 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">Why Choose Me?</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-black mb-2">100%</div>
              <p className="text-blue-100">Commitment to Excellence</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-2">24/7</div>
              <p className="text-blue-100">Dedication to Learning</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-2">∞</div>
              <p className="text-blue-100">Potential for Growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
