
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "EDA Tools",
      skills: ["Cadence Virtuoso", "Mentor Graphics", "Synopsys IC Compiler", "HSPICE", "Spectre", "ADS"],
      color: "blue"
    },
    {
      title: "Layout Design",
      skills: ["Analog Layout", "Mixed-Signal Layout", "Floor Planning", "Routing", "DRC/LVS", "Parasitic Extraction"],
      color: "teal"
    },
    {
      title: "Circuit Design",
      skills: ["Op-Amps", "ADC/DAC", "PLLs", "Bandgap References", "Power Management", "RF Circuits"],
      color: "purple"
    },
    {
      title: "Process & Technology",
      skills: ["CMOS Technology", "FinFET", "Process Corners", "Device Modeling", "Layout Rules", "Technology Files"],
      color: "green"
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

  return (
    <section id="skills" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className={`w-full h-2 bg-gradient-to-r ${getColorClasses(category.color)} rounded-full mb-4`}></div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{category.title}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-gray-800">Proficiency Levels</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">85%</span>
              </div>
              <h4 className="font-semibold text-gray-800">Layout Design</h4>
              <p className="text-gray-600 text-sm">Advanced proficiency</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">80%</span>
              </div>
              <h4 className="font-semibold text-gray-800">EDA Tools</h4>
              <p className="text-gray-600 text-sm">Proficient user</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">75%</span>
              </div>
              <h4 className="font-semibold text-gray-800">Circuit Analysis</h4>
              <p className="text-gray-600 text-sm">Strong foundation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
